/**
 * @description Recursive spread version
 * @author EakzIT
 */

/**
 * @param {Array} a
 * @returns {Array}
 */
const flatSpread = (a) => {
  if (
    a.every(
      (e) => (Array.isArray(e) && e.flat().length === 1) || !Array.isArray(e)
    )
  ) {
    return a;
  }
  return a.reduce((acc, num) => {
    if (Array.isArray(num)) {
      return acc.concat(flatSpread(num).map((e) => [e]));
    }
    return [...acc, num];
  }, []);
};

/**
 * @param {Array} a
 * @param {Array} b
 * @returns {Array}
 */
export function intersection(a = [], b = []) {
  if (
    !Array.isArray(a) ||
    !Array.isArray(b) ||
    a.length === 0 ||
    b.length === 0
  ) {
    return [];
  }
  const aFlatspread = flatSpread(a);
  const bFlatspreadStr = flatSpread(b).map((e) => JSON.stringify(e));
  return aFlatspread.filter((el) =>
    bFlatspreadStr.includes(JSON.stringify(el))
  );
}
