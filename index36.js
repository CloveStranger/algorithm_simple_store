// 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。

// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// var getRow = function (rowIndex) {
//   const res = [];

//   for (let i = 0; i < rowIndex + 1; i++) {
//     const pushInfo = [];
//     for (let j = 0; j <= i; j++) {
//       if (j === 0 || j === i) {
//         pushInfo.push(1);
//       } else {
//         if (res[i - 1]) {
//           if (res[i - 1][j - 1] && res[i - 1][j]) {
//             pushInfo.push(res[i - 1][j - 1] + res[i - 1][j]);
//           }
//         }
//       }
//     }
//     if (i === rowIndex) {
//       return pushInfo;
//     }
//     res.push(pushInfo);
//   }
// };

// var getRow = function (rowIndex) {
//   const C = new Array(rowIndex + 1).fill(0);
//   for (let i = 0; i <= rowIndex; ++i) {
//     C[i] = new Array(i + 1).fill(0);
//     C[i][0] = C[i][i] = 1;
//     for (let j = 1; j < i; j++) {
//       C[i][j] = C[i - 1][j - 1] + C[i - 1][j];
//     }
//   }
//   return C[rowIndex];
// };
// var getRow = function (rowIndex) {
//   let pre = [],
//     cur = [];
//   for (let i = 0; i <= rowIndex; ++i) {
//     cur = new Array(i + 1).fill(0);
//     cur[0] = cur[i] = 1;
//     for (let j = 1; j < i; ++j) {
//       cur[j] = pre[j - 1] + pre[j];
//     }
//     pre = cur;
//   }
//   return pre;
// };

// var getRow = function (rowIndex) {
//   const row = new Array(rowIndex + 1).fill(0);
//   row[0] = 1;
//   for (let i = 1; i <= rowIndex; ++i) {
//     for (let j = i; j > 0; --j) {
//       row[j] += row[j - 1];
//     }
//     console.log(row);
//   }
//   return row;
// };

rowIndex = 0; //[1]
rowIndex = 1; //[1,1]
rowIndex = 2; //[1,2,1]
rowIndex = 3; //[1,3,3,1]

const res = getRow(rowIndex);
console.log(res);
