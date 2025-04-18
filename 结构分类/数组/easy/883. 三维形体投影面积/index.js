// 在 n x n 的网格 grid 中，我们放置了一些与 x，y，z 三轴对齐的 1 x 1 x 1 立方体。

// 每个值 v = grid[i][j] 表示 v 个正方体叠放在单元格 (i, j) 上。

// 现在，我们查看这些立方体在 xy 、yz 和 zx 平面上的投影。

// 投影 就像影子，将 三维 形体映射到一个 二维 平面上。从顶部、前面和侧面看立方体时，我们会看到“影子”。

// 返回 所有三个投影的总面积 。

// 示例 1：

// 输入：[[1,2],[3,4]]
// 输出：17
// 解释：这里有该形体在三个轴对齐平面上的三个投影(“阴影部分”)。
// 示例 2:

// 输入：grid = [[2]]
// 输出：5
// 示例 3：

// 输入：[[1,0],[0,2]]
// 输出：8

// 提示：

// n == grid.length == grid[i].length
// 1 <= n <= 50
// 0 <= grid[i][j] <= 50

/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  const x = grid.reduce((pre, next) => pre + Math.max(...next), 0);
  let y = 0;

  const maxY = Math.max(...grid.map((x) => x.length));

  for (let j = 0; j < maxY; j++) {
    let maxHeight = 0;
    for (let i = 0; i < grid.length; i++) {
      const item = grid[i][j];
      if (item !== undefined || item !== null) {
        maxHeight = Math.max(maxHeight, item);
      }
    }
    y += maxHeight;
  }

  const z = grid.reduce((pre, next) => pre + next.filter((x) => x).length, 0);

  return x + y + z;
};

grid = [
  [1, 2],
  [3, 4],
];

grid = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

console.log(projectionArea(grid));
