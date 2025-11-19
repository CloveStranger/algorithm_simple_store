// 有两种特殊字符：

// 第一种字符可以用一比特 0 表示
// 第二种字符可以用两比特（10 或 11）表示
// 给你一个以 0 结尾的二进制数组 bits ，如果最后一个字符必须是一个一比特字符，则返回 true 。

// 示例 1:

// 输入: bits = [1, 0, 0]
// 输出: true
// 解释: 唯一的解码方式是将其解析为一个两比特字符和一个一比特字符。
// 所以最后一个字符是一比特字符。
// 示例 2:

// 输入：bits = [1,1,1,0]
// 输出：false
// 解释：唯一的解码方式是将其解析为两比特字符和两比特字符。
// 所以最后一个字符不是一比特字符。

// 提示:

// 1 <= bits.length <= 1000
// bits[i] 为 0 或 1

/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  if (bits[bits.length - 1] != 0) {
    return false;
  }
  let i = 0;
  while (i < bits.length) {
    if (bits[i] == 1) {
      i += 2;
      if (i >= bits.length) {
        return false;
      }
    } else {
      i += 1;
    }
  }
  return true;
};
var isOneBitCharacter = function (bits) {
  if (bits[bits.length - 1] !== 0) {
    return false;
  }
  const isEven = bits.length / 2;
  if (bits[bits.length - 2] == 1) {
    return true;
  }
};
bits = [1, 0, 0];
// bits = [1, 1, 1, 0];
console.log(isOneBitCharacter(bits));
