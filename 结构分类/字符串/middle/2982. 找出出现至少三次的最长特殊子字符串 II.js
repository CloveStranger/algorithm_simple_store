// 给你一个仅由小写英文字母组成的字符串 s 。

// 如果一个字符串仅由单一字符组成，那么它被称为 特殊 字符串。例如，字符串 "abc" 不是特殊字符串，而字符串 "ddd"、"zz" 和 "f" 是特殊字符串。

// 返回在 s 中出现 至少三次 的 最长特殊子字符串 的长度，如果不存在出现至少三次的特殊子字符串，则返回 -1 。

// 子字符串 是字符串中的一个连续 非空 字符序列。

// 示例 1：

// 输入：s = "aaaa"
// 输出：2
// 解释：出现三次的最长特殊子字符串是 "aa" ：子字符串 "aaaa"、"aaaa" 和 "aaaa"。
// 可以证明最大长度是 2 。
// 示例 2：

// 输入：s = "abcdef"
// 输出：-1
// 解释：不存在出现至少三次的特殊子字符串。因此返回 -1 。
// 示例 3：

// 输入：s = "abcaba"
// 输出：1
// 解释：出现三次的最长特殊子字符串是 "a" ：子字符串 "abcaba"、"abcaba" 和 "abcaba"。
// 可以证明最大长度是 1 。

// 提示：

// 3 <= s.length <= 5 * 105
// s 仅由小写英文字母组成。

/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function (s) {
  if (s.length < 3) {
    return -1;
  }
  const arr = new Array(s.length).fill(0);
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i - 1]) {
      arr[i] = arr[i - 1] + 1;
    } else {
      arr[i] = 1;
    }
  }

  let max = -1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 3 || s[i] === 4) {
      max = Math.max(max, 1);
    } else {
      max = Math.max(max, arr[i] - 2);
    }
  }

  return max;
};

var maximumLength = function (s) {
  const charArr = Array.from({ length: 26 }, () => []);
  let ctl = 0;
  for (let i = 0; i < s.length; i++) {
    ctl++;
    if (i === s.length - 1 || s[i] !== s[i + 1]) {
      charArr[s.charCodeAt(i) - 97].push(ctl);
      ctl = 0;
    }
  }

  let max = 0;
  for (let i = 0; i < charArr.length; i++) {
    if (charArr[i].length == 0) {
      continue;
    }
    charArr[i].sort((a, b) => b - a);
    charArr[i].push(0, 0);
    max = Math.max(
      max,
      charArr[i][0] - 2,
      Math.min(charArr[i][0] - 1, charArr[i][1]),
      charArr[i][2]
    );
  }

  return max;
};

// s = "abcdef";
// s = "abcaba";
s = "ereerrrererrrererre";
console.log(maximumLength(s));
