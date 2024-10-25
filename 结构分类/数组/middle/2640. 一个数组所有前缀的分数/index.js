// 定义一个数组 arr 的 转换数组 conver 为：

// conver[i] = arr[i] + max(arr[0..i])，其中 max(arr[0..i]) 是满足 0 <= j <= i 的所有 arr[j] 中的最大值。
// 定义一个数组 arr 的 分数 为 arr 转换数组中所有元素的和。

// 给你一个下标从 0 开始长度为 n 的整数数组 nums ，请你返回一个长度为 n 的数组 ans ，其中 ans[i]是前缀 nums[0..i] 的分数。

// 示例 1：

// 输入：nums = [2,3,7,5,10]
// 输出：[4,10,24,36,56]
// 解释：
// 对于前缀 [2] ，转换数组为 [4] ，所以分数为 4 。
// 对于前缀 [2, 3] ，转换数组为 [4, 6] ，所以分数为 10 。
// 对于前缀 [2, 3, 7] ，转换数组为 [4, 6, 14] ，所以分数为 24 。
// 对于前缀 [2, 3, 7, 5] ，转换数组为 [4, 6, 14, 12] ，所以分数为 36 。
// 对于前缀 [2, 3, 7, 5, 10] ，转换数组为 [4, 6, 14, 12, 20] ，所以分数为 56 。
// 示例 2：

// 输入：nums = [1,1,2,4,8,16]
// 输出：[2,4,8,16,32,64]
// 解释：
// 对于前缀 [1] ，转换数组为 [2] ，所以分数为 2 。
// 对于前缀 [1, 1]，转换数组为 [2, 2] ，所以分数为 4 。
// 对于前缀 [1, 1, 2]，转换数组为 [2, 2, 4] ，所以分数为 8 。
// 对于前缀 [1, 1, 2, 4]，转换数组为 [2, 2, 4, 8] ，所以分数为 16 。
// 对于前缀 [1, 1, 2, 4, 8]，转换数组为 [2, 2, 4, 8, 16] ，所以分数为 32 。
// 对于前缀 [1, 1, 2, 4, 8, 16]，转换数组为 [2, 2, 4, 8, 16, 32] ，所以分数为 64 。

// 提示：

// 1 <= nums.length <= 105
// 1 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findPrefixScore = function (nums) {
  const output = Array.from({ length: nums.length }).fill(0);
  const preStore = Array.from({ length: nums.length }).fill(0);
  for (let i = 0; i < nums.length; i++) {
    const preSum = preStore.reduce((a, b) => a + b, 0);
    const maxNum = Math.max(...nums.slice(0, i + 1));
    output[i] = preSum + maxNum + nums[i];
    preStore[i] = maxNum + nums[i];
  }
  return output;
};
var findPrefixScore = function (nums) {
  const output = [];
  let mx = 0;
  let s = 0;

  for (const item of nums) {
    mx = Math.max(item, mx);
    s += item + mx;
    console.log(item, mx);
    output.push(s);
  }

  return output;
};

nums = [2, 3, 7, 5, 10];
console.log(findPrefixScore(nums));
