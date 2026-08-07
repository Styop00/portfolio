/**
 * Emits a JSON-LD `@graph` into the page head.
 *
 * Every route here is prerendered, so the structured data is baked into the
 * HTML at build time and costs nothing at runtime — which is why this exists
 * instead of a schema.org module with a client-side runtime.
 */
export function useJsonLd(nodes: Record<string, unknown>[]) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': nodes
        })
      }
    ]
  })
}
