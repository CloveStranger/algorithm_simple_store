// DNA序列 由一系列核苷酸组成，缩写为 'A', 'C', 'G' 和 'T'.。

// 例如，"ACGAATTCCG" 是一个 DNA序列 。
// 在研究 DNA 时，识别 DNA 中的重复序列非常有用。

// 给定一个表示 DNA序列 的字符串 s ，返回所有在 DNA 分子中出现不止一次的 长度为 10 的序列(子字符串)。你可以按 任意顺序 返回答案。

// 示例 1：

// 输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// 输出：["AAAAACCCCC","CCCCCAAAAA"]
// 示例 2：

// 输入：s = "AAAAAAAAAAAAA"
// 输出：["AAAAAAAAAA"]

// 提示：

// 0 <= s.length <= 105
// s[i]=='A'、'C'、'G' or 'T'

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const output = [];
  const map = new Map();

  for (let i = 0; i < s.length - 9; i++) {
    const subStr = s.slice(i, i + 10);
    if (map.has(subStr)) {
      if (map.get(subStr) === 1) {
        output.push(subStr);
        map.set(subStr, 2);
        continue;
      }
    } else {
      map.set(subStr, 1);
    }
  }

  return output;
};
s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
console.log(findRepeatedDnaSequences(s));
