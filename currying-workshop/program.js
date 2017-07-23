var identity = function (args) {
  return args;
};

var binary = function (firstArg, secArg) {
  return firstArg + secArg;
}

var curryFn1 = function(firstArg) {
  return function(secondArg) {
    return firstArg + secondArg;
  };
}

var baseTotal = 0;
function total(arg) {
  if (arg) {
    baseTotal += arg;
    return total;
  } else {
    return baseTotal;
  }
}

var callAndApply = {
  caller: function (object, method, nameArg, ageArg, tShirtSizeArg) {
    method.call(object, nameArg, ageArg, tShirtSizeArg);
  },
  applier: function (object, method, argumentsArr) {
    method.apply(object, argumentsArr);
  }
};

function curry(fn) {
  const arity = fn.length;

  return function f1() {
    const args = Array.prototype.slice.call(arguments, 0);
    if (args.length >= arity) {
      return fn.apply(null, args);
    } else {
      return function f2() {
        const args2 = Array.prototype.slice.call(arguments, 0);
        return f1.apply(null, args.concat(args2))
      }
    }
  }
}

module.exports = curry;



