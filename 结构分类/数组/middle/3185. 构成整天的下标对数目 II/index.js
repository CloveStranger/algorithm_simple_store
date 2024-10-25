// 给你一个整数数组 hours，表示以 小时 为单位的时间，返回一个整数，表示满足 i < j 且 hours[i] + hours[j] 构成 整天 的下标对 i, j 的数目。

// 整天 定义为时间持续时间是 24 小时的 整数倍 。

// 例如，1 天是 24 小时，2 天是 48 小时，3 天是 72 小时，以此类推。

// 示例 1：

// 输入： hours = [12,12,30,24,24]

// 输出： 2

// 解释：

// 构成整天的下标对分别是 (0, 1) 和 (3, 4)。

// 示例 2：

// 输入： hours = [72,48,24,3]

// 输出： 3

// 解释：

// 构成整天的下标对分别是 (0, 1)、(0, 2) 和 (1, 2)。

// 提示：

// 1 <= hours.length <= 5 * 105
// 1 <= hours[i] <= 109

/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {
  let output = 0;

  for (let i = 0; i < hours.length; i++) {
    for (let j = i + 1; j < hours.length; j++) {
      if ((hours[i] + hours[j]) % 24 === 0) {
        output++;
      }
    }
  }

  return output;
};
var countCompleteDayPairs = function (hours) {
  const H = 24;
  const cnt = Array(H).fill(0);
  let ans = 0;
  for (const t of hours) {
    // 先查询 cnt，再更新 cnt，因为题目要求 i < j
    // 如果先更新，再查询，就把 i = j 的情况也考虑进去了
    ans += cnt[(H - (t % H)) % H];
    cnt[t % H]++;
  }
  return ans;
};

hours = [12, 12, 30, 24, 24];

console.log(countCompleteDayPairs(hours));
