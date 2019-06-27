var Stack = function() {
  var someInstance = {};
  var lastKey = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  debugger;

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[lastKey] = value;
    lastKey++;
  };

  someInstance.pop = function() {
    if (lastKey > 0) {
      storage[0] = someInstance[lastKey];
      // delete someInstance[lastKey];
      lastKey--;
      return storage[0];
    }
  };

  someInstance.size = function() {
    return lastKey;
  };

  return someInstance;
};

var stack = Stack();

stack.push('a');

console.log(stack.pop());