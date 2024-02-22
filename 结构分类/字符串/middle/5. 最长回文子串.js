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
// var longestPalindrome = function (s) {
//   let n = s.length;
//   let dp = Array.from(Array(n), () => Array(n).fill(false));
//   let start = 0; // 记录回文子串的起始位置
//   let maxLen = 1; // 记录最大回文子串的长度

//   // 所有长度为1的子串都是回文子串
//   for (let i = 0; i < n; i++) {
//     dp[i][i] = true;
//   }
//   console.log(dp);

//   // 遍历所有长度大于1的子串
//   for (let len = 2; len <= n; len++) {
//     for (let i = 0; i <= n - len; i++) {
//       let j = i + len - 1;
//       console.log(s[i], s[j]);

//       if (s[i] === s[j] && (len === 2 || dp[i + 1][j - 1])) {
//         dp[i][j] = true;

//         // 更新最大回文子串的位置和长度
//         if (len > maxLen) {
//           start = i;
//           maxLen = len;
//         }
//       }
//     }
//   }

//   return s.substring(start, start + maxLen);
// };

// var longestPalindrome = function (s) {
//   const n = s.length;
//   const dp = Array.from(Array(n), () => Array(n).fill(false));

//   let start = 0; // 记录回文子串的起始位置
//   let maxLen = 1; // 记录最大回文子串的长度
//   for (let i = 0; i < dp.length; i++) {
//     dp[i][i] = true;
//   }

//   for (let len = 2; len <= n; len++) {
//     for (let i = 0; i <= n - len; i++) {
//       let j = i + len - 1;
//       console.log(s[i], s[j]);

//       if (s[i] === s[j] && (len === 2 || dp[i + 1][j - 1])) {
//         dp[i][j] = true;

//         // 更新最大回文子串的位置和长度
//         if (len > maxLen) {
//           start = i;
//           maxLen = len;
//         }
//       }
//     }
//   }

//   console.log(dp);
//   return s.substring(start, start + maxLen);
// };

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const n = s.length;
  const dp = Array.from(Array(n), () => Array(n).fill(false));
  let maxLen = 1,
    start = 0;

  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  ///遍历长度大于等于2的子串
  for (let i = 2; i <= n; i++) {
    ///遍历剩余串长
    for (let j = 0; j <= n - i; j++) {
      ///当前索引
      const k = j + i - 1;
      if (s[j] === s[k] && (i === 2 || dp[j + 1][k - 1])) {
        dp[j][k] = true;
        if (i > maxLen) {
          maxLen = i;
          start = j;
        }
      }
    }
  }

  return s.substring(start, start + maxLen);
};

s = "baabd";
// s = "cbbd";
s = "a";
s = "bb";
console.log(longestPalindrome(s));
