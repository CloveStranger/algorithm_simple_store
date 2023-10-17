// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // const n = nums.length;
  // let left = 0,
  //   right = n - 1,
  //   ans = n;
  // while (left <= right) {
  //   let mid = ((right - left) >> 1) + left;
  //   if (target <= nums[mid]) {
  //     ans = mid;
  //     right = mid - 1;
  //   } else {
  //     left = mid + 1;
  //   }
  // }
  // return ans;
  // let left = 0;
  // let right = nums.length;
  // while (left <= right) {
  //   console.log(left, right);
  //   const middleIndex = ((right - left) >> 1) + left;
  //   if (nums[middleIndex] === target) {
  //     return middleIndex;
  //   }
  //   if (nums[middleIndex] <= target) {
  //     left = middleIndex + 1;
  //   } else {
  //     right = middleIndex - 1;
  //   }
  // }
  // return left;
  let left = 0;
  let right = nums.length - 1;
  console.log((10 - 0) >> 1);
  let ans = nums.length;
  while (left <= right) {
    const middleIndex = ((right - left) >> 1) + left;
    if (nums[middleIndex] < target) {
      left = middleIndex + 1;
    } else {
      ans = middleIndex;
      right = middleIndex - 1;
    }
  }
  return ans;
  //   while (middleValue !== target) {
  //     if (middleValue < target) {
  //       middleIndex = Math.floor((middleIndex + nums.length) / 2);
  //     } else {
  //       middleIndex = Math.floor(middleIndex / 2);
  //     }
  //     console.log(middleIndex);
  //   }
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] >= target) {
  //       return i;
  //     }
  //   }
  //   return nums.length;
};

nums = [1, 3, 5, 6];
target = 5;

const res = searchInsert(nums, target);
console.log(res);
