// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

// 示例 1:

// 输入: n = 4, k = 2
// 输出:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]
// 示例 2:

// 输入: n = 1, k = 1
// 输出: [[1]]

// 提示:

// 1 <= n <= 20
// 1 <= k <= n

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const arr = new Array(n).fill(0).map((_, i) => i + 1);
  const res = [];
  const backtrack = (start, track) => {
    if (track.length === k) {
      res.push([...track]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      track.push(arr[i]);
      backtrack(i + 1, track);
      track.pop();
    }
  };
  backtrack(0, []);
  return res;
};
