module.exports = function makeCounter(someObj) {
  var counter = 0, done = false;

  someObj.next = function() {
    if (counter < 10) {
      counter++;
    } else {
      done = true;
    }

    return {
      value: counter,
      done: done
    }
  }
}
