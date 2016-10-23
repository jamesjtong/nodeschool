function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(user) {
      return goodUsers.some(function(originalUser) {
        return user.id === originalUser.id;
      });
    });
  };
}

module.exports = checkUsersValid

