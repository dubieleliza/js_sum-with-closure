'use strict';

function makeRobotAccountant() {
  let callCount = 0;

  return function firstCall(a) {
    return function secondCall(b) {
      callCount++;

      if (callCount > 3 && callCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
=======
  let count = 0;

  return function(a) {
    return function(b) {
      count++;

      if (count <= 3 || count % 2 === 1) {
        return a + b;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
