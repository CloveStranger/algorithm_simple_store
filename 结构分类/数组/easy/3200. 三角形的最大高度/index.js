// 给你两个整数 red 和 blue，分别表示红色球和蓝色球的数量。你需要使用这些球来组成一个三角形，满足第 1 行有 1 个球，第 2 行有 2 个球，第 3 行有 3 个球，依此类推。

// 每一行的球必须是 相同 颜色，且相邻行的颜色必须 不同。

// 返回可以实现的三角形的 最大 高度。

// 示例 1：

// 输入： red = 2, blue = 4

// 输出： 3

// 解释：

// 上图显示了唯一可能的排列方式。

// 示例 2：

// 输入： red = 2, blue = 1

// 输出： 2

// 解释：

// 上图显示了唯一可能的排列方式。

// 示例 3：

// 输入： red = 1, blue = 1

// 输出： 1

// 示例 4：

// 输入： red = 10, blue = 1

// 输出： 2

// 解释：

// 上图显示了唯一可能的排列方式。

// 提示：

// 1 <= red, blue <= 100

/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
var maxHeightOfTriangle = function (red, blue) {
  let maxLevel = 1;

  let r1 = red;
  let b1 = blue;
  let r2 = red;
  let b2 = blue;

  for (let i = 1; ; i++) {
    if (i % 2 === 0) {
      b1 -= i;
    } else {
      r1 -= i;
    }
    if (r1 < 0 || b1 < 0) {
      maxLevel = Math.max(maxLevel, i - 1);
      break;
    }
  }

  for (let i = 1; ; i++) {
    if (i % 2 === 0) {
      r2 -= i;
    } else {
      b2 -= i;
    }
    if (r2 < 0 || b2 < 0) {
      maxLevel = Math.max(maxLevel, i - 1);
      break;
    }
  }

  return maxLevel;
};

var maxHeightOfTriangle = function (red, blue) {
  return Math.max(maxHeight(red, blue), maxHeight(blue, red));
};

/**
 *
 * @param {*} x
 * @param {*} y
 * @returns
 *
 *
 */

function maxHeight(x, y) {
  const odd = 2 * Math.floor(Math.sqrt(x)) - 1;
  const even = 2 * Math.floor(Math.floor(-1 + Math.sqrt(1 + 4 * y)) / 2);
  return Math.min(odd, even) + 1;
}
red = 2;
blue = 4;
red = 2;
blue = 1;
red = 10;
blue = 1;

console.log(maxHeightOfTriangle(red, blue));
