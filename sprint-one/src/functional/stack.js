// var Stack = function() {
//   var someInstance = {};
//   var lastKey = 0;

//   // Use an object with numeric keys to store values
//   var storage = {};

//   // debugger;

//   // Implement the methods below
//   someInstance.push = function(value) {
//     lastKey++;
//     someInstance[lastKey] = value;
//   };

//   someInstance.pop = function() {
//     if (lastKey > 0) {
//       storage[0] = someInstance[lastKey];
//       delete someInstance[lastKey];
//       lastKey--;
//       return storage[0];
//     }
//   };

//   someInstance.size = function() {
//     return lastKey;
//   };

//   return someInstance;
// };
