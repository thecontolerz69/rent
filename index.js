'use strict'

module.exports = function rent (renderFn, state) {
  if (typeof renderFn !== 'function') {
    throw new TypeError('render must be a function, got ' + renderFn)
  }

  return function render (callback) {
    var currentState = typeof state === 'function' ? state() : state
    callback(renderFn(currentState))
  }
}
