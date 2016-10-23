function Spy(target, method) {
  var returnVal = {
    count: 0
  };
  var oldMethod = target[method];
  target[method] = function() {
    returnVal.count++
    return oldMethod.apply(this, arguments);
  }
  return returnVal;
}

module.exports = Spy

