# rent [![Build Status](https://travis-ci.org/bendrucker/rent.svg?branch=master)](https://travis-ci.org/bendrucker/rent)

> Concisely test rendering functions with support for observable state


## Install

```
$ npm install --save rent
```


## Usage

```js
var rent = require('rent')

function renderFn (state) {
  return state.name + ' is rendered'
}
var state = {
  name: 'Ben'
}
var render = rent(renderFn, state)
render(function (rendered) {
  //=> Ben is rendered
})
```

Or with observable state:

```js
var rent = require('rent')
var Observ = require('observ')

function renderFn (state) {
  return state.name + ' is rendered'
}
var state = Observ({
  name: 'Ben'
})
var render = rent(renderFn, state)
render(function (rendered) {
  //=> Ben is rendered
})
```

## API

#### `rent(renderFn, state)` -> `undefined`

##### renderFn

*Required*  
Type: `function`

A render function that takes state and returns rendered content (like a string or a virtual DOM tree).

##### state


*Required*  
Type: `any` / `function`

A state value or a function that can be called to get the current state.

## License

MIT © [Ben Drucker](http://bendrucker.me)
