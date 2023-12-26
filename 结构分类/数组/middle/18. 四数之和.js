// 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

// 0 <= a, b, c, d < n
// a、b、c 和 d 互不相同
// nums[a] + nums[b] + nums[c] + nums[d] == target
// 你可以按 任意顺序 返回答案 。

// 示例 1：

// 输入：nums = [1,0,-1,0,-2,2], target = 0
// 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// 示例 2：

// 输入：nums = [2,2,2,2,2], target = 8
// 输出：[[2,2,2,2]]

// 提示：

// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const output = [];
  nums.sort((a, b) => a - b);
  console.log(nums);

  let a = 0;
  let b = nums.length - 1;
  while (a < b) {
    let c = a + 1;
    let d = b - 1;
    const count = nums[a] + nums[b] + nums[c] + nums[d];
    if (count < target) {
      a++;
      continue;
    }
    if (count > target) {
      b--;
      continue;
    }
    while (c < d) {
      if (count === target) {
        let arr = [nums[a], nums[b], nums[c], nums[d]];
        output.push(arr);
        c++;
        d--;
        while (c > a + 1 && nums[c] === nums[c - 1]) {
          c++;
        }
        while (d < b - 1 && nums[d] === nums[d + 1]) {
          d--;
        }
        continue;
      }
      if (count < target) {
        c++;
        continue;
      }
      if (count > target) {
        d--;
        continue;
      }
    }
  }

  return output;
};
nums = [1, 0, -1, 0, -2, 2];
target = 0;
console.log(fourSum(nums, target));
