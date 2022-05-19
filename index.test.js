import { intersection } from "./index";
import { intersection as intersection2 } from "./index2";

describe("Intersection", () => {
  test("empty", () => {
    expect(intersection()).toEqual([]);
  });

  test("invalid types", () => {
    expect(intersection(null)).toEqual([]);
    expect(intersection("string1", "string2")).toEqual([]);
    expect(intersection(2, 3)).toEqual([]);
    expect(intersection({}, {})).toEqual([]);
  });

  test("single dimension", () => {
    expect(intersection([1, 2, 3, 4], [])).toEqual([]);
    expect(intersection([1, 2, 3, 4], [4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
    expect(intersection([1, 2, 3, 4], [3])).toEqual([3]);
    expect(intersection(["string"], ["a", "b", "string", "d"])).toEqual([
      "string"
    ]);
  });

  test("n-dimensional", () => {
    expect(intersection([1, [2, 3]], [[2]])).toEqual([[2]]);
    expect(intersection([1, 2, [3, [4]]], [1, [[4]]])).toEqual([1, [[4]]]);
    expect(intersection([[[1, 2, 3]]], [1, 2, 3, [[2, 3]]])).toEqual([
      [[2]],
      [[3]]
    ]);
    expect(intersection([[1, [2, [[3]]]]], [[1, [[2, [3]]]]])).toEqual([
      [1],
      [[[[3]]]]
    ]);
  });
});

// Intersection 2 solution same tests
describe("Intersection2", () => {
  test("empty", () => {
    expect(intersection2()).toEqual([]);
  });

  test("invalid types", () => {
    expect(intersection2(null)).toEqual([]);
    expect(intersection2("string1", "string2")).toEqual([]);
    expect(intersection2(2, 3)).toEqual([]);
    expect(intersection2({}, {})).toEqual([]);
  });

  test("single dimension", () => {
    expect(intersection2([1, 2, 3, 4], [])).toEqual([]);
    expect(intersection2([1, 2, 3, 4], [4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
    expect(intersection2([1, 2, 3, 4], [3])).toEqual([3]);
    expect(intersection2(["string"], ["a", "b", "string", "d"])).toEqual([
      "string"
    ]);
  });

  test("n-dimensional", () => {
    expect(intersection2([1, [2, 3]], [[2]])).toEqual([[2]]);
    expect(intersection2([1, 2, [3, [4]]], [1, [[4]]])).toEqual([1, [[4]]]);
    expect(intersection2([[[1, 2, 3]]], [1, 2, 3, [[2, 3]]])).toEqual([
      [[2]],
      [[3]]
    ]);
    expect(intersection2([[1, [2, [[3]]]]], [[1, [[2, [3]]]]])).toEqual([
      [1],
      [[[[3]]]]
    ]);
  });
});
