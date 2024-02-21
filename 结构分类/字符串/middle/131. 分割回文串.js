// 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

// 回文串 是正着读和反着读都一样的字符串。

// 示例 1：

// 输入：s = "aab"
// 输出：[["a","a","b"],["aa","b"]]
// 示例 2：

// 输入：s = "a"
// 输出：[["a"]]

// 提示：

// 1 <= s.length <= 16
// s 仅由小写英文字母组成
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const output = [];

  const charArr = Array(s.length)
    .fill([])
    .map(() => Array(s.length).fill(false));
  for (let i = 0; i < s.length; i++) {
    charArr[i][i] = true;
  }
  for (let i = 2; i <= s.length; i++) {
    for (let j = 0; j <= s.length - i; j++) {
      const k = j + i - 1;
      if (s[k] === s[j] && (i === 2 || charArr[j + 1][k - 1])) {
        charArr[j][k] = true;
      }
    }
  }

  // const backtrack = (i, j, curArr) => {
  //   if (i === s.length) {
  //     output.push([...curArr]);
  //     return;
  //   }
  //   if (charArr[i][j]) {
  //     backtrack(i, j + 1, curArr);
  //     curArr.push(s.slice(i, j + 1));
  //   } else {
  //     curArr.push(s.slice(i, j));
  //     backtrack(i + 1, j, curArr);
  //   }
  //   curArr.pop();
  // };
  // backtrack(0, 0, [], []);
  // 回溯函数
  const backtrack = (start, curArr) => {
    if (start === s.length) {
      output.push([...curArr]);
      return;
    }

    for (let end = start; end < s.length; end++) {
      if (charArr[start][end]) {
        curArr.push(s.slice(start, end + 1));
        backtrack(end + 1, curArr);
        curArr.pop();
      }
    }
  };

  backtrack(0, []);
  return output;
};

s = "aab";
partition(s);
