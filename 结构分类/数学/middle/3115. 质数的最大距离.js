// 给你一个整数数组 nums。

// 返回两个（不一定不同的）质数在 nums 中 下标 的 最大距离。

// 示例 1：

// 输入： nums = [4,2,9,5,3]

// 输出： 3

// 解释： nums[1]、nums[3] 和 nums[4] 是质数。因此答案是 |4 - 1| = 3。

// 示例 2：

// 输入： nums = [4,8,2,8]

// 输出： 0

// 解释： nums[2] 是质数。因为只有一个质数，所以答案是 |2 - 2| = 0。

// 提示：

// 1 <= nums.length <= 3 * 105
// 1 <= nums[i] <= 100
// 输入保证 nums 中至少有一个质数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPrimeDifference = function (nums) {
  if (nums.length === 1) return 0;

  const checkPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 4; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  };

  let start;
  let end;

  for (let i = 0; i < nums.length; i++) {
    if (checkPrime(nums[i])) {
      start ??= i;
      end = i;
    }
  }

  return end - start;
};

nums = [2, 2];
nums = [5];
nums = [1, 7];
nums = [3, 17];
console.log(maximumPrimeDifference(nums));
