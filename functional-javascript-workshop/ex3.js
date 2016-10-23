function doubleAll(numbers) {
  var double = function(i) { return i*2 };
  return numbers.map(double);
}

module.exports = doubleAll

