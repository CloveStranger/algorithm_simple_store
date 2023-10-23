// 给你一个大小为 n x n 的整数矩阵 grid 。

// 生成一个大小为 (n - 2) x (n - 2) 的整数矩阵  maxLocal ，并满足：

// maxLocal[i][j] 等于 grid 中以 i + 1 行和 j + 1 列为中心的 3 x 3 矩阵中的 最大值 。
// 换句话说，我们希望找出 grid 中每个 3 x 3 矩阵中的最大值。

// 返回生成的矩阵。

// 输入：grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]
// 输出：[[9,9],[8,6]]
// 解释：原矩阵和生成的矩阵如上图所示。
// 注意，生成的矩阵中，每个值都对应 grid 中一个相接的 3 x 3 矩阵的最大值。

// 输入：grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]
// 输出：[[2,2,2],[2,2,2],[2,2,2]]
// 解释：注意，2 包含在 grid 中每个 3 x 3 的矩阵中。

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
// var largestLocal = function (grid) {
//   let arr = [];
//   for (let i = 0; i <= grid.length - 3; i++) {
//     for (let j = 0; j <= grid.length - 3; j++) {
//       let output = 0;
//       for (let m = i; m < i + 3; m++) {
//         for (let n = j; n < j + 3; n++) {
//           const item = grid[m][n];
//           output = Math.max(item, output);
//         }
//       }
//       if (arr[i]) {
//         arr[i] = [...arr[i], output];
//       } else {
//         arr[i] = [output];
//       }
//     }
//   }
//   console.log(arr);
//   return arr;
// };
var largestLocal = function (grid) {
  const n = grid.length;
  const res = new Array(n - 2).fill(0).map(() => new Array(n - 2).fill(0));
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      for (let x = i; x < i + 3; x++) {
        for (let y = j; y < j + 3; y++) {
          res[i][j] = Math.max(res[i][j], grid[x][y]);
        }
      }
    }
  }
  return res;
};

grid = [
  [9, 9, 8, 1],
  [5, 6, 2, 6],
  [8, 2, 6, 4],
  [6, 2, 2, 2],
];

largestLocal(grid);
