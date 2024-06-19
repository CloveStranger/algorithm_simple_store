// 给你一个整数数组 nums ，一个整数数组 queries 和一个整数 x 。

// 对于每个查询 queries[i] ，你需要找到 nums 中第 queries[i] 个 x 的位置，并返回它的下标。如果数组中 x 的出现次数少于 queries[i] ，该查询的答案为 -1 。

// 请你返回一个整数数组 answer ，包含所有查询的答案。

// 示例 1：

// 输入：nums = [1,3,1,7], queries = [1,3,2,4], x = 1

// 输出：[0,-1,2,-1]

// 解释：

// 第 1 个查询，第一个 1 出现在下标 0 处。
// 第 2 个查询，nums 中只有两个 1 ，所以答案为 -1 。
// 第 3 个查询，第二个 1 出现在下标 2 处。
// 第 4 个查询，nums 中只有两个 1 ，所以答案为 -1 。
// 示例 2：

// 输入：nums = [1,2,3], queries = [10], x = 5

// 输出：[-1]

// 解释：

// 第 1 个查询，nums 中没有 5 ，所以答案为 -1 。

// 提示：

// 1 <= nums.length, queries.length <= 105
// 1 <= queries[i] <= 105
// 1 <= nums[i], x <= 104

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function (nums, queries, x) {
  const map = [];
  const output = Array.from({ length: queries.length }, () => -1);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === x) {
      map.push(i);
    }
  }
  for (let i = 0; i < queries.length; i++) {
    output[i] = map[queries[i] - 1] ?? -1;
  }
  return output;
};

nums = [1, 3, 1, 7];
queries = [1, 3, 2, 4];
x = 1;

nums = [1, 2, 3];
queries = [10];
x = 5;

console.log(occurrencesOfElement(nums, queries, x));
