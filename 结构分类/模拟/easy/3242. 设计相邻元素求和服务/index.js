// 给你一个 n x n 的二维数组 grid，它包含范围 [0, n2 - 1] 内的不重复元素。

// 实现 neighborSum 类：

// neighborSum(int [][]grid) 初始化对象。
// int adjacentSum(int value) 返回在 grid 中与 value 相邻的元素之和，相邻指的是与 value 在上、左、右或下的元素。
// int diagonalSum(int value) 返回在 grid 中与 value 对角线相邻的元素之和，对角线相邻指的是与 value 在左上、右上、左下或右下的元素。

// 示例 1：

// 输入：

// ["neighborSum", "adjacentSum", "adjacentSum", "diagonalSum", "diagonalSum"]

// [[[[0, 1, 2], [3, 4, 5], [6, 7, 8]]], [1], [4], [4], [8]]

// 输出： [null, 6, 16, 16, 4]

// 解释：

// 1 的相邻元素是 0、2 和 4。
// 4 的相邻元素是 1、3、5 和 7。
// 4 的对角线相邻元素是 0、2、6 和 8。
// 8 的对角线相邻元素是 4。
// 示例 2：

// 输入：

// ["neighborSum", "adjacentSum", "diagonalSum"]

// [[[[1, 2, 0, 3], [4, 7, 15, 6], [8, 9, 10, 11], [12, 13, 14, 5]]], [15], [9]]

// 输出： [null, 23, 45]

// 解释：

// 15 的相邻元素是 0、10、7 和 6。
// 9 的对角线相邻元素是 4、12、14 和 15。

// 提示：

// 3 <= n == grid.length == grid[0].length <= 10
// 0 <= grid[i][j] <= n2 - 1
// 所有 grid[i][j] 值均不重复。
// adjacentSum 和 diagonalSum 中的 value 均在范围 [0, n2 - 1] 内。
// 最多会调用 adjacentSum 和 diagonalSum 总共 2 * n2 次。

/**
 * @param {number[][]} grid
 */
var NeighborSum = function (grid) {
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];

  const n = grid.length;

  this.sums = Array.from({ length: n * n }, () => [0, 0]); // 初始化二维数组

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const value = grid[i][j];
      for (let k = 0; k < 8; k++) {
        const x = i + dirs[k][0];
        const y = j + dirs[k][1];
        if (x >= 0 && x < n && y >= 0 && y < n) {
          this.sums[value][Math.floor(k / 4)] += grid[x][y];
        }
      }
    }
  }

  // this.grid = grid;
  // this.map = new Map();

  // for (let i = 0; i < grid.length; i++) {
  //   for (let j = 0; j < grid[i].length; j++) {
  //     this.map.set(grid[i][j], [i, j]);
  //   }
  // }
};

/**
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.adjacentSum = function (value) {
  // const [x, y] = this.map.get(value);
  // let output = 0;
  // if (x > 0) {
  //   output += this.grid[x - 1][y];
  // }
  // if (x < this.grid[0].length - 1) {
  //   output += this.grid[x + 1][y];
  // }
  // if (y > 0) {
  //   output += this.grid[x][y - 1];
  // }
  // if (y < this.grid.length - 1) {
  //   output += this.grid[x][y + 1];
  // }
  // return output;
  return this.sums[value][0];
};

/**
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.diagonalSum = function (value) {
  // const [x, y] = this.map.get(value);
  // let output = 0;
  // if (x > 0 && y > 0) {
  //   output += this.grid[x - 1][y - 1];
  // }
  // if (x > 0 && y < this.grid.length - 1) {
  //   output += this.grid[x - 1][y + 1];
  // }
  // if (x < this.grid[0].length - 1 && y > 0) {
  //   output += this.grid[x + 1][y - 1];
  // }
  // if (x < this.grid[0].length - 1 && y < this.grid.length - 1) {
  //   output += this.grid[x + 1][y + 1];
  // }
  // return output;
  return this.sums[value][1];
};

/**
 * Your NeighborSum object will be instantiated and called as such:
 * var obj = new NeighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */

const instance = new NeighborSum([
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
]);

console.log(instance.adjacentSum(1));
console.log(instance.adjacentSum(4));
console.log(instance.diagonalSum(4));
console.log(instance.diagonalSum(8));
