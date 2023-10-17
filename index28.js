// 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。

// 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLastWord = function (s) {
//   let output = 0;
//   let store = 0;
//   for (let i = 0; i < s.length; i++) {
//     const item = s[i];
//     if (item === " ") {
//       if (output !== 0) {
//         store = output;
//       }
//       output = 0;
//     } else {
//       output++;
//     }
//   }
//   if (output === 0 && store !== 0) {
//     output = store;
//   }
//   return output;
// };

var lengthOfLastWord = function (s) {
  let output = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const item = s[i];
    if (item === " ") {
      if (output) {
        return output;
      }
    } else {
      output++;
    }
  }

  return output;
};

// var lengthOfLastWord = function (s) {
//   let index = s.length - 1;
//   while (s[index] === " ") {
//     index--;
//   }
//   let wordLength = 0;
//   while (index >= 0 && s[index] !== " ") {
//     wordLength++;
//     index--;
//   }
//   return wordLength;
// };

// s = "Hello World";
// s = "   fly me   to   the moon  ";
// s = "luffy is still joyboy";
s = "    ";

const res = lengthOfLastWord(s);
console.log(res);
