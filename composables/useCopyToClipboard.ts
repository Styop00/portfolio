/**
 * Tracks which value was most recently copied so a single component can show
 * per-item "Copied" feedback without a ref per row.
 */
export function useCopyToClipboard(resetAfter = 2200) {
  const copiedKey = ref<string | null>(null)
  let timer: ReturnType<typeof setTimeout> | undefined

  /** Legacy path — also the fallback when the async API exists but rejects. */
  function execCommandCopy(value: string) {
    const field = document.createElement('textarea')
    field.value = value
    field.setAttribute('readonly', '')
    field.style.cssText = 'position:fixed;top:-1000px;opacity:0'
    document.body.appendChild(field)
    field.select()
    const ok = document.execCommand('copy')
    field.remove()
    if (!ok) throw new Error('copy command rejected')
  }

  async function writeText(value: string) {
    // The Clipboard API can exist and still reject — denied permission, an
    // unfocused document, a non-secure context — so treat any failure as a
    // reason to fall back rather than only checking for its absence.
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(value)
        return
      } catch {
        /* fall through */
      }
    }
    execCommandCopy(value)
  }

  async function copy(key: string, value: string) {
    try {
      await writeText(value)
    } catch {
      return
    }
    copiedKey.value = key
    clearTimeout(timer)
    timer = setTimeout(() => {
      if (copiedKey.value === key) copiedKey.value = null
    }, resetAfter)
  }

  onScopeDispose(() => clearTimeout(timer))

  return { copiedKey, copy }
}
