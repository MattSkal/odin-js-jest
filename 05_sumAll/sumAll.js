const sumAll = function (number1, number2) {
  if (
    typeof number1 === "number" &&
    typeof number2 === "number" &&
    number1 > 0 &&
    number2 > 0
  ) {
    let sum1 = (number1 * (number1 + 1)) / 2;
    let sum2 = (number2 * (number2 + 1)) / 2;
    if (sum1 > sum2) {
      summed = sum1;
    } else summed = sum2;
    return summed;
  } else return "ERROR";
};
sumAll(10, 15);

// Do not edit below this line
module.exports = sumAll;
