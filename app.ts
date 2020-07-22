require('ts-node/register')

const { decodeIfJson } = require('./lib/index')

const test1 = decodeIfJson('Hello World', { defaultValue: 'Hello World Default' })
console.log(test1)
