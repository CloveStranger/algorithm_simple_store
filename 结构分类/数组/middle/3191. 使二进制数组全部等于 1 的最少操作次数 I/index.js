// 给你一个二进制数组 nums 。

// 你可以对数组执行以下操作 任意 次（也可以 0 次）：

// 选择数组中 任意连续 3 个元素，并将它们 全部反转 。
// 反转 一个元素指的是将它的值从 0 变 1 ，或者从 1 变 0 。

// 请你返回将 nums 中所有元素变为 1 的 最少 操作次数。如果无法全部变成 1 ，返回 -1 。

// 示例 1：

// 输入：nums = [0,1,1,1,0,0]

// 输出：3

// 解释：
// 我们可以执行以下操作：

// 选择下标为 0 ，1 和 2 的元素并反转，得到 nums = [1,0,0,1,0,0] 。
// 选择下标为 1 ，2 和 3 的元素并反转，得到 nums = [1,1,1,0,0,0] 。
// 选择下标为 3 ，4 和 5 的元素并反转，得到 nums = [1,1,1,1,1,1] 。
// 示例 2：

// 输入：nums = [0,1,1,1]

// 输出：-1

// 解释：
// 无法将所有元素都变为 1 。

// 提示：

// 3 <= nums.length <= 105
// 0 <= nums[i] <= 1

// [0,0,0,0] [1,1,1,0]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let index = 0;
  let output = 0;
  while (index <= nums.length - 3) {
    if (index === nums.length - 3) {
      const allOne = nums[index] + nums[index + 1] + nums[index + 2];
      const allZero = nums[index] + nums[index + 1] + nums[index + 2];
      if (allOne === 3) {
        break;
      } else if (allZero === 0) {
        output += 1;
      } else {
        output = -1;
      }
      break;
    }
    if (nums[index] === 0) {
      nums[index] = nums[index] ? 0 : 1;
      nums[index + 1] = nums[index + 1] ? 0 : 1;
      nums[index + 2] = nums[index + 2] ? 0 : 1;
      output++;
    }
    index++;
  }
  return output;
};
var minOperations = function (nums) {
  const n = nums.length;
  let ans = 0;
  for (let i = 0; i < n - 2; i++) {
    if (nums[i] === 0) {
      // 必须操作
      nums[i + 1] ^= 1;
      nums[i + 2] ^= 1;
      ans++;
    }
  }
  return nums[n - 2] && nums[n - 1] ? ans : -1;
};
nums = [0, 1, 1, 1, 0, 0];
nums = [1, 0, 0, 1, 1, 1, 0, 1, 1, 1];
nums = [0, 1, 1, 1];
console.log(minOperations(nums));
