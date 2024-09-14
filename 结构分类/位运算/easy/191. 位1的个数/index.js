// 编写一个函数，获取一个正整数的二进制形式并返回其二进制表达式中
// 设置位
//  的个数（也被称为汉明重量）。

// 示例 1：

// 输入：n = 11
// 输出：3
// 解释：输入的二进制串 1011 中，共有 3 个设置位。
// 示例 2：

// 输入：n = 128
// 输出：1
// 解释：输入的二进制串 10000000 中，共有 1 个设置位。
// 示例 3：

// 输入：n = 2147483645
// 输出：30
// 解释：输入的二进制串 11111111111111111111111111111101 中，共有 30 个设置位。

// 提示：

// 1 <= n <= 231 - 1

// 进阶：

// 如果多次调用这个函数，你将如何优化你的算法？

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  const charAsOx = n.toString(2);
  return charAsOx.split("").filter((x) => parseInt(x)).length;
};
var hammingWeight = function (n) {
  let output = 0;
  let nOperation = n;
  while (nOperation) {
    if (nOperation % 2 !== 0) {
      output++;
    }
    nOperation >>= 1;
  }
  return output;
};

var hammingWeight = function (n) {
  let ret = 0;
  while (n) {
    n &= n - 1;
    ret++;
  }
  return ret;
};

console.log(hammingWeight(2147483645));
