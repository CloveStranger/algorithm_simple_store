// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

// P   A   H   N
// A P L S I I G
// Y   I   R
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

// 请你实现这个将字符串进行指定行数变换的函数：

// string convert(string s, int numRows);

// 示例 1：

// 输入：s = "PAYPALISHIRING", numRows = 3
// 输出："PAHNAPLSIIGYIR"
// 示例 2：
// 输入：s = "PAYPALISHIRING", numRows = 4
// 输出："PINALSIGYAHRPI"
// 解释：
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// 示例 3：

// 输入：s = "A", numRows = 1
// 输出："A"

// 输入：s = "PAYPALISHIRING", numRows = 5
// 输出："PINALSIGYAHRPI"
//P     H
//A   S I
//Y  I  R
//P L   I G
//A     N

// 输入：s = "PAYPALISHIRING", numRows = 6
// 输出："PINALSIGYAHRPI"
//P      R
//A    I I
//Y   H  R
//P  S   I G
//A I     N
//L

// 提示：

// 1 <= s.length <= 1000
// s 由英文字母（小写和大写）、',' 和 '.' 组成
// 1 <= numRows <= 1000
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  //   if (numRows === 1 || s.length <= numRows) {
  //     return s;
  //   }
  //   const rows = new Array(numRows).fill("");
  //   let currentRow = 0;
  //   let goingDown = false;
  //   for (const char of s) {
  //     rows[currentRow] += char;
  //     if (currentRow === 0 || currentRow === numRows - 1) {
  //       goingDown = !goingDown;
  //     }
  //     currentRow += goingDown ? 1 : -1;
  //   }
  //   return rows.join("");

  if (numRows === 1 || s.length <= numRows) {
    return s;
  }
  const rows = new Array(numRows).fill("");
  let curRow = 0;
  let goingDown = false;
  for (let i = 0; i < s.length; i++) {
    rows[curRow] += s[i];
    if (curRow === 0 || curRow === numRows - 1) {
      // 改变方向的条件：当前行是第一行或最后一行时
      goingDown = !goingDown; // 反转方向
    } // 更新当前行位置，根据方向决定是加还是减，加是往下走，减是往上走，即Z字形变换的移动方向
    curRow += goingDown ? 1 : -1;
  }

  return rows.join("");
};
s = "PAYPALISHIRING";
numRows = 4;
console.log(convert(s, numRows));
