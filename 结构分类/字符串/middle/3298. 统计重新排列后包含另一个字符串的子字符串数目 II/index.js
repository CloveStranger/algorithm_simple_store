// 给你两个字符串 word1 和 word2 。

// 如果一个字符串 x 重新排列后，word2 是重排字符串的
// 前缀
//  ，那么我们称字符串 x 是 合法的 。

// 请你返回 word1 中 合法
// 子字符串
//  的数目。

// 注意 ，这个问题中的内存限制比其他题目要 小 ，所以你 必须 实现一个线性复杂度的解法。

// 示例 1：

// 输入：word1 = "bcca", word2 = "abc"

// 输出：1

// 解释：

// 唯一合法的子字符串是 "bcca" ，可以重新排列得到 "abcc" ，"abc" 是它的前缀。

// 示例 2：

// 输入：word1 = "abcabc", word2 = "abc"

// 输出：10

// 解释：

// 除了长度为 1 和 2 的所有子字符串都是合法的。

// 示例 3：

// 输入：word1 = "abcabc", word2 = "aaabc"

// 输出：0

// 解释：

// 1 <= word1.length <= 106
// 1 <= word2.length <= 104
// word1 和 word2 都只包含小写英文字母。

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var validSubstringCount = function (word1, word2) {
  if (word1.length < word2.length) return 0;
  const charArr = new Array(26).fill(0);
  for (let i = 0; i < word2.length; i++) {
    charArr[word2.charCodeAt(i) - 97]++;
  }

  let diff = 0;
  for (let i = 0; i < 26; i++) {
    if (charArr[i] > 0) diff++;
  }

  let left = 0;
  let ans = 0;
  for (const char of word1) {
    charArr[char.charCodeAt(0) - 97]--;
    if (charArr[char.charCodeAt(0) - 97] === 0) diff--;
    while (diff === 0) {
      const outChar = word1[left++].charCodeAt(0) - 97;
      if (charArr[outChar] === 0) diff++;
      charArr[outChar]++;
    }
    ans += left;
  }

  return ans;
};

word1 = "bcca";
word2 = "abc";

console.log(validSubstringCount(word1, word2));
