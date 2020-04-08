const chai = require('chai')
const assert = chai.assert
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const { decodeIfJson } = require('../lib/index')

describe('decode if json', () => {
  it('should decode an empty json string as an object', async () => {
    const value = decodeIfJson('{}')
    assert.deepEqual(value, {})
  })

  it('should not decode an invalid json string and return null by default', async () => {
    const value = decodeIfJson('{/}')
    assert.isNull(value)
  })

  it('should decode a populated json string as an object', async () => {
    const value = decodeIfJson('{ "hello": "world"}')
    assert.deepEqual(value, { hello: 'world' })
  })

  it('should not decode a number and return a number', async () => {
    const value = decodeIfJson(100)
    assert.equal(value, 100)
  })

  it('should not decode a string and return a string as default', async () => {
    const someString = 'Hello World'
    const value = decodeIfJson(someString, someString)
    assert.equal(value, someString)
  })
})
