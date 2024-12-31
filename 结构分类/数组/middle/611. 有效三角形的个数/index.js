// 给定一个包含非负整数的数组 nums ，返回其中可以组成三角形三条边的三元组个数。

// 示例 1:

// 输入: nums = [2,2,3,4]
// 输出: 3
// 解释:有效的组合是:
// 2,3,4 (使用第一个 2)
// 2,3,4 (使用第二个 2)
// 2,2,3
// 示例 2:

// 输入: nums = [4,2,3,4]
// 输出: 4

// 提示:

// 1 <= nums.length <= 1000
// 0 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  let output = 0;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      let k = nums.length - 1;
      while (k > j) {
        if (nums[i] + nums[j] > nums[k]) {
          output++;
        }
        k--;
      }
    }
  }

  return output;
};

var triangleNumber = function (nums) {
  let output = 0;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      let k = nums.length - 1;
      while (nums[k] >= nums[i] + nums[j] && k > j) {
        k--;
      }
      output += k - j;
    }
  }

  return output;
};

var triangleNumber = function (nums) {
  let output = 0;

  nums.sort((a, b) => a - b);

  for (let k = 2; k < nums.length; k++) {
    const c = nums[k];
    let i = 0;
    let j = k - 1;
    while (i < j) {
      if (nums[i] + nums[j] > c) {
        output += j - i;
        j--;
      } else {
        i++;
      }
    }
  }

  return output;
};

nums = [2, 2, 3, 4];

console.log(triangleNumber(nums));
