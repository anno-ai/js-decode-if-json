![Node.js Unit Tests](https://github.com/anno-ai/js-decode-if-json/workflows/Node.js%20Unit%20Tests/badge.svg)

# js-decode-if-json
A helper method that decodes a value if json else defaults to an input value.

```js
const test = decodeIfJson('Hello World', { defaultValue: 'Hello World Default' });
console.log(test); // { defaultValue: 'Hello World Default' }
```
