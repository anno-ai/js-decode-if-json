const { decodeIfJson } = require('./index.js')

const test1 = decodeIfJson('Hello World', {defaultValue: 'Hello World Default'})
console.log(test1)
