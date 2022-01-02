const removeFromArray = function (array, ...elements) {
  let i = 0;
  let j = 0;
  for (j = 0; j < elements.length; j++) {
    for (i = 0; i < array.length; i++) {
      if (array[i] === elements[j]) {
        array.splice(i, 1);
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
