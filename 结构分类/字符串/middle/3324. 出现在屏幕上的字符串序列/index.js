// 给你一个字符串 target。

// Alice 将会使用一种特殊的键盘在她的电脑上输入 target，这个键盘 只有两个 按键：

// 按键 1：在屏幕上的字符串后追加字符 'a'。
// 按键 2：将屏幕上字符串的 最后一个 字符更改为英文字母表中的 下一个 字符。例如，'c' 变为 'd'，'z' 变为 'a'。
// 注意，最初屏幕上是一个空字符串 ""，所以她 只能 按按键 1。

// 请你考虑按键次数 最少 的情况，按字符串出现顺序，返回 Alice 输入 target 时屏幕上出现的所有字符串列表。

// 示例 1：

// 输入： target = "abc"

// 输出： ["a","aa","ab","aba","abb","abc"]

// 解释：

// Alice 按键的顺序如下：

// 按下按键 1，屏幕上的字符串变为 "a"。
// 按下按键 1，屏幕上的字符串变为 "aa"。
// 按下按键 2，屏幕上的字符串变为 "ab"。
// 按下按键 1，屏幕上的字符串变为 "aba"。
// 按下按键 2，屏幕上的字符串变为 "abb"。
// 按下按键 2，屏幕上的字符串变为 "abc"。
// 示例 2：

// 输入： target = "he"

// 输出： ["a","b","c","d","e","f","g","h","ha","hb","hc","hd","he"]

// 提示：

// 1 <= target.length <= 400
// target 仅由小写英文字母组成。

/**
 * @param {string} target
 * @return {string[]}
 */
var stringSequence = function (target) {
  const output = [];

  const charStr = ["a"];

  output.push(charStr[0]);

  for (let i = 0; i < target.length; i++) {
    const char = target[i].charCodeAt(0);
    while (charStr[i].charCodeAt(0) < char) {
      charStr[i] = String.fromCharCode(charStr[i].charCodeAt(0) + 1);
      output.push(charStr.join(""));
    }
    if (charStr.length < target.length) {
      charStr.push("a");
      output.push(charStr.join(""));
    }
  }

  return output;
};
var stringSequence = function (target) {
  const output = [];

  const charStr = [];

  for (let i = 0; i < target.length; i++) {
    charStr.push("a");
    output.push(charStr.join(""));
    const char = target[i].charCodeAt(0);
    while (charStr[i].charCodeAt(0) < char) {
      charStr[i] = String.fromCharCode(charStr[i].charCodeAt(0) + 1);
      output.push(charStr.join(""));
    }
  }

  return output;
};
var stringSequence = function (target) {
  let cur = "";
  let ans = [];
  for (let c of target) {
    let n = c.charCodeAt();
    for (let i = "a".charCodeAt(); i <= n; i++) {
      ans.push(cur + String.fromCharCode(i));
    }
    cur = ans[ans.length - 1];
  }
  return ans;
};

target = "abc";

console.log(stringSequence(target));
