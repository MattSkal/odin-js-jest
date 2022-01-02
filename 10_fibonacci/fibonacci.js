const fibonacci = function (member) {
  if (member < 0) {
    return "OOPS";
  }
  a = 0;
  b = 1;
  i = 0;
  while (i < member) {
    b = a + b;
    ++i;
    if (i === member) {
      break;
    } else a = b + a;
    ++i;
  }
  return a > b ? a : b;
};

console.log(fibonacci(8));
// Do not edit below this line
module.exports = fibonacci;
