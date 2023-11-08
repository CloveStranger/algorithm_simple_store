// 给你一个大小为 m x n 的二进制矩阵 mat ，请你找出包含最多 1 的行的下标（从 0 开始）以及这一行中 1 的数目。

// 如果有多行包含最多的 1 ，只需要选择 行下标最小 的那一行。

// 返回一个由行下标和该行中 1 的数量组成的数组。

// 示例 1：

// 输入：mat = [[0,1],[1,0]]
// 输出：[0,1]
// 解释：两行中 1 的数量相同。所以返回下标最小的行，下标为 0 。该行 1 的数量为 1 。所以，答案为 [0,1] 。
// 示例 2：

// 输入：mat = [[0,0,0],[0,1,1]]
// 输出：[1,2]
// 解释：下标为 1 的行中 1 的数量最多。该行 1 的数量为 2 。所以，答案为 [1,2] 。
// 示例 3：

// 输入：mat = [[0,0],[1,1],[0,0]]
// 输出：[1,2]
// 解释：下标为 1 的行中 1 的数量最多。该行 1 的数量为 2 。所以，答案为 [1,2] 。

// 提示：

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 100
// mat[i][j] 为 0 或 1
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
  let output = [0, 0];

  for (let i = 0; i < mat.length; i++) {
    let count = 0;
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        count++;
      }
    }
    if (count > output[1]) {
      output[0] = i;
      output[1] = count;
    }
  }

  return output;
};
