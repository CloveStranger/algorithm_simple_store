// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

// 示例 1：

// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
// 示例 2：

// 输入：height = [4,2,0,3,2,5]
// 输出：9

// 提示：

// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105

/**
 * @param {number[]} height
 * @return {number}
 */

///前后缀写法
var trap = function (height) {
  let preMaxs = Array(height.length);
  preMaxs[0] = height[0];
  for (let i = 1; i < height.length; i++) {
    preMaxs[i] = Math.max(preMaxs[i - 1], height[i]);
  }
  let sufMaxs = Array(height.length);
  sufMaxs[height.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i >= 0; i--) {
    sufMaxs[i] = Math.max(sufMaxs[i + 1], height[i]);
  }
  let ans = 0;
  for (let i = 0; i < height.length; i++) {
    ans += Math.min(preMaxs[i], sufMaxs[i]) - height[i];
  }
  return ans;
};
///相向双指针
var trap = function (height) {
  let ans = 0,
    left = 0,
    right = height.length - 1,
    preMax = 0,
    sufMax = 0;
  while (left < right) {
    preMax = Math.max(preMax, height[left]);
    sufMax = Math.max(sufMax, height[right]);
    if (preMax < sufMax) {
      ans += preMax - height[left++];
    } else {
      ans += sufMax - height[right--];
    }
  }
  return ans;
};

height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

console.log(trap(height));
