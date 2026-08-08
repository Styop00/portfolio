#!/usr/bin/env node
// Serves .output/public the way GitHub Pages actually will: nested under the
// app's configured baseURL (a project site's repo name becomes a URL path
// segment on GitHub's server, which a bare local static server has no way to
// know about). `nuxt start` / `npx serve .output/public` serve the files at
// the server's own root instead, so every asset the generated HTML requests
// at `/portfolio/_nuxt/...` 404s locally even though the exact same build is
// fine once actually deployed. This script closes that gap so
// `npm run generate && npm run start` reflects production.
import { createServer } from 'node:http'
import { createReadStream, existsSync, statSync } from 'node:fs'
import { extname, join, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('../.output/public', import.meta.url))
const PORT = Number(process.env.PORT) || 3000

if (!existsSync(ROOT)) {
  console.error(`No build found at ${ROOT} — run "npm run generate" first.`)
  process.exit(1)
}

// Read the configured baseURL straight from the generated HTML rather than
// re-parsing nuxt.config.ts, so this never drifts out of sync with it.
const indexHtml = existsSync(join(ROOT, 'index.html'))
  ? await import('node:fs/promises').then((fs) => fs.readFile(join(ROOT, 'index.html'), 'utf8'))
  : ''
const baseMatch = indexHtml.match(/<script[^>]+src="(\/[^"/]+)\/_nuxt\//)
const PREFIX = baseMatch ? baseMatch[1] : ''

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.xsl': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff2': 'font/woff2'
}

createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost')

  if (url.pathname === '/' && PREFIX) {
    res.writeHead(302, { Location: `${PREFIX}/` })
    res.end()
    return
  }

  if (PREFIX && !url.pathname.startsWith(PREFIX)) {
    res.writeHead(404)
    res.end(`Not found — this build is served under ${PREFIX}/`)
    return
  }

  const relative = PREFIX ? url.pathname.slice(PREFIX.length) || '/' : url.pathname
  let path = join(ROOT, normalize(decodeURIComponent(relative)))

  if (existsSync(path) && statSync(path).isDirectory()) path = join(path, 'index.html')
  if (!existsSync(path)) {
    const withHtml = `${path}.html`
    path = existsSync(withHtml) ? withHtml : join(ROOT, '404.html')
  }

  const ext = extname(path)
  res.setHeader('Content-Type', types[ext] || 'application/octet-stream')
  res.writeHead(path.endsWith('404.html') && !existsSync(path) ? 404 : 200)
  createReadStream(path).pipe(res)
}).listen(PORT, () => {
  console.log(`Serving .output/public at http://localhost:${PORT}${PREFIX}/`)
})
