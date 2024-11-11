// 给定一个整数数组 prices，其中 prices[i]表示第 i 天的股票价格 ；整数 fee 代表了交易股票的手续费用。

// 你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。

// 返回获得利润的最大值。

// 注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。

// 示例 1：

// 输入：prices = [1, 3, 2, 8, 4, 9], fee = 2
// 输出：8
// 解释：能够达到的最大利润:
// 在此处买入 prices[0] = 1
// 在此处卖出 prices[3] = 8
// 在此处买入 prices[4] = 4
// 在此处卖出 prices[5] = 9
// 总利润: ((8 - 1) - 2) + ((9 - 4) - 2) = 8
// 示例 2：

// 输入：prices = [1,3,7,5,10,3], fee = 3
// 输出：6

// 提示：

// 1 <= prices.length <= 5 * 104
// 1 <= prices[i] < 5 * 104
// 0 <= fee < 5 * 104

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {};

var maxProfit = function (prices, fee) {
  const n = prices.length;
  const memo = new Array(n).fill(null).map(() => [-1, -1]); // -1 表示没有计算过

  function dfs(i, hold) {
    if (i < 0) {
      return hold ? -Infinity : 0;
    }
    if (memo[i][hold] !== -1) {
      // 之前计算过
      return memo[i][hold];
    }
    let res;

    if (hold) {
      res = Math.max(dfs(i - 1, 1), dfs(i - 1, 0) - prices[i]);
    } else {
      res = Math.max(dfs(i - 1, 0), dfs(i - 1, 1) + prices[i] - fee);
    }

    return (memo[i][hold] = res); // 记忆化
  }

  return dfs(n - 1, 0);
};

prices = [1, 3, 2, 8, 4, 9];
fee = 2;

console.log(maxProfit(prices, fee));
