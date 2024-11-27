// 给你一个 m x n 的二进制矩阵 grid 。

// 如果矩阵中一行或者一列从前往后与从后往前读是一样的，那么我们称这一行或者这一列是 回文 的。

// 你可以将 grid 中任意格子的值 翻转 ，也就是将格子里的值从 0 变成 1 ，或者从 1 变成 0 。

// 请你返回 最少 翻转次数，使得矩阵 要么 所有行是 回文的 ，要么所有列是 回文的 。

// 示例 1：

// 输入：grid = [[1,0,0],[0,0,0],[0,0,1]]

// 输出：2

// 解释：

// 将高亮的格子翻转，得到所有行都是回文的。

// 示例 2：

// 输入：grid = [[0,1],[0,1],[0,0]]

// 输出：1

// 解释：

// 将高亮的格子翻转，得到所有列都是回文的。

// 示例 3：

// 输入：grid = [[1],[0]]

// 输出：0

// 解释：

// 所有行已经是回文的。

// 提示：

// m == grid.length
// n == grid[i].length
// 1 <= m * n <= 2 * 105
// 0 <= grid[i][j] <= 1

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFlips = function (grid) {
  let rowMax = 0,
    colMax = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length / 2; j++) {
      const pre = grid[i][j];
      const suf = grid[i][grid[i].length - j - 1];
      if (pre != suf) {
        rowMax++;
      }
    }
  }
  for (let j = 0; j < grid[0].length; j++) {
    for (let i = 0; i < grid.length / 2; i++) {
      const pre = grid[i][j];
      const suf = grid[grid.length - i - 1][j];
      if (pre != suf) {
        colMax++;
      }
    }
  }

  return Math.min(rowMax, colMax);
};

grid = [
  [1, 0, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 1, 1],
];
grid = [
  [1, 0, 0],
  [0, 0, 0],
  [0, 0, 1],
];

console.log(minFlips(grid));
