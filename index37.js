// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   let res = 0;
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i; j < prices.length; j++) {
//       const profit = prices[j] - prices[i];
//       if (profit >= 0 && profit > res) {
//         res = profit;
//       }
//     }
//   }
//   return res;
// };

var maxProfit = function (prices) {
  let max = 0;
  let res = 0;
  for (let i = prices.length - 1; i >= 0; i--) {
    if (prices[i] > max) {
      max = prices[i];
      for (let j = i; j >= 0; j--) {
        const profit = max - prices[j];
        if (profit > res) {
          res = profit;
        }
      }
    }
  }
  return res;
};

// prices = [1, 2];

// prices = [7, 1, 5, 3, 6, 4]; // 5

// prices = [7, 6, 4, 3, 1]; // 0

const res = maxProfit(prices);
console.log(res);
