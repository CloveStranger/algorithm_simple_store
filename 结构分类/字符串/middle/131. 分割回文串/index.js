// 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是
// 回文串
//  。返回 s 所有可能的分割方案。

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

const isPalindrome = (s, left, right) => {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

var partition = function (s) {
  const output = [];
  const arr = [];
  const backTracking = (index) => {
    if (index === s.length) {
      output.push([...arr]);
      return;
    }
    for (let i = index; i < s.length; i++) {
      if (isPalindrome(s, index, i)) {
        arr.push(s.slice(index, i + 1));
        backTracking(i + 1);
        arr.pop();
      }
    }
  };

  backTracking(0);

  return output;
};

s = "aab";

console.log(partition(s));
