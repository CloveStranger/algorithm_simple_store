// const arr = [0, 10, 20, 30];
// const fn = function greaterThan10(n) {
//   return n > 10;
// };

// const arr = [1, 2, 3];
// const fn = function firstIndex(n, i) {
//   return i === 0;
// };
const arr = [-2, -1, 0, 1, 2];
const fn = function plusOne(n) {
  return n + 1;
};

var filter = function (arr, fn) {
  const output = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (fn(element, index)) {
      output.push(element);
    }
  }
  return output;
};

console.log(filter(arr, fn));
