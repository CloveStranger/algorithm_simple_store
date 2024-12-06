// 珂珂喜欢吃香蕉。这里有 n 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 h 小时后回来。

const { Linter } = require("eslint");

// 珂珂可以决定她吃香蕉的速度 k （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 k 根。如果这堆香蕉少于 k 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。

// 珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。

// 返回她可以在 h 小时内吃掉所有香蕉的最小速度 k（k 为整数）。

// 示例 1：
// 输入：piles = [3,6,7,11], h = 8
// 输出：4
// 27
// 示例 2：
// 输入：piles = [30,11,23,4,20], h = 5
// 输出：30
// 88
// 示例 3：
// 输入：piles = [30,11,23,4,20], h = 6
// 输出：23
// 88

// 提示：

// 1 <= piles.length <= 104
// piles.length <= h <= 109
// 1 <= piles[i] <= 109

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let left = 0;
  let right = Math.max(...piles);
  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2);
    let sum = 0;
    for (const pile of piles) {
      sum += Math.ceil(pile / mid);
    }
    if (sum <= h) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return right;
};

var minEatingSpeed = function (piles, h) {
  let l = 0,
    r = Math.max(...piles) + 1;
  while (r - l > 1) {
    const i = l + ((r - l) >> 1);
    const t = piles.reduce((sum, p) => sum + Math.ceil(p / i), 0);
    t <= h ? (r = i) : (l = i);
  }

  return r;
};

var minEatingSpeed = function (piles, h) {
  let left = 0;
  let right = Math.max(...piles);
  while (left + 1 < right) {
    let mid = Math.floor((left + right) / 2);
    let sum = piles.reduce((sum, pile) => sum + Math.ceil(pile / mid), 0);
    if (sum <= h) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return right;
};

piles = [3, 6, 7, 11];
h = 8;
console.log(minEatingSpeed(piles, h));
