const repeatString = function (string, number) {
  word = "";
  if (string === "") {
    return (word = "");
  } else if (number > 0) {
    for (i = 0; i < number; i++) {
      word += string;
    }
    return word;
  } else if (number == 0) {
    word = "";
    return word;
  } else return (word = "ERROR");
};

// Do not edit below this line
module.exports = repeatString;
