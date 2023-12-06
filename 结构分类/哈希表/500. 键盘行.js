// 给你一个字符串数组 words ，只返回可以使用在 美式键盘 同一行的字母打印出来的单词。键盘如下图所示。

// 美式键盘 中：

// 第一行由字符 "qwertyuiop" 组成。
// 第二行由字符 "asdfghjkl" 组成。
// 第三行由字符 "zxcvbnm" 组成。
// American keyboard

// 示例 1：

// 输入：words = ["Hello","Alaska","Dad","Peace"]
// 输出：["Alaska","Dad"]
// 示例 2：

// 输入：words = ["omk"]
// 输出：[]
// 示例 3：

// 输入：words = ["adsdf","sfd"]
// 输出：["adsdf","sfd"]

// 提示：

// 1 <= words.length <= 20
// 1 <= words[i].length <= 100
// words[i] 由英文字母（小写和大写字母）组成
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const list = [];
  const rowIdx = "12210111011122000010020202";
  for (const word of words) {
    let isValid = true;
    const idx = rowIdx[word[0].toLowerCase().charCodeAt() - "a".charCodeAt()];
    console.log(idx);
    for (let i = 1; i < word.length; ++i) {
      if (
        rowIdx[word[i].toLowerCase().charCodeAt() - "a".charCodeAt()] !== idx
      ) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      list.push(word);
    }
  }
  return list;
};
// var findWords = function (words) {
//   const row1 = "qwertyuiop".split(""),
//     row2 = "asdfghjkl".split(""),
//     row3 = "zxcvbnm".split("");
//   const output = [];
//   for (let i = 0; i < words.length; i++) {
//     const wordsArr = [
//       ...new Set(words[i].split("").map((item) => item.toLowerCase())),
//     ];
//     const combineArr1 = [
//       ...new Set(wordsArr.filter((item) => row1.includes(item))),
//     ];
//     const combineArr2 = [
//       ...new Set(wordsArr.filter((item) => row2.includes(item))),
//     ];
//     const combineArr3 = [
//       ...new Set(wordsArr.filter((item) => row3.includes(item))),
//     ];
//     if (
//       wordsArr.length === combineArr1.length ||
//       wordsArr.length === combineArr2.length ||
//       wordsArr.length === combineArr3.length
//     ) {
//       output.push(words[i]);
//     }
//   }
//   return output;
// };
words = ["Hello", "Alaska", "Dad", "Peace"];
console.log(findWords(words));
