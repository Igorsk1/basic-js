const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const stats = {};
  const domainsArr = domains.map((el) => el.split(".").reverse());

  for (let i = 0; i < domainsArr.length; i++) {
    let dns = "";
    for (let j = 0; j < domainsArr[i].length; j++) {
      dns += "." + domainsArr[i][j];
      if (dns in stats) {
        stats[dns]++;
      } else {
        stats[dns] = 1;
      }
    }
  }

  return stats;
}

module.exports = {
  getDNSStats,
};
