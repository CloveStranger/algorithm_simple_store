// 给你一个下标从 0 开始的正整数数组 nums 。请你找出并统计满足下述条件的三元组 (i, j, k) 的数目：

// 0 <= i < j < k < nums.length
// nums[i]、nums[j] 和 nums[k] 两两不同 。
// 换句话说：nums[i] != nums[j]、nums[i] != nums[k] 且 nums[j] != nums[k] 。
// 返回满足上述条件三元组的数目。

// 示例 1：

// 输入：nums = [4,4,2,4,3]
// 输出：3
// 解释：下面列出的三元组均满足题目条件：
// - (0, 2, 4) 因为 4 != 2 != 3
// - (1, 2, 4) 因为 4 != 2 != 3
// - (2, 3, 4) 因为 2 != 4 != 3
// 共计 3 个三元组，返回 3 。
// 注意 (2, 0, 4) 不是有效的三元组，因为 2 > 0 。
// 示例 2：

// 输入：nums = [1,1,1,1,1]
// 输出：0
// 解释：不存在满足条件的三元组，所以返回 0 。

// 提示：

// 3 <= nums.length <= 100
// 1 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @return {number}
 */
// var unequalTriplets = function (nums) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     map.set(nums[i], (map.get(nums[i]) || 0) + 1);
//   }
//   console.log(map);
//   if (map.size < 3) {
//     return 0;
//   }
//   return 1;
// };
var unequalTriplets = function (nums) {
  let count = {},
    res = 0,
    n = nums.length,
    t = 0;
  for (let x of nums) {
    count[x] = count[x] || 0;
    count[x]++;
  }
  console.log(count);
  for (let k in count) {
    res += t * count[k] * (n - t - count[k]);
    console.log(t * count[k] * (n - t - count[k]));
    t += count[k];
  }
  return res;
};

// nums = [1, 2, 2, 3];
// nums = [1, 2, 3, 4];
// nums = [1, 2, 3, 4, 4];
nums = [4, 4, 2, 4, 3];

console.log(unequalTriplets(nums));
