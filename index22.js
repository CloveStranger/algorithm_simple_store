/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  return arr.sort((x, y) => fn(x) - fn(y));
};

// arr = [5, 4, 1, 2, 3];
// fn = (x) => x;

// arr = [{ x: 1 }, { x: 0 }, { x: -1 }];
// fn = (d) => d.x;

arr = [
  [3, 4],
  [5, 2],
  [10, 1],
];
fn = (x) => x[1];

console.log(sortBy(arr, fn));
