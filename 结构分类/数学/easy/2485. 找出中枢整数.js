// 给你一个正整数 n ，找出满足下述条件的 中枢整数 x ：

// 1 和 x 之间的所有元素之和等于 x 和 n 之间所有元素之和。
// 返回中枢整数 x 。如果不存在中枢整数，则返回 -1 。题目保证对于给定的输入，至多存在一个中枢整数。

// 示例 1：

// 输入：n = 8
// 输出：6
// 解释：6 是中枢整数，因为 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21 。
// 示例 2：

// 输入：n = 1
// 输出：1
// 解释：1 是中枢整数，因为 1 = 1 。
// 示例 3：

// 输入：n = 4
// 输出：-1
// 解释：可以证明不存在满足题目要求的整数。

// 提示：

// 1 <= n <= 1000

/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  if (n.length === 1) {
    return n[0];
  }
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  let target = -1;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr.slice(0, i + 1).reduce((a, b) => a + b, 0) ===
      arr.slice(i).reduce((a, b) => a + b, 0)
    ) {
      target = arr[i];
      break;
    }
  }
  return target;
};

var pivotInteger = function (n) {
  let t = (n * n + n) / 2;
  let x = parseInt(Math.sqrt(t));
  if (x * x === t) {
    return x;
  }
  return -1;
};

console.log(pivotInteger(8));
