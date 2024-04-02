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

var permutation = function (S) {
  const output = [];
  const charArr = S.split("");

  const dp = (start) => {
    if (start === charArr.length - 1) {
      output.push(charArr.join(""));
      return;
    }
    const used = new Set();
    for (let i = start; i < charArr.length; i++) {
      if (used.has(charArr[i])) continue;
      used.add(charArr[i]);
      [charArr[i], charArr[start]] = [charArr[start], charArr[i]]; // Swap
      dp(start + 1);
      [charArr[i], charArr[start]] = [charArr[start], charArr[i]]; // Restore
    }
  };

  dp(0);

  return output;
};

var permutation = function (S) {
  const len = S.length;
  let res = [];
  const fn = (s, pre) => {
    if (pre.length === len) {
      res.push(pre);
      return;
    }
    for (let i = 0; i < s.length; i++) {
      const nextStr = s.slice(0, i) + s.slice(i + 1);
      fn(nextStr, pre + s[i]);
    }
  };
  fn(S, "");
  return res;
};
S = "qwe";

console.log(permutation(S));
