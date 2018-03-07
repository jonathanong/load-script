
# @jongleberry/load-script

[![Build Status](https://travis-ci.org/jonathanong/load-script.svg?branch=master)](https://travis-ci.org/jonathanong/load-script)
[![codecov](https://codecov.io/gh/jonathanong/load-script/branch/master/graph/badge.svg)](https://codecov.io/gh/jonathanong/load-script)

Script loader with:

- `Promise` support
- `requestIdleCallback` support

Installation:

```bash
npm install --save-dev @jongleberry/load-script
```

Example:

```js
import loadScript from '@jongleberry/load-script'

loadScript('https://www.googletagmanager.com/ns.html?id=GTM-XXXX', {
  timeout: 1000
}).catch((err) => {
  console.error(err.stack)
})
```

## API

### const script = await loadScript(src [, options])

- `src` - JS source URL
- `options`:
  - `type`
  - `charset`
  - `id`
  - `noModule`
  - `async`
  - `defer`
  - `timeout` - timeout passed to `requestIdleCallback`, falling back to `setTimeout`. Set to 0 to load JS in at least the next tick.

Returns the script element when it's resolved.
