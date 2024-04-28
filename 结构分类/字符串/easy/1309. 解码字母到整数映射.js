// 给你一个字符串 s，它由数字（'0' - '9'）和 '#' 组成。我们希望按下述规则将 s 映射为一些小写英文字符：

// 字符（'a' - 'i'）分别用（'1' - '9'）表示。
// 字符（'j' - 'z'）分别用（'10#' - '26#'）表示。
// 返回映射之后形成的新字符串。

// 题目数据保证映射始终唯一。

// 示例 1：

// 输入：s = "10#11#12"
// 输出："jkab"
// 解释："j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
// 示例 2：

// 输入：s = "1326#"
// 输出："acz"

// 提示：

// 1 <= s.length <= 1000
// s[i] 只包含数字（'0'-'9'）和 '#' 字符。
// s 是映射始终存在的有效字符串。
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let output = [];
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "#") {
      const code = parseInt(s[i - 2]) * 10 + parseInt(s[i - 1]);
      const str = String.fromCharCode(code + 96);
      output.unshift(str);
      i -= 2;
    } else {
      const str = String.fromCharCode(parseInt(s[i]) + 96);
      output.unshift(str);
    }
  }
  return output.join("");
};
s = "10#11#12";
console.log(freqAlphabets(s));
