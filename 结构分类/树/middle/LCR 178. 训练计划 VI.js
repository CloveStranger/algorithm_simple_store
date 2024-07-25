// 教学过程中，教练示范一次，学员跟做三次。该过程被混乱剪辑后，记录于数组 actions，其中 actions[i] 表示做出该动作的人员编号。请返回教练的编号。

// 示例 1：

// 输入：actions = [5, 7, 5, 5]
// 输出：7
// 示例 2：

// 输入：actions = [12, 1, 6, 12, 6, 12, 6]
// 输出：1

// 提示：

// 1 <= actions.length <= 10000
// 1 <= actions[i] < 2^31

/**
 * @param {number[]} actions
 * @return {number}
 */
var trainingPlan = function (actions) {
  const map = new Map();

  for (let i = 0; i < actions.length; i++) {
    map.set(actions[i], (map.get(actions[i]) ?? 0) + 1);
  }

  return [...map.entries()].sort((a, b) => a[1] - b[1])[0][0];
};

var trainingPlan = function (actions) {
  let ones = 0,
    twos = 0;
  for (let action of actions) {
    ones = ones ^ (action & ~twos);
    twos = twos ^ (action & ~ones);
  }
  return ones;
};

console.log(trainingPlan([12, 1, 6, 12, 6, 12, 6]));
