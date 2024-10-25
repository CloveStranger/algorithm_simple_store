// 给你两个长度相等的字符串 s 和 t。每一个步骤中，你可以选择将 t 中的 任一字符 替换为 另一个字符。

// 返回使 t 成为 s 的字母异位词的最小步骤数。

// 字母异位词 指字母相同，但排列不同（也可能相同）的字符串。

// 示例 1：

// 输出：s = "bab", t = "aba"
// 输出：1
// 提示：用 'b' 替换 t 中的第一个 'a'，t = "bba" 是 s 的一个字母异位词。
// 示例 2：

// 输出：s = "leetcode", t = "practice"
// 输出：5
// 提示：用合适的字符替换 t 中的 'p', 'r', 'a', 'i' 和 'c'，使 t 变成 s 的字母异位词。
// 示例 3：

// 输出：s = "anagram", t = "mangaar"
// 输出：0
// 提示："anagram" 和 "mangaar" 本身就是一组字母异位词。
// 示例 4：

// 输出：s = "xxyyzz", t = "xxyyzz"
// 输出：0
// 示例 5：

// 输出：s = "friend", t = "family"
// 输出：4

// 提示：

// 1 <= s.length <= 50000
// s.length == t.length
// s 和 t 只包含小写英文字母

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  const map1 = new Map();
  const map2 = new Map();
  for (const item of s) {
    map1.set(item, map1.get(item) ? map1.get(item) + 1 : 1);
  }
  for (const item of t) {
    map2.set(item, map2.get(item) ? map2.get(item) + 1 : 1);
  }
  let output = 0;

  for (const [key, value] of map2) {
    const target = map1.get(key);
    if (target) {
      if (value > target) {
        output += value - target;
      }
    } else {
      output += value;
    }
  }

  return output;
};
var minSteps = function (s, t) {
  const map1 = new Map();
  for (const item of s) {
    map1.set(item, map1.get(item) ? map1.get(item) + 1 : 1);
  }

  let output = 0;

  for (const char of t) {
    const target = map1.get(char);
    if (target > 0) {
      map1.set(char, target - 1);
    } else {
      output += 1;
    }
  }

  return output;
};

s = "leetcode";
t = "practice";
console.log(minSteps(s, t));
