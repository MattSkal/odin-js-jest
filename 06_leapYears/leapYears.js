const leapYears = function (year) {
  switch (true) {
    case year % 400 == 0:
      return true;
      break;
    case year % 4 == 0 && year % 100 != 0:
      return true;
      break;
    default:
      return false;
  }
};

// Do not edit below this line
module.exports = leapYears;

// if
