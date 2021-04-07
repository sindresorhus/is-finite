Deprecated as this is now natively available in all modern browsers and Node.js versions.

---

# is-finite

> ES2015 [`Number.isFinite()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) [ponyfill](https://ponyfill.com)

## Install

```
$ npm install is-finite
```

## Usage

```js
var numIsFinite = require('is-finite');

numIsFinite(4);
//=> true

numIsFinite(Infinity);
//=> false
```
