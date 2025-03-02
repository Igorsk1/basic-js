const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === "") {
    return "";
  }

  let prevChar = str[0];
  let count = 1;
  let encoded = "";

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === prevChar) {
      count++;
    } else {
      encoded += `${count > 1 ? count : ""}${prevChar}`;
      prevChar = str[i];
      count = 1;
    }
  }

  return encoded;
}

module.exports = {
  encodeLine,
};
