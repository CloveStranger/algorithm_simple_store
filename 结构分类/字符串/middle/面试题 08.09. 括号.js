// 括号。设计一种算法，打印n对括号的所有合法的（例如，开闭一一对应）组合。

// 说明：解集不能包含重复的子集。

// 例如，给出 n = 3，生成结果为：

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const output = [];

  const backTranck = (left, right, curArr) => {
    if (curArr.length === 2 * n) {
      output.push(curArr.join(""));
      return;
    }
    if (left > 0) {
      curArr.push("(");
      backTranck(left - 1, right, [...curArr]);
      curArr.pop();
    }
    if (left < right) {
      curArr.push(")");
      backTranck(left, right - 1, [...curArr]);
      curArr.pop();
    }
  };

  backTranck(n, n, []);

  return output;
};

n = 3;
console.log(generateParenthesis(n));
