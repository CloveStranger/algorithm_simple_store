// 给你一个由若干 0 和 1 组成的数组 nums 以及整数 k。如果所有 1 都至少相隔 k 个元素，则返回 true ；否则，返回 false 。

// 示例 1：

// 输入：nums = [1,0,0,0,1,0,0,1], k = 2
// 输出：true
// 解释：每个 1 都至少相隔 2 个元素。
// 示例 2：

// 输入：nums = [1,0,0,1,0,1], k = 2
// 输出：false
// 解释：第二个 1 和第三个 1 之间只隔了 1 个元素。

// 提示：

// 1 <= nums.length <= 105
// 0 <= k <= nums.length
// nums[i] 的值为 0 或 1

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  let preIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      if (preIndex !== -1) {
        const interval = i - preIndex - 1;
        if (interval < k) {
          return false;
        }
      }
      preIndex = i;
    }
  }
  return true;
};

nums = [1, 0, 0, 0, 1, 0, 0, 1];
k = 2;

nums = [1, 0, 0, 1, 0, 1];
k = 2;

console.log(kLengthApart(nums, k));
