function reduce(arr, fn, initial) {
  return (function step(index, val) {
    if (index > (arr.length - 1)) {
      return val;
    } else {
      return step(index + 1, fn(val, arr[index], index, arr))
    }
  })(0, initial);
}

module.exports = reduce
