// 给你一个大小为 m x n 的二元矩阵 grid ，矩阵中每个元素的值为 0 或 1 。

// 一次 移动 是指选择任一行或列，并转换该行或列中的每一个值：将所有 0 都更改为 1，将所有 1 都更改为 0。

// 在做出任意次数的移动后，将该矩阵的每一行都按照二进制数来解释，矩阵的 得分 就是这些数字的总和。

// 在执行任意次 移动 后（含 0 次），返回可能的最高分数。

// 示例 1：

// 输入：grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
// 输出：39
// 解释：0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
// 示例 2：

// 输入：grid = [[0]]
// 输出：1

// 提示：

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 20
// grid[i][j] 为 0 或 1

/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    if (grid[i][0] === 0) {
      for (let j = 0; j < grid[i].length; j++) {
        grid[i][[j]] ^= 1;
      }
    }
  }

  for (let i = 1; i < grid[0].length; i++) {
    let count = 0;
    for (let j = 0; j < grid.length; j++) {
      if (grid[j][i] === 1) {
        count++;
      }
    }
    if (count < grid.length - count) {
      for (let j = 0; j < grid.length; j++) {
        grid[j][i] ^= 1;
      }
    }
  }
  let sum = 0;
  for (const item of grid) {
    sum += parseInt(item.join(""), 2);
  }
  return sum;
};

var matrixScore = function (grid) {
  const m = grid.length,
    n = grid[0].length;
  let ret = m * (1 << (n - 1));

  for (let j = 1; j < n; j++) {
    let nOnes = 0;
    for (let i = 0; i < m; i++) {
      if (grid[i][0] === 1) {
        nOnes += grid[i][j];
      } else {
        nOnes += 1 - grid[i][j]; // 如果这一行进行了行反转，则该元素的实际取值为 1 - grid[i][j]
      }
    }
    const k = Math.max(nOnes, m - nOnes);
    ret += k * (1 << (n - j - 1));
  }
  return ret;
};

grid = [
  [0, 0, 1, 1],
  [1, 0, 1, 0],
  [1, 1, 0, 0],
];
console.log(matrixScore(grid));
