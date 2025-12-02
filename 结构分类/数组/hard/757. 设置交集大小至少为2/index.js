// 给你一个二维整数数组 intervals ，其中 intervals[i] = [starti, endi] 表示从 starti 到 endi 的所有整数，包括 starti 和 endi 。

// 包含集合 是一个名为 nums 的数组，并满足 intervals 中的每个区间都 至少 有 两个 整数在 nums 中。

// 例如，如果 intervals = [[1,3], [3,7], [8,9]] ，那么 [1,2,4,7,8,9] 和 [2,3,4,8,9] 都符合 包含集合 的定义。
// 返回包含集合可能的最小大小。

// 示例 1：

// 输入：intervals = [[1,3],[3,7],[8,9]]
// 输出：5
// 解释：nums = [2, 3, 4, 8, 9].
// 可以证明不存在元素数量为 4 的包含集合。
// 示例 2：

// 输入：intervals = [[1,3],[1,4],[2,5],[3,5]]
// 输出：3
// 解释：nums = [2, 3, 4].
// 可以证明不存在元素数量为 2 的包含集合。
// 示例 3：

// 输入：intervals = [[1,2],[2,3],[2,4],[4,5]]
// 输出：5
// 解释：nums = [1, 2, 3, 4, 5].
// 可以证明不存在元素数量为 4 的包含集合。

// 提示：

// 1 <= intervals.length <= 3000
// intervals[i].length == 2
// 0 <= starti < endi <= 108

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function (intervals) {
  const output = [];
  const greedy = (bet, index, current) => {
    if (index >= intervals.length) {
      const item = [...new Set(current)];
      if (item.length < output.length || output.length === 0) {
        output.length = 0;
        output.push(...item);
      }
      return;
    }
    const item = intervals[index];
    if (bet.length && item[0] <= bet[0] && item[1] >= bet[1]) {
      greedy(bet, index + 1, current);
      return;
    }
    for (let i = item[0]; i < item[1]; i++) {
      const between = [i, i + 1];
      greedy(between, index + 1, [...current, ...between]);
    }
  };
  greedy([], 0, []);
  return output.length;
};

intervals = [
  [1, 3],
  [3, 7],
  [8, 9],
];

intervals = [
  [4, 14],
  [6, 17],
  [7, 14],
  [14, 21],
  [4, 7],
];

console.log(intersectionSizeTwo(intervals));
