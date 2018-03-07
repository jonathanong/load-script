
module.exports = (src, options = {}) => new Promise((resolve, reject) => {
  let { timeout } = options
  if (typeof timeout === 'number') {
    timeout = Math.max(timeout, 1)

    if (typeof requestIdleCallback === 'function') {
      requestIdleCallback(loadScript, {
        timeout
      })
      return
    }

    setTimeout(loadScript, timeout)
    return
  }

  loadScript()

  function loadScript () {
    const script = document.createElement('script')
    script.addEventListener('load', () => resolve(script))
    script.addEventListener('error', () => reject(new Error(`Failed to load script: "${src}"`)))
    if (options.type) script.type = options.type
    if (options.charset) script.charset = options.charset
    if (options.id) script.id = options.id
    if (typeof options.noModule === 'boolean') script.noModule = options.noModule
    script.async = options.async !== false
    script.defer = options.defer !== false
    script.src = src
    document.head.appendChild(script)
  }
})
