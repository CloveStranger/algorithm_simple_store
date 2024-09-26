// 给你一个正整数数组 values，其中 values[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的 距离 为 j - i。

// 一对景点（i < j）组成的观光组合的得分为 values[i] + values[j] + i - j ，也就是景点的评分之和 减去 它们两者之间的距离。

// 返回一对观光景点能取得的最高分。

// 示例 1：

// 输入：values = [8,1,5,2,6]
// 输出：11
// 解释：i = 0, j = 2, values[i] + values[j] + i - j = 8 + 5 + 0 - 2 = 11
// 8 1 8-1+0-1=6
// values[i]+i+values[j]-j

// 示例 2：
// 输入：values = [1,2]
// 输出：2

// 提示：

// 2 <= values.length <= 5 * 104
// 1 <= values[i] <= 1000

/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
  let output = values[1] + values[0] + 0 - 1;

  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      const combineValue = values[i] + values[j] + i - j;
      output = Math.max(output, combineValue);
    }
  }

  return output;
};

var maxScoreSightseeingPair = function (values) {
  let output = values[1] + values[0] + 0 - 1;
  let preMax = Math.max(values[0], values[1] + 1);

  for (let i = 2; i < values.length; i++) {
    output = Math.max(output, preMax + values[i] - i);
    preMax = Math.max(preMax, values[i] + i);
  }

  return output;
};

values = [8, 1, 5, 2, 6];
values = [1, 3, 5];
values = [7, 8, 8, 10];

console.log(maxScoreSightseeingPair(values));
