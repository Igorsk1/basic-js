const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numStr = n.toString();

  for (let i = 0; i < numStr; i++) {
    if (numStr[i] < numStr[i + 1]) {
      return Number(numStr.slice(0, i) + numStr.slice(i + 1));
    }
  }

  return Number(numStr.slice(0, -1));
}

module.exports = {
  deleteDigit,
};
