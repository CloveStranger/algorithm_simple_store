/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
// var isEmpty = function (obj) {
//   return !Object.entries(obj).length;
// };

var isEmpty = function (obj) {
  return JSON.stringify(obj).length === 2;
};
// var isEmpty = function (obj) {
//   for (let key in obj) return false;
//   return true;
// };

console.log(isEmpty({ x: 1 }));
console.log(isEmpty([]));
