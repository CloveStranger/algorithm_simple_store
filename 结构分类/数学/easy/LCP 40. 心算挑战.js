// 「力扣挑战赛」心算项目的挑战比赛中，要求选手从 N 张卡牌中选出 cnt 张卡牌，若这 cnt 张卡牌数字总和为偶数，则选手成绩「有效」且得分为 cnt 张卡牌数字总和。 给定数组 cards 和 cnt，其中 cards[i] 表示第 i 张卡牌上的数字。 请帮参赛选手计算最大的有效得分。若不存在获取有效得分的卡牌方案，则返回 0。

// 示例 1：

// 输入：cards = [1,2,8,9], cnt = 3

// 输出：18

// 解释：选择数字为 1、8、9 的这三张卡牌，此时可获得最大的有效得分 1+8+9=18。

// 示例 2：

// 输入：cards = [3,3,1], cnt = 1

// 输出：0

// 解释：不存在获取有效得分的卡牌方案。

// 提示：

// 1 <= cnt <= cards.length <= 10^5
// 1 <= cards[i] <= 1000

/**
 * @param {number[]} cards
 * @param {number} cnt
 * @return {number}
 */
var maxmiumScore = function (cards, cnt) {
  cards.sort((a, b) => b - a);
  console.log(cards);
  let sum = 0;
  for (let j = 0; j < cards.length; j++) {
    let curSum = 0;
    let remainCount = cnt;
    for (let i = j; i < cards.length; i++) {
      if (remainCount === 0) break;
      if (remainCount === 1) {
        if (curSum % 2 === 0 && cards[i] % 2 === 0) {
          curSum += cards[i];
          remainCount--;
        } else if (curSum % 2 === 1 && cards[i] % 2 === 1) {
          curSum += cards[i];
          remainCount--;
        }
        continue;
      }
      curSum += cards[i];
      remainCount--;
    }
    if (remainCount == 0) {
      sum = Math.max(sum, curSum);
    }
  }

  return sum;
};

cards = [1, 2, 8, 9];
cnt = 3;

cards = [9, 5, 9, 1, 6, 10, 3, 4, 5, 1];
cnt = 2;

cards = [8, 7, 5, 3, 3, 2, 1, 1];
cnt = 7;

console.log(maxmiumScore(cards, cnt));
