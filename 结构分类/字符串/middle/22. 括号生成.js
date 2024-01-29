// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

// 示例 1：

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
// 示例 2：

// 输入：n = 1
// 输出：["()"]

// 提示：

// 1 <= n <= 8
/**
 * @param {number} n
 * @return {string[]}
 */
// var generateParenthesis = function (n) {
//   const res = [];

//   const backtrack = (curArr, leftRemain, rightRemain) => {
//     if (curArr.length === 2 * n) {
//       res.push(curArr.join(""));
//       return;
//     }
//     if (leftRemain > 0) {
//       curArr.push("(");
//       backtrack(curArr, leftRemain - 1, rightRemain);
//       curArr.pop();
//     }
//     if (rightRemain > 0 && leftRemain < rightRemain) {
//       curArr.push(")");
//       backtrack(curArr, leftRemain, rightRemain - 1);
//       curArr.pop();
//     }
//   };

//   backtrack([], n, n);

//   return res;
// };
var generateParenthesis = function (n) {
  const res = [];

  const backtrack = (curStr, leftRemain, rightRemain) => {
    if (curStr.length === 2 * n) {
      res.push(curStr);
      return;
    }
    if (leftRemain > 0) {
      backtrack(curStr + "(", leftRemain - 1, rightRemain);
    }
    if (rightRemain > leftRemain) {
      backtrack(curStr + ")", leftRemain, rightRemain - 1);
    }
  };

  backtrack("", n, n);

  return res;
};
console.log(generateParenthesis(2));
