function caesar(string, shift) {
  coded = "";
  for (; -26 > shift || shift > 26; ) {
    if (shift > 26) {
      shift -= 26;
    } else if (shift < -26) {
      shift += 26;
    }
  }
  for (i = 0; i < string.length; ++i) {
    if (string[i].toUpperCase() != string[i].toLowerCase()) {
      if (string[i] === string[i].toLowerCase()) {
        if (string.charCodeAt(i) + shift < 97) {
          coded += String.fromCharCode(
            (coded[i] = string.charCodeAt(i) + shift + 26)
          );
        } else if (string.charCodeAt(i) + shift > 122) {
          coded += String.fromCharCode(
            (coded[i] = string.charCodeAt(i) + shift - 26)
          );
        } else
          coded += String.fromCharCode(
            (coded[i] = string.charCodeAt(i) + shift)
          );
      } else {
        if (string.charCodeAt(i) + shift < 65) {
          coded += String.fromCharCode(
            (coded[i] = string.charCodeAt(i) + shift + 26)
          );
        } else if (string.charCodeAt(i) + shift > 90) {
          coded += String.fromCharCode(
            (coded[i] = string.charCodeAt(i) + shift - 26)
          );
        } else
          coded += String.fromCharCode(
            (coded[i] = string.charCodeAt(i) + shift)
          );
      }
    } else if (string[i].toUpperCase() === string[i].toLowerCase())
      coded += string[i];
  }
  return coded;
}
console.log(caesar("A", -70));

// Do not edit below this line
module.exports = caesar;
