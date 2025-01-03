const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arrS2 = s2.split("");
  let commonChars = 0;

  for (let i = 0; i < s1.length; i++) {
    const index = arrS2.indexOf(s1[i]);
    if (index > -1) {
      arrS2.splice(index, 1);
      commonChars++;
    }
  }

  return commonChars;
}

module.exports = {
  getCommonCharacterCount,
};
