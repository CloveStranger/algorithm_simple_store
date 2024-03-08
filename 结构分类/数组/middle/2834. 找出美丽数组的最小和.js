// 给你两个正整数：n 和 target 。

// 如果数组 nums 满足下述条件，则称其为 美丽数组 。

// nums.length == n.
// nums 由两两互不相同的正整数组成。
// 在范围 [0, n-1] 内，不存在 两个 不同 下标 i 和 j ，使得 nums[i] + nums[j] == target 。
// 返回符合条件的美丽数组所可能具备的 最小 和，并对结果进行取模 109 + 7。

// 示例 1：

// 输入：n = 2, target = 3
// 输出：4
// 解释：nums = [1,3] 是美丽数组。
// - nums 的长度为 n = 2 。
// - nums 由两两互不相同的正整数组成。
// - 不存在两个不同下标 i 和 j ，使得 nums[i] + nums[j] == 3 。
// 可以证明 4 是符合条件的美丽数组所可能具备的最小和。
// 示例 2：

// 输入：n = 3, target = 3
// 输出：8
// 解释：
// nums = [1,3,4] 是美丽数组。
// - nums 的长度为 n = 3 。
// - nums 由两两互不相同的正整数组成。
// - 不存在两个不同下标 i 和 j ，使得 nums[i] + nums[j] == 3 。
// 可以证明 8 是符合条件的美丽数组所可能具备的最小和。
// 示例 3：

// 输入：n = 1, target = 1
// 输出：1
// 解释：nums = [1] 是美丽数组。

// 提示：

// 1 <= n <= 109
// 1 <= target <= 109
/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */

// nums.length == n.
// nums 由两两互不相同的正整数组成。
// 在范围 [0, n-1] 内，不存在 两个 不同 下标 i 和 j ，使得 nums[i] + nums[j] == target 。
var minimumPossibleSum = function (n, target) {
  const arr = new Array(n).fill(0).map((_, i) => i + 1); //条件1 && 2

  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) {
      if (arr[i] < target) {
        for (let j = 0; j < target; j++) {
          if (arr[i] > arr[j] && arr[i] + arr[j] == target) {
            arr[i] = arr[i] + 1;
          }
        }
      }
      if (arr[i] === arr[i - 1]) {
        arr[i] = arr[i] + 1;
      }
    }
  }

  console.log(arr);
  return arr.reduce((a, b) => a + b, 0);
};

n = 2;
target = 3;
// nums = [1, 3];
// 4;

// n = 1;
// target = 1;

n = 3;
target = 3;
// nums = [1, 3, 4];

n = 16;
target = 6;

// 162;
console.log(minimumPossibleSum(n, target));
