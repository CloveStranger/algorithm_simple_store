// 整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。

// 例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
// 整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

// 例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
// 类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
// 而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
// 给你一个整数数组 nums ，找出 nums 的下一个排列。

// 必须 原地 修改，只允许使用额外常数空间。

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[1,3,2]
// 示例 2：

// 输入：nums = [3,2,1]
// 输出：[1,2,3]
// 示例 3：

// 输入：nums = [1,1,5]
// 输出：[1,5,1]

// 提示：

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let hasChange = false;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      for (let j = nums.length - 1; j > i; j--) {
        if (nums[j] > nums[i]) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
          hasChange = true;
          break;
        }
      }
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        const temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
      }
      break;
    }
  }
  if (!hasChange) {
    return nums.reverse();
  }
  return nums;
};
nums = [1, 3, 2];
console.log(nextPermutation(nums));

// 找规律：尝试观察一些例子，找到排列变换的规律。比如，从右向左找到第一个非递增的元素，然后再找到该元素右侧比它大的最小元素，交换这两个元素，最后反转右侧的元素顺序，可以得到下一个排列。

// 最小化修改：尽可能地减少对数组的修改次数。例如，在寻找下一个排列时，交换元素和反转部分数组可以是高效的方式，同时也要确保避免不必要的修改。

// 原地修改：题目要求必须原地修改数组，因此需要在不使用额外空间的情况下进行操作，这意味着需要在原数组上进行操作而不是创建新的数组。
