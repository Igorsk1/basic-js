const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const DECAY_CONSTANT = Math.log(2) / HALF_LIFE_PERIOD;
  const activityNum = Number(sampleActivity);

  if (
    typeof sampleActivity !== "string" ||
    isNaN(activityNum) ||
    activityNum <= 0 ||
    activityNum > MODERN_ACTIVITY
  ) {
    return false;
  }

  const age = Math.ceil(
    Math.log(MODERN_ACTIVITY / activityNum) / DECAY_CONSTANT
  );

  return age;
}

module.exports = {
  dateSample,
};
