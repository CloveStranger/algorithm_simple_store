// 无重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合，字符串每个字符均不相同。

// 示例1:

//  输入：S = "qwe"
//  输出：["qwe", "qew", "wqe", "weq", "ewq", "eqw"]
// 示例2:

//  输入：S = "ab"
//  输出：["ab", "ba"]
// 提示:

// 字符都是英文字母。
// 字符串长度在[1, 9]之间。
/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function (S) {
  const output = [];
  const charArr = S.split("");

  const dp = (curArr) => {
    if (curArr.length === charArr.length) {
      output.push(curArr.join(""));
      return;
    }
    for (let i = 0; i < charArr.length; i++) {
      if (curArr.includes(charArr[i])) {
        continue;
      }
      curArr.push(charArr[i]);
      dp([...curArr]);
      curArr.pop();
    }
  };

  for (let i = 0; i < charArr.length; i++) {
    dp([]);
  }

  return output;
};
S = "qwe";

console.log(permutation(S));
