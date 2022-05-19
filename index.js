// Helpers
const properType = (n) => typeof n === "number";
const flatArray = (a) => {
  if ([].every((e) => !Array.isArray(e))) {
    return a;
  }
  return a.map((num) => {
    if (Array.isArray(num)) {
      return flatArray(num);
    }
    return num;
  });
};

/**
 * @param {Array} a
 * @param {Array} b
 * @returns {Array}
 */
export default function intersection(a = [], b = []) {
  console.log(flatArray(a));
}
