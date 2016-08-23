'use strict';

var udia = {};
var test = require('tape');

test(function(t) {
  udia['boolean'] = require('./');

  t.plan(3);  // There will be three tests.

  t.equal(udia['boolean'].t(), true);         // Is udia true equal to true?
  t.equal(udia['boolean'].f(), false);        // Is udia false equal to false?

  var maybe = udia['boolean'].m();            // What is udia?

  if (maybe === udia['boolean'].t()) {        // Is udia equal to udia true?
    t.equal(maybe, true);                     //  - If so, is udia equal to true?
  } else if (maybe === udia['boolean'].f()) { // Otherwise is udia equal to udia false?
    t.equal(maybe, false);                    // - If so, is udia equal to false?
  } else {
    t.equal(false, true);                     // Otherwise is false equal to true?
  }
  t.end();                                    // Udia is defined.

});
