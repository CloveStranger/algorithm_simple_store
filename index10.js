// const arr = [1, 2, 3];
// const fn = function plusone(n) {
//   return n + 1;
// };
// const arr = [1, 2, 3];
// const fn = function plusI(n, i) {
//   return n + i;
// };
const arr = [10, 20, 30];
const fn = function constant() {
  return 42;
};

var map = function (arr, fn) {
  let arrLen = arr.length - 1;
  for (arrLen; arrLen >= 0; arrLen--) {
    arr[arrLen] = fn(arr[arrLen], arrLen);
  }
  return arr;
};

console.log(map(arr, fn));
