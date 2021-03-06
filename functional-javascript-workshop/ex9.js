var slice = Array.prototype.slice

function logger(namespace) {
  return function() {
    var args = slice.call(arguments);
    return console.log.apply(console, [namespace].concat(args))
  }
}

module.exports = logger
