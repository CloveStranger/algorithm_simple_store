// 给你一个整数数组 nums ，一个整数 k  和一个整数 multiplier 。

// 你需要对 nums 执行 k 次操作，每次操作中：

// 找到 nums 中的 最小 值 x ，如果存在多个最小值，选择最 前面 的一个。
// 将 x 替换为 x * multiplier 。
// 请你返回执行完 k 次乘运算之后，最终的 nums 数组。

// 示例 1：

// 输入：nums = [2,1,3,5,6], k = 5, multiplier = 2

// 输出：[8,4,6,5,6]

// 解释：

// 操作	结果
// 1 次操作后	[2, 2, 3, 5, 6]
// 2 次操作后	[4, 2, 3, 5, 6]
// 3 次操作后	[4, 4, 3, 5, 6]
// 4 次操作后	[4, 4, 6, 5, 6]
// 5 次操作后	[8, 4, 6, 5, 6]
// 示例 2：

// 输入：nums = [1,2], k = 3, multiplier = 4

// 输出：[16,8]

// 解释：

// 操作	结果
// 1 次操作后	[4, 2]
// 2 次操作后	[4, 8]
// 3 次操作后	[16, 8]

// 提示：

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100
// 1 <= k <= 10
// 1 <= multiplier <= 5

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
  for (let i = 1; i <= k; i++) {
    const min = Math.min(...nums);
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === min) {
        nums[j] = min * multiplier;
        break;
      }
    }
  }
  return nums;
};

nums = [2, 1, 3, 5, 6];
k = 5;
multiplier = 2;

console.log(getFinalState(nums, k, multiplier));
