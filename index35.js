// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const res = [];

  for (let i = 0; i < numRows; i++) {
    const pushInfo = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        pushInfo.push(1);
      } else {
        if (res[i - 1]) {
          if (res[i - 1][j - 1] && res[i - 1][j]) {
            pushInfo.push(res[i - 1][j - 1] + res[i - 1][j]);
          }
        }
      }
    }
    res.push(pushInfo);
  }

  return res;
};

// var generate = function (numRows) {
//   const ret = [];

//   for (let i = 0; i < numRows; i++) {
//     const row = new Array(i + 1).fill(1);
//     for (let j = 1; j < row.length - 1; j++) {
//       row[j] = ret[i - 1][j - 1] + ret[i - 1][j];
//     }
//     ret.push(row);
//   }
//   return ret;
// };

// numRows = 5;
// out = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];

numRows = 3;
// output = [[1]];

const res = generate(numRows);

console.log(res);
