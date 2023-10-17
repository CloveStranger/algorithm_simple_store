// const nums = [1, 2, 3, 4];
// const fn = function sum(accum, curr) {
//   return accum + curr;
// };
// const init = 0;

const nums = [1, 2, 3, 4];
const fn = function sum(accum, curr) {
  return accum + curr * curr;
};
const init = 100;

// nums = [];
// fn = function sum(accum, curr) {
//   return 0;
// };
// init = 25;

var reduce = function (nums, fn, init) {
  const numsLen = nums.length;
  let output = init;
  if (numsLen === 0) {
    return output;
  }
  for (let i = 0; i < nums.length; i++) {
    output = fn(output, nums[i]);
  }
  return output;
};

console.log(reduce(nums, fn, init));
