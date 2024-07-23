// 矩阵对角线 是一条从矩阵最上面行或者最左侧列中的某个元素开始的对角线，沿右下方向一直到矩阵末尾的元素。例如，矩阵 mat 有 6 行 3 列，从 mat[2][0] 开始的 矩阵对角线 将会经过 mat[2][0]、mat[3][1] 和 mat[4][2] 。

// 给你一个 m * n 的整数矩阵 mat ，请你将同一条 矩阵对角线 上的元素按升序排序后，返回排好序的矩阵。

// 示例 1：

// 输入：mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
// 输出：[[1,1,1,1],[1,2,2,2],[1,2,3,3]]
// 示例 2：

// 输入：mat = [[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]]
// 输出：[[5,17,4,1,52,7],[11,11,25,45,8,69],[14,23,25,44,58,15],[22,27,31,36,50,66],[84,28,75,33,55,68]]

// 提示：

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 100
// 1 <= mat[i][j] <= 100
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
  const n = mat.length; //row
  const m = mat[0].length; //col
  const diag = new Array(m + n).fill().map(() => []);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      diag[i - j + m].push(mat[i][j]);
    }
  }

  diag.forEach((d) => d.sort((a, b) => b - a));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      mat[i][j] = diag[i - j + m].pop();
    }
  }
  return mat;
};

var diagonalSort = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  for (let k = 1 - n; k < m; k++) {
    // k = i - j
    const left_i = Math.max(k, 0);
    const right_i = Math.min(k + n, m);
    const a = [];
    for (let i = left_i; i < right_i; i++) {
      a.push(mat[i][i - k]);
    }
    a.sort((a, b) => a - b);
    for (let i = left_i; i < right_i; i++) {
      mat[i][i - k] = a[i - left_i];
    }
  }
  return mat;
};

mat = [
  [3, 3, 1, 1],
  [2, 2, 1, 2],
  [1, 1, 1, 2],
];
console.log(diagonalSort(mat));
/**
 * const len = arr.length;
 *
 *
 */
