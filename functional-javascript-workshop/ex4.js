function getShortMessages(messages) {
  var getInnerMessage = function(message) { return message.message }
  var lessThan50 = function(message) { return message.length < 50 }
  return messages.map(getInnerMessage).filter(lessThan50);
}

module.exports = getShortMessages

