// 给你一个由不同字符组成的字符串 allowed 和一个字符串数组 words 。如果一个字符串的每一个字符都在 allowed 中，就称这个字符串是 一致字符串 。

// 请你返回 words 数组中 一致字符串 的数目。

// 示例 1：

// 输入：allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// 输出：2
// 解释：字符串 "aaab" 和 "baa" 都是一致字符串，因为它们只包含字符 'a' 和 'b' 。
// 示例 2：

// 输入：allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// 输出：7
// 解释：所有字符串都是一致的。
// 示例 3：

// 输入：allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// 输出：4
// 解释：字符串 "cc"，"acd"，"ac" 和 "d" 是一致字符串。

// 提示：

// 1 <= words.length <= 104
// 1 <= allowed.length <= 26
// 1 <= words[i].length <= 10
// allowed 中的字符 互不相同 。
// words[i] 和 allowed 只包含小写英文字母。

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
// var countConsistentStrings = function (allowed, words) {
//   let output = 0;

//   const charMap = new Set();

//   for (let i = 0; i < allowed.length; i++) {
//     const item = allowed[i];
//     charMap.add(item);
//   }

//   for (let i = 0; i < words.length; i++) {
//     const item = words[i];
//     let addSignal = true;
//     for (let j = 0; j < item.length; j++) {
//       if (addSignal !== false) {
//         const charItem = item[j];
//         console.log(charItem);
//         if (!charMap.has(charItem)) {
//           addSignal = false;
//         }
//       }
//     }
//     if (addSignal) {
//       output++;
//     }
//   }

//   console.log(charMap);
//   console.log(output);

//   return output;
// };

var countConsistentStrings = function (allowed, words) {
  let mask = 0;
  for (let i = 0; i < allowed.length; i++) {
    const c = allowed[i];
    mask |= 1 << (c.charCodeAt() - "a".charCodeAt());
    console.log((1 << (c.charCodeAt() - "a".charCodeAt())).toString());
  }
  let res = 0;
  for (const word of words) {
    let mask1 = 0;
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      mask1 |= 1 << (c.charCodeAt() - "a".charCodeAt());
    }
    if ((mask1 | mask) === mask) {
      res++;
    }
  }
  return res;
};

const allowed = "cad";
const words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"];

countConsistentStrings(allowed, words);

/*
知识点
1、因为目标小于32个单位所以想到位运算
2、charCodeAt函数获取对应字符UTF-16编码 位于0-65535
3、左移运算 target << 位移数量（10进制）
4、异或运算 a|=b => a = a|b (有1为1，全0为0)
5、将对应的32位二进制码进行异或运算，若是子集应当不变
*/
