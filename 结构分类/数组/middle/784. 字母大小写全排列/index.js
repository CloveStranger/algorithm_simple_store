// 给定一个字符串 s ，通过将字符串 s 中的每个字母转变大小写，我们可以获得一个新的字符串。

// 返回 所有可能得到的字符串集合 。以 任意顺序 返回输出。

// 示例 1：

// 输入：s = "a1b2"
// 输出：["a1b2", "a1B2", "A1b2", "A1B2"]
// 示例 2:

// 输入: s = "3z4"
// 输出: ["3z4","3Z4"]

// 提示:

// 1 <= s.length <= 12
// s 由小写英文字母、大写英文字母和数字组成

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const output = [];

  const backTracking = (index, arr) => {
    if (arr.length === s.length) {
      output.push(arr);
      return;
    }
    if (s[index].charCodeAt() <= 57) {
      backTracking(index + 1, [...arr, s[index]]);
    } else {
      backTracking(index + 1, [...arr, s[index].toLowerCase()]);
      backTracking(index + 1, [...arr, s[index].toUpperCase()]);
    }
  };

  backTracking(0, []);

  return output;
};
var letterCasePermutation = function (s) {
  const output = [];

  const path = [];

  const backTracking = (index) => {
    if (path.length === s.length) {
      output.push(path.join(""));
      return;
    }
    if (s[index].charCodeAt() <= 57) {
      path.push(s[index]);
      backTracking(index + 1);
      path.pop();
      return;
    }
    path.push(s[index].toLowerCase());
    backTracking(index + 1);
    path.pop();
    path.push(s[index].toUpperCase());
    backTracking(index + 1);
    path.pop();
  };

  backTracking(0);

  return output;
};

s = "a1b2";
console.log(letterCasePermutation(s));
