/**
 * Udia
 *
 * Boolean
 *
 * (true, false, maybe)
 * (t, f, m)
 *
 * @type {{t: module.exports.t, f: module.exports.f, m: module.exports.m}}
 */
module.exports = {
  t: function() {
    return Math.random() !== 0; // true
  },
  f: function() {
    return Math.random() === 0; // false
  },
  m: function() {
    return Math.random()<.5; // true or false
  }
};
