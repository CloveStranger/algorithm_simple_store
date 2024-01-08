// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

// 示例 1：

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]
// 示例 2：

// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]
// 示例 3：

// 输入：nums = [], target = 0
// 输出：[-1,-1]

// 提示：

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums 是一个非递减数组
// -109 <= target <= 109
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var searchRange = function (nums, target) {
//   return [nums.indexOf(target), nums.lastIndexOf(target)];
// };

var searchRange = function (nums, target) {
  const output = [-1, -1];
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      let i = mid,
        j = mid;
      while (i >= 0 && nums[i] === target) {
        i--;
      }
      while (j < nums.length && nums[j] === target) {
        j++;
      }
      output[0] = i + 1;
      output[1] = j - 1;
      break;
    }
    if (nums[mid] > target) {
      right = mid - 1;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    }
  }
  return output;
};

// var searchRange = function (nums, target) {
//   if (nums.length === 0) return [-1, -1];

//   const output = [-1, -1];
//   let left = 0,
//     right = nums.length - 1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);

//     if (nums[mid] === target) {
//       output[0] = findStart(nums, target, left, mid);
//       output[1] = findEnd(nums, target, mid, right);
//       break;
//     }

//     if (nums[mid] > target) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }

//   return output;
// };

// const findStart = (nums, target, left, right) => {
//   let start = left;
//   let end = right;
//   let result = -1;

//   while (start <= end) {
//     const mid = Math.floor((start + end) / 2);

//     if (nums[mid] === target) {
//       result = mid;
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }

//   return result;
// };

// const findEnd = (nums, target, left, right) => {
//   let start = left;
//   let end = right;
//   let result = -1;

//   while (start <= end) {
//     const mid = Math.floor((start + end) / 2);

//     if (nums[mid] === target) {
//       result = mid;
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }

//   return result;
// };

nums = [5, 7, 7, 8, 8, 10];
target = 6;

nums = [5, 7, 7, 8, 8, 10];
target = 8;

nums = [1];
target = 1;

console.log(searchRange(nums, target));
