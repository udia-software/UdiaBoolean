'use strict';

var test = require('tape');
var boolean = require('./');

test(function(t) {
  t.plan(3);

  t.equal(boolean.t(), true);
  t.equal(boolean.f(), false);

  var maybe = boolean.m();
  if (maybe === boolean.t()) {
    t.equal(maybe, true);
  } else if (maybe === boolean.f()) {
    t.equal(maybe, false);
  } else {
    t.equal(false, true);
  }
  t.end();
});
