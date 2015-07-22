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
  render(function (rendered) {
    t.equal(rendered, 'rendered value state', 'value state')
  })
  state = function () {
    return 'observable state'
  }
  render = rent(renderFn, state)
  render(function (rendered) {
    t.equal(rendered, 'rendered observable state', 'observable fn state')
  })
  t.throws(rent, 'must be a function')
})
