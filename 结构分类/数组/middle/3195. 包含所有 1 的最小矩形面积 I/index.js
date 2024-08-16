// 给你一个二维 二进制 数组 grid。请你找出一个边在水平方向和竖直方向上、面积 最小 的矩形，并且满足 grid 中所有的 1 都在矩形的内部。

// 返回这个矩形可能的 最小 面积。

// 示例 1：

// 输入： grid = [[0,1,0],[1,0,1]]

// 输出： 6

// 解释：

// 这个最小矩形的高度为 2，宽度为 3，因此面积为 2 * 3 = 6。

// 示例 2：

// 输入： grid = [[0,0],[1,0]]

// 输出： 1

// 解释：

// 这个最小矩形的高度和宽度都是 1，因此面积为 1 * 1 = 1。

// 提示：

// 1 <= grid.length, grid[i].length <= 1000
// grid[i][j] 是 0 或 1。
// 输入保证 grid 中至少有一个 1 。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function (grid) {
  let rolStart = 0;
  let colStart = 0;
  let rolEnd = 0;
  let colEnd = 0;
  loop1: for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        rolStart = i;
        break loop1;
      }
    }
  }
  loop2: for (let i = grid.length - 1; i >= 0; i--) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        rolEnd = i;
        break loop2;
      }
    }
  }

  loop3: for (let i = 0; i < grid[0].length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[j][i] === 1) {
        colStart = i;
        break loop3;
      }
    }
  }
  loop4: for (let i = grid[0].length - 1; i >= 0; i--) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[j][i] === 1) {
        colEnd = i;
        break loop4;
      }
    }
  }

  return (rolEnd - rolStart + 1) * (colEnd - colStart + 1);
};

grid = [
  [0, 1, 0],
  [1, 0, 1],
];

console.log(minimumArea(grid));
