// var once = function (fn) {
//   let hasDone = false;
//   return function (...args) {
//     if (hasDone) {
//       return undefined;
//     }
//     hasDone = true;
//     return fn(...args);
//   };
// };

var once = function (fn) {
  let singleton = null;
  return function (...args) {
    return !singleton ? (singleton = fn(...args)) : undefined;
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));
