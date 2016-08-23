/**
 * Boolean
 * 
 * Can I find something in the difference between true and false?
 * Math.random() will return a value between 0.0000000000000000 and 0.9999999999999999.
 * Sixteen digits of precision.
 * 
 * According to Binomial Distribution,
 * The probability of true not being true is (1/9999999999999999)^2. Or 1.0 e-32.
 * The probability of false not being false is one with thirty two zeros after.
 * 
 * However, because Math.random() is not truly random, the above probabilities are wrong.
 * 
 * Udia
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
    return Math.random() < .5; // true or false? Who knows. Udia.
  }
};
