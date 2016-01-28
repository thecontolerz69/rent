'use strict'

var test = require('tape')
var rent = require('./')

test(function (t) {
  t.plan(3)

  var state = 'value state'
  function renderFn (state) {
    return 'rendered ' + state
  }
  var render = rent(renderFn, state)

  t.equal(render(), 'rendered value state', 'value state')

  state = function () {
    return 'observable state'
  }
  render = rent(renderFn, state)
  t.equal(render(), 'rendered observable state', 'observable fn state')

  t.throws(rent, 'must be a function')
})
