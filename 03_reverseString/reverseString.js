const reverseString = function (str) {
  let array = str.split("");
  let reversed = "";
  for (let i = array.length - 1; 0 <= i; --i) {
    reversed += array[i];
  }
  return reversed;
};
reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
