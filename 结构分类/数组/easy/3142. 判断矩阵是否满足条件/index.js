// 给你一个大小为 m x n 的二维矩阵 grid 。你需要判断每一个格子 grid[i][j] 是否满足：

// 如果它下面的格子存在，那么它需要等于它下面的格子，也就是 grid[i][j] == grid[i + 1][j] 。
// 如果它右边的格子存在，那么它需要不等于它右边的格子，也就是 grid[i][j] != grid[i][j + 1] 。
// 如果 所有 格子都满足以上条件，那么返回 true ，否则返回 false 。

// 示例 1：

// 输入：grid = [[1,0,2],[1,0,2]]

// 输出：true

// 解释：

// 网格图中所有格子都符合条件。

// 示例 2：

// 输入：grid = [[1,1,1],[0,0,0]]

// 输出：false

// 解释：

// 同一行中的格子值都相等。

// 示例 3：

// 输入：grid = [[1],[2],[3]]

// 输出：false

// 解释：

// 同一列中的格子值不相等。

// 提示：

// 1 <= n, m <= 10
// 0 <= grid[i][j] <= 9

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function (grid) {
  let output = true;
  loop: for (let i = 0; i < grid[0].length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (j > 0) {
        output &&= grid[j][i] === grid[j - 1][i];
      }
      if (!output) {
        break loop;
      }
    }
  }

  loop: for (let i = 0; i < grid.length && output; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (j > 0) {
        output &&= grid[i][j] !== grid[i][j - 1];
      }
      if (!output) {
        break loop;
      }
    }
  }

  return output;
};

var satisfiesConditions = function (grid) {
  let output = true;
  for (let i = 0; i < grid[0].length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (j > 0) {
        output &&= grid[j][i] === grid[j - 1][i];
      }
      if (!output) {
        return output;
      }
    }
  }

  for (let i = 0; i < grid.length && output; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (j > 0) {
        output &&= grid[i][j] !== grid[i][j - 1];
      }
      if (!output) {
        return output;
      }
    }
  }

  return output;
};

grid = [
  [1, 0, 2],
  [1, 0, 2],
];

console.log(satisfiesConditions(grid));
