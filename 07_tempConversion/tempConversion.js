const ftoc = function (farnheit) {
  convert = (farnheit - 32) * (5 / 9);
  decimal = convert.toFixed(1);
  return Number(decimal);
};

const ctof = function (celsius) {
  convert = celsius * (9 / 5) + 32;
  decimal = convert.toFixed(1);
  return Number(decimal);
};
console.log(ctof(100));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
