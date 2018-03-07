
const assert = require('assert')

const loadScript = require('..')

const src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'

test('load jquery', async () => {
  const promise = loadScript(src, {
    id: 'test',
    timeout: 1000
  })

  assert(!document.querySelector('#test'))

  await promise

  assert(document.querySelector('#test'))
  assert(window.$)
})
