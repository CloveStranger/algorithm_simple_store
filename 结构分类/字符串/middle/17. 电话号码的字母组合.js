// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

// 示例 1：

// 输入：digits = "23"
// 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
// 示例 2：

// 输入：digits = ""
// 输出：[]
// 示例 3：

// 输入：digits = "2"
// 输出：["a","b","c"]

// 提示：

// 0 <= digits.length <= 4
// digits[i] 是范围 ['2', '9'] 的一个数字。
/**
 * @param {string} digits
 * @return {string[]}
 */
// var letterCombinations = function (digits) {
//   if (digits === "") {
//     return [];
//   }
//   const map = {
//     2: "abc",
//     3: "def",
//     4: "ghi",
//     5: "jkl",
//     6: "mno",
//     7: "pqrs",
//     8: "tuv",
//     9: "wxyz",
//   };

//   const output = [];

//   const dfs = (str, index) => {
//     if (index > digits.length - 1) {
//       output.push(str);
//       return;
//     }
//     for (let i = 0; i < map[digits[index]]?.length; i++) {
//       const item = map[digits[index]][i];
//       dfs(`${str}${item}`, index + 1);
//     }
//   };

//   dfs("", 0);

//   return output;
// };

//chat version
var letterCombinations = function (digits) {
  if (digits === "") {
    return [];
  }
  // 使用常量代替硬编码的数字
  const DIGIT_LETTER_MAP = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const output = [];

  const dfs = (str, index) => {
    // 直接构建新的字符串数组
    if (index > digits.length - 1) {
      output.push(str);
      return;
    }

    for (let letter of DIGIT_LETTER_MAP[digits[index]] || "") {
      dfs(`${str}${letter}`, index + 1);
    }
  };

  dfs("", 0);

  return output;
};
digits = "234";
console.log(letterCombinations(digits));
