// 你的笔记本键盘存在故障，每当你在上面输入字符 'i' 时，它会反转你所写的字符串。而输入其他字符则可以正常工作。

// 给你一个下标从 0 开始的字符串 s ，请你用故障键盘依次输入每个字符。

// 返回最终笔记本屏幕上输出的字符串。

// 示例 1：

// 输入：s = "string"
// 输出："rtsng"
// 解释：
// 输入第 1 个字符后，屏幕上的文本是："s" 。
// 输入第 2 个字符后，屏幕上的文本是："st" 。
// 输入第 3 个字符后，屏幕上的文本是："str" 。
// 因为第 4 个字符是 'i' ，屏幕上的文本被反转，变成 "rts" 。
// 输入第 5 个字符后，屏幕上的文本是："rtsn" 。
// 输入第 6 个字符后，屏幕上的文本是： "rtsng" 。
// 因此，返回 "rtsng" 。
// 示例 2：

// 输入：s = "poiinter"
// 输出："ponter"
// 解释：
// 输入第 1 个字符后，屏幕上的文本是："p" 。
// 输入第 2 个字符后，屏幕上的文本是："po" 。
// 因为第 3 个字符是 'i' ，屏幕上的文本被反转，变成 "op" 。
// 因为第 4 个字符是 'i' ，屏幕上的文本被反转，变成 "po" 。
// 输入第 5 个字符后，屏幕上的文本是："pon" 。
// 输入第 6 个字符后，屏幕上的文本是："pont" 。
// 输入第 7 个字符后，屏幕上的文本是："ponte" 。
// 输入第 8 个字符后，屏幕上的文本是："ponter" 。
// 因此，返回 "ponter" 。

// 提示：

// 1 <= s.length <= 100
// s 由小写英文字母组成
// s[0] != 'i'
/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
  let output = s;
  for (let i = 0; i < output.length; i++) {
    if (output[i] === "i") {
      output =
        output.slice(0, i).split("").reverse().join("") + output.slice(i + 1);
      i--;
    }
  }
  return output;
};
s = "poiinter";

console.log(finalString(s));
