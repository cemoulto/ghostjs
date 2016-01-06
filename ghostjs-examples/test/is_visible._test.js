import ghost from 'ghostjs'
import assert from 'assert'

import localServer from './fixtures/server.js'

describe('Element#isVisible', () => {

  localServer()

  it('checks on visibility status', async () => {
    await ghost.open('http://localhost:8888/basic_content.html')

    let body = ghost.findElement('body')
    assert.equal(await body.isVisible(), true)

    await body.scriptWith((body) => {
      document.body.style.display = 'none'
    });
    assert.equal(await body.isVisible(), false)
  })
})
