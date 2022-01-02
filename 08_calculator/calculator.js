const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  summed = 0;
  array.forEach((number) => (summed += +number));
  return summed;
};

const multiply = function (array) {
  let multiplied = 1;
  array.forEach((number) => (multiplied *= number));
  return multiplied;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let fact = a;
  if (a == 0 || a == 1) return 1;
  else
    for (i = a; i > 1; --i) {
      fact *= i - 1;
    }
  return fact;
};
factorial(10);
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
