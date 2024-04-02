// 你有一套活字字模 tiles，其中每个字模上都刻有一个字母 tiles[i]。返回你可以印出的非空字母序列的数目。

// 注意：本题中，每个活字字模只能使用一次。

// 示例 1：

// 输入："AAB"
// 输出：8
// 解释：可能的序列为 "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA"。
// 示例 2：

// 输入："AAABBC"
// 输出：188
// 示例 3：

// 输入："V"
// 输出：1

// 提示：

// 1 <= tiles.length <= 7
// tiles 由大写英文字母组成
/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  const set = new Set();

  const backtrack = (s, pre) => {
    pre && set.add(pre);
    for (let i = 0; i < s.length; i++) {
      backtrack(s.slice(0, i) + s.slice(i + 1), pre + s[i]);
    }
  };
  backtrack(tiles, "");
  return set.size;
};

var numTilePossibilities = function (tiles) {
  const charCount = new Array(26).fill(0);
  for (const char of tiles) {
    const index = char.charCodeAt(0) - "A".charCodeAt(0);
    charCount[index]++;
  }

  const backtrack = () => {
    let sum = 0;
    for (let i = 0; i < 26; i++) {
      if (charCount[i] === 0) continue;
      sum++; // 单独一个字母的情况
      charCount[i]--;
      sum += backtrack(); // 递归取子序列
      charCount[i]++;
    }
    return sum;
  };

  return backtrack();
};

const tiles = "AAB";
console.log(numTilePossibilities(tiles));
