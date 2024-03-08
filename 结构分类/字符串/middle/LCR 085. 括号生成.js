// 正整数 n 代表生成括号的对数，请设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

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
var generateParenthesis = function (n) {
  const output = [];

  const backtrack = (leftCount, rightCount, curArr) => {
    if (curArr.length === 2 * n) {
      output.push(curArr.join(""));
      return;
    }
    if (leftCount > 0) {
      curArr.push("(");
      backtrack(leftCount - 1, rightCount, curArr);
      curArr.pop();
    }
    if (leftCount < rightCount && rightCount > 0) {
      curArr.push(")");
      backtrack(leftCount, rightCount - 1, curArr);
      curArr.pop();
    }
  };

  backtrack(n, n, []);

  return output;
};

console.log(generateParenthesis(3));
