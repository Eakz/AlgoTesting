/**
 * @description Looping map version
 * Benefits of this method - grouping nested intersections e.g
 * [[[1, 2, 3]]], [1, 2, 3, [[2, 3]]]) -> expected [[[2]],[[3]]] could be [[[2,3]]]
 * @author EakzIT
 */
// Helper

/**
 *
 * @param {Array} a
 * @param {String} layer
 * @param {Boolean} spread - if result should be spread by single value
 * @returns {Array} layered array
 */
const layerRestorer = (a, layer, spread = true) => {
  if (!a.length) {
    return [];
  }
  let currentLayer = [...a];
  for (let i = 1; i < parseInt(layer); i++) {
    if (spread) {
      currentLayer = currentLayer.map((el) => [el]);
    } else {
      currentLayer = [currentLayer];
    }
  }
  return currentLayer;
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
  // Copy of the arrays
  let [aCopy, bCopy] = [a.slice(), b.slice()];
  // Objects to map out elements for each layer
  const aMap = {};
  const bMap = {};
  let layer = 1;
  while (aCopy.length && bCopy.length) {
    // Temporary arrays to put new layer in
    let tempA = [];
    let tempB = [];
    aMap[layer] = [];
    bMap[layer] = [];
    aCopy.forEach(function (el) {
      if (Array.isArray(el)) {
        tempA = tempA.concat(el);
      } else {
        aMap[layer].push(el);
      }
    });
    bCopy.forEach(function extractElements(el) {
      if (Array.isArray(el)) {
        tempB = tempB.concat(el);
      } else {
        bMap[layer].push(el);
      }
    });
    layer++;
    aCopy = tempA;
    bCopy = tempB;
  }
  return [...Object.keys(aMap)].reduce((acc, key) => {
    const aLayer = aMap[key];
    const bLayer = bMap[key];
    const filteredResult = aLayer.filter((el) => bLayer.includes(el));
    return acc.concat(layerRestorer(filteredResult, key));
  }, []);
}
