// 给你一个下标从 0 开始大小为 m x n 的二进制矩阵 grid 。

// 从原矩阵中选出若干行构成一个行的 非空 子集，如果子集中任何一列的和至多为子集大小的一半，那么我们称这个子集是 好子集。

// 更正式的，如果选出来的行子集大小（即行的数量）为 k，那么每一列的和至多为 floor(k / 2) 。

// 请你返回一个整数数组，它包含好子集的行下标，请你将子集中的元素 升序 返回。

// 如果有多个好子集，你可以返回任意一个。如果没有好子集，请你返回一个空数组。

// 一个矩阵 grid 的行 子集 ，是删除 grid 中某些（也可能不删除）行后，剩余行构成的元素集合。

// 示例 1：

// 输入：grid = [[0,1,1,0],[0,0,0,1],[1,1,1,1]]
// 输出：[0,1]
// 解释：我们可以选择第 0 和第 1 行构成一个好子集。
// 选出来的子集大小为 2 。
// - 第 0 列的和为 0 + 0 = 0 ，小于等于子集大小的一半。
// - 第 1 列的和为 1 + 0 = 1 ，小于等于子集大小的一半。
// - 第 2 列的和为 1 + 0 = 1 ，小于等于子集大小的一半。
// - 第 3 列的和为 0 + 1 = 1 ，小于等于子集大小的一半。
// 示例 2：

// 输入：grid = [[0]]
// 输出：[0]
// 解释：我们可以选择第 0 行构成一个好子集。
// 选出来的子集大小为 1 。
// - 第 0 列的和为 0 ，小于等于子集大小的一半。
// 示例 3：

// 输入：grid = [[1,1,1],[1,1,1]]
// 输出：[]
// 解释：没有办法得到一个好子集。

// 提示：

// m == grid.length
// n == grid[i].length
// 1 <= m <= 104
// 1 <= n <= 5
// grid[i][j] 要么是 0 ，要么是 1 。

// 提示 1
// It can be proven, that if there exists a good subset of rows then there exists a good subset of rows with the size of either 1 or 2.
//
// 提示 2
// To check if there exists a good subset of rows of size 1, we check if there exists a row containing only zeros, if it does, we return its index as a good subset.
// 提示 3
// To check if there exists a good subset of rows of size 2, we iterate over two bit-masks, check if both are presented in the array and if they form a good subset, if they do, return their indices as a good subset.

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var goodSubsetofBinaryMatrix = function (grid) {
  const output = [];

  //   const backTrack = (index, arr) => {
  //     console.log(arr);
  //     if (arr.length === 1) {
  //       const item = arr[0];
  //       if (!item.includes(1)) {
  //         output.push(index);
  //         return;
  //       }
  //     }
  //     for (let i = index; i < grid.length; i++) {
  //       const item = grid[i];
  //       backTrack(i + 1, [...arr, item]);
  //     }
  //     arr.pop();
  //   };

  //   backTrack(0, []);
  for (let i = 0; i < grid.length; i++) {
    const item = grid[i];
    if (!item.includes(1)) {
      output.push(i);
      break;
    }
    for (let j = i + 1; j < grid.length; j++) {
      const item2 = grid[j];
      if (!item2.includes(1)) {
        output.push(i, j);
        break;
      }
    }
  }

  return output;
};
var goodSubsetofBinaryMatrix = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  // Check for a single row that is all zeros
  for (let i = 0; i < m; i++) {
    if (grid[i].every((cell) => cell === 0)) {
      return [i];
    }
  }

  // Check for any pair of rows that forms a good subset
  for (let i = 0; i < m; i++) {
    for (let j = i + 1; j < m; j++) {
      let isGoodSubset = true;
      for (let k = 0; k < n; k++) {
        if (grid[i][k] + grid[j][k] > 1) {
          isGoodSubset = false;
          break;
        }
      }
      if (isGoodSubset) {
        return [i, j];
      }
    }
  }

  // No good subset found
  return [];
};

grid = [
  [0, 1, 1, 0],
  [0, 0, 0, 1],
  [1, 1, 1, 1],
];

console.log(goodSubsetofBinaryMatrix(grid));
