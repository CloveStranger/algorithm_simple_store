nums = [
  [1, 2],
  [3, 4],
];

// nums = [[23, 98, 42, 70]];

// nums = [[], []];
/**
 * @param {number[]} nums
 */

//写法1
// var ArrayWrapper = function (nums) {
//   this.nums = nums;
// };

// ArrayWrapper.prototype.valueOf = function () {
//   let output = 0;
//   this.nums.forEach((item) => {
//     output = output + item;
//   });
//   return output;
// };

// ArrayWrapper.prototype.toString = function () {
//   return `[${this.nums}]`;
// };

//写法2
var ArrayWrapper = function (nums) {
  this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  let output = 0;
  for (let index = 0; index < this.nums.length; index++) {
    output = output + this.nums[index];
  }
  return output;
};

ArrayWrapper.prototype.toString = function () {
  return `[${this.nums}]`;
};

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
// obj1 + obj2; // 10
// String(obj1); // "[1,2]"
// String(obj2); // "[3,4]"
console.log(obj1 + obj2);
console.log(obj2.toString());
