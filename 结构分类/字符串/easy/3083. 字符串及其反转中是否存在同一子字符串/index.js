// 给你一个字符串 s ，请你判断字符串 s 是否存在一个长度为 2 的子字符串，在其反转后的字符串中也出现。

// 如果存在这样的子字符串，返回 true；如果不存在，返回 false 。

// 示例 1：

// 输入：s = "leetcode"

// 输出：true

// 解释：子字符串 "ee" 的长度为 2，它也出现在 reverse(s) == "edocteel" 中。

// 示例 2：

// 输入：s = "abcba"

// 输出：true

// 解释：所有长度为 2 的子字符串 "ab"、"bc"、"cb"、"ba" 也都出现在 reverse(s) == "abcba" 中。

// 示例 3：

// 输入：s = "abcd"

// 输出：false

// 解释：字符串 s 中不存在满足「在其反转后的字符串中也出现」且长度为 2 的子字符串。

// 提示：

// 1 <= s.length <= 100
// 字符串 s 仅由小写英文字母组成。

/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length - 1; i++) {
    const subStr = s.slice(i, i + 2);
    if (subStr[0] === subStr[1]) {
      return true;
    }
    if (map.has(subStr)) {
      return true;
    }
    map.set(subStr.split("").reverse().join(""), 1);
  }
  return false;
};

// s = "leetcode";

s = "abcba";

// s = "aefae"; // eafea

console.log(isSubstringPresent(s));
