// 给你一个字符串 s，找到 s 中最长的回文子串。

// 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。

// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"

// 提示：

// 1 <= s.length <= 1000
// s 仅由数字和英文字母组成
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let max = "";

  for (let i = 0; i < s.length; i++) {
    const map = new Map();
    for (let j = i; j < s.length; j++) {
      if (!map.has(s[j])) {
        map.set(s[j], 1);
      } else {
        map.delete(s[j]);
      }
      if (map.size == 0) {
        max = max.length > j - i ? max : s.substring(i, j);
      } else if (map.size == 1) {
        max = max.length > j - i ? max : [...map.keys()][0];
      }
    }
  }

  return max;
};
s = "babad";
// s = "cbbd";
console.log(longestPalindrome(s));
