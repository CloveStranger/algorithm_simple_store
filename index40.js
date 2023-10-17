// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let emperor = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      emperor = nums[i];
    }
    if (nums[i] === emperor) {
      count++;
    } else {
      count--;
    }
  }
  return emperor;
};

// nums = [3, 2, 3]; //3

nums = [2, 2, 1, 1, 1, 2, 2]; //2

const res = majorityElement(nums);

console.log(res);
