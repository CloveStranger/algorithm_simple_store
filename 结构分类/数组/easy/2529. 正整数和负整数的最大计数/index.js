// 给你一个按 非递减顺序 排列的数组 nums ，返回正整数数目和负整数数目中的最大值。

// 换句话讲，如果 nums 中正整数的数目是 pos ，而负整数的数目是 neg ，返回 pos 和 neg二者中的最大值。
// 注意：0 既不是正整数也不是负整数。

// 示例 1：

// 输入：nums = [-2,-1,-1,1,2,3]
// 输出：3
// 解释：共有 3 个正整数和 3 个负整数。计数得到的最大值是 3 。
// 示例 2：

// 输入：nums = [-3,-2,-1,0,0,1,2]
// 输出：3
// 解释：共有 2 个正整数和 3 个负整数。计数得到的最大值是 3 。
// 示例 3：

// 输入：nums = [5,20,66,1314]
// 输出：4
// 解释：共有 4 个正整数和 0 个负整数。计数得到的最大值是 4 。

// 提示：

// 1 <= nums.length <= 2000
// -2000 <= nums[i] <= 2000
// nums 按 非递减顺序 排列。

// 进阶：你可以设计并实现时间复杂度为 O(log(n)) 的算法解决此问题吗？

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  if (nums[0] > 0 || nums[nums.length - 1] < 0) {
    return nums.length;
  }

  let count1 = 0,
    count2 = 0;

  for (const item of nums) {
    if (item < 0) {
      count1++;
    } else if (item > 0) {
      count2++;
    }
  }

  return Math.max(count1, count2);
};

const halfSearch = (nums, target) => {
  let left = -1;
  let right = nums.length;

  while (left + 1 < right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] >= target) {
      // 二分范围缩小至 (left, mid)
      right = middle;
    } else {
      // 二分范围缩小至 (mid, right)
      left = middle;
    }
  }
  // 此时 left 等于 right - 1
  // 因为 nums[right - 1] < target 且 nums[right] >= target，所以答案是 right
  return right;
};
const halfSearch1 = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] >= target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return left;
};

var maximumCount = function (nums) {
  const n = nums.length;
  if (nums[0] > 0 || nums[n - 1] < 0) {
    return nums.length;
  }

  const negativeMax = halfSearch(nums, 0);
  const positiveMax = halfSearch(nums, 1);

  return Math.max(negativeMax, n - positiveMax);
};

nums = [5, 20, 66, 1314];
nums = [-2, -1, -1, 1, 2, 3];
nums = [-3, -2, -1, 0, 0, 1, 2];
// nums = [-1563, -236, -114, -55, 427, 447, 687, 752, 1021, 1636];
console.log(maximumCount(nums));
