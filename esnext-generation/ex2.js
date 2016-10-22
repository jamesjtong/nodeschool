
module.exports = function filterForNumbers(iterable) {
  // loop over iterable, adding numeric values to a new array
  // then return the new array of numbers
  var arrayToReturn = [];
  for (variable of iterable) {
    if (Number.isInteger(variable)) {
      arrayToReturn.push(variable);
    }
  }

  // console.log(iterable)
  // console.log(iterable.next);
  // var value = iterable.next().value;
  console.log(arrayToReturn);
  return arrayToReturn;

}

