// 给你一个下标从 0 开始、长度为 n 的整数数组 nums ，和两个整数 lower 和 upper ，返回 公平数对的数目 。

// 如果 (i, j) 数对满足以下情况，则认为它是一个 公平数对 ：

// 0 <= i < j < n，且
// lower <= nums[i] + nums[j] <= upper

// 示例 1：

// 输入：nums = [0,1,7,4,4,5], lower = 3, upper = 6
// 输出：6
// 解释：共计 6 个公平数对：(0,3)、(0,4)、(0,5)、(1,3)、(1,4) 和 (1,5) 。
// 示例 2：

// 输入：nums = [1,7,9,2,5], lower = 11, upper = 11
// 输出：1
// 解释：只有单个公平数对：(2,3) 。

// 提示：

// 1 <= nums.length <= 105
// nums.length == n
// -109 <= nums[i] <= 109
// -109 <= lower <= upper <= 109

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
  nums.sort((a, b) => a - b);

  let output = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];
      if (sum >= lower && sum <= upper) {
        output++;
      }
    }
  }

  return output;
};

var halfSearch = (nums, target) => {
  let left = -1;
  let right = nums.length;

  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return right;
};

var countFairPairs = function (nums, lower, upper) {
  nums.sort((a, b) => a - b);

  let output = 0;

  for (let i = 0; i < nums.length; i++) {
    const targetSlice = nums.slice(i + 1);

    const max = halfSearch(targetSlice, upper - nums[i] + 1);
    const min = halfSearch(targetSlice, lower - nums[i]);

    output += max - min;
  }

  return output;
};

var halfSearch = (nums, right, target) => {
  let left = -1;

  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return right;
};

var countFairPairs = function (nums, lower, upper) {
  nums.sort((a, b) => a - b);

  let output = 0;

  for (let i = 0; i < nums.length; ++i) {
    const max = halfSearch(nums, i, upper - nums[i] + 1);
    const min = halfSearch(nums, i, lower - nums[i]);

    output += max - min;
  }

  return output;
};

nums = [0, 1, 7, 4, 4, 5]; // [0,1,4,4,5,7]
lower = 3;
upper = 6;

// nums = [1, 7, 9, 2, 5]; //[1,2,5,7,9]
// lower = 11;
// upper = 11;

// nums = [0, 0, 0, 0, 0, 0];
// lower = 0;
// upper = 0;
console.log(countFairPairs(nums, lower, upper));
