// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

// 返回这三个数的和。

// 假定每组输入只存在恰好一个解。

// 示例 1：

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
// 示例 2：

// 输入：nums = [0,0,0], target = 1
// 输出：0

// 提示：

// 3 <= nums.length <= 1000
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var threeSumClosest = function (nums, target) {
//   let curCount = nums.slice(0, 3).reduce((a, b) => a + b);
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         const count = nums[i] + nums[j] + nums[k];
//         console.log(count);
//         if (Math.abs(count - target) < Math.abs(curCount - target)) {
//           curCount = count;
//         }
//       }
//     }
//   }
//   return curCount;
// };

var threeSumClosest = function (nums, target) {
  if (nums.length === 3) {
    return nums.reduce((a, b) => a + b);
  }
  nums.sort((a, b) => a - b);
  let curCount = nums.slice(0, 3).reduce((a, b) => a + b);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = nums.length - 1; k > j; k--) {
        const count = nums[i] + nums[j] + nums[k];
        if (Math.abs(count - target) < Math.abs(curCount - target)) {
          curCount = count;
        }
      }
    }
  }
  return curCount;
};
nums = [-1, 2, 1, -4];
// nums = [0, 0, 0];
target = 1;
console.log(threeSumClosest(nums, target));
