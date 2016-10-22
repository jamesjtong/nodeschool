function repeat(operation, num) {
  //recursive
  if (num >= 1) {
    operation();
    return repeat(operation, num-1)
  }
}

function repeat(operation, num) {
  //non-recursive
  for (var i=0; i < num; i++) {
    operation();
  }
}
module.exports = repeat


