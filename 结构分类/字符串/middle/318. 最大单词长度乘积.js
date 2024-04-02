// 给你一个字符串数组 words ，找出并返回 length(words[i]) * length(words[j]) 的最大值，并且这两个单词不含有公共字母。如果不存在这样的两个单词，返回 0 。

// 示例 1：

// 输入：words = ["abcw","baz","foo","bar","xtfn","abcdef"]
// 输出：16
// 解释：这两个单词为 "abcw", "xtfn"。
// 示例 2：

// 输入：words = ["a","ab","abc","d","cd","bcd","abcd"]
// 输出：4
// 解释：这两个单词为 "ab", "cd"。
// 示例 3：

// 输入：words = ["a","aa","aaa","aaaa"]
// 输出：0
// 解释：不存在这样的两个单词。

// 提示：

// 2 <= words.length <= 1000
// 1 <= words[i].length <= 1000
// words[i] 仅包含小写字母
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  let output = 0;

  const formatWords = words.map((word) => {
    const temp = new Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
      const charCode = word[i].charCodeAt() - 97;
      if (temp[charCode]) {
        continue;
      }
      temp[charCode] = 1;
    }
    return temp.join("");
  });

  for (let i = 0; i < formatWords.length; i++) {
    for (let j = i + 1; j < formatWords.length; j++) {
      let hasSame = false;
      for (let k = 0; k < 26; k++) {
        if (
          formatWords[i][k] !== "0" &&
          formatWords[j][k] !== "0" &&
          formatWords[i][k] === formatWords[j][k]
        ) {
          hasSame = true;
          break;
        }
      }
      if (!hasSame) {
        output = Math.max(output, words[i].length * words[j].length);
      }
    }
  }
  return output;
};
words = ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"];
console.log(maxProduct(words));
