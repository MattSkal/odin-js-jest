function reverse(word) {
  let reversedWord = "";
  splitWord = word.split("");
  for (i = word.length - 1; i >= 0; i--) {
    reversedWord += splitWord[i];
  }
  return reversedWord;
}
function tidyWord(word) {
  word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  word = word.replace(/\s/g, "");
  word = word.toLowerCase();
  return word;
}

const palindromes = function (word) {
  word = tidyWord(word);
  reversedWord = reverse(word);
  if (word === reversedWord) {
    return true;
  } else return false;
};

console.log(palindromes("A car, a man, a maraca."));
// Do not edit below this line
module.exports = palindromes;
