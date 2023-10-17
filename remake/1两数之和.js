// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//解法1暴力
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

//解法2
// var twoSum = function (nums, target) {
//   const indexMap = [];

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < indexMap.length; j++) {
//       if (nums[i] + indexMap[j][1] === target) {
//         return [indexMap[j][0], i];
//       }
//     }
//     indexMap.push([i, nums[i]]);
//   }
// };

// 解法3
const twoSum = (nums, target) => {
  const indexMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (indexMap[target - nums[i]] !== undefined) {
      return [indexMap[target - nums[i]], i];
    }
    indexMap[nums[i]] = i;
  }
};

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]

// 输入：nums = [3,3], target = 6
// 输出：[0,1]

// nums = [2, 7, 11, 15];
// target = 9;

// nums = [3, 2, 4];
// target = 6;

nums = [3, 3];
target = 6;

const res = twoSum(nums, target);
console.log(res);
