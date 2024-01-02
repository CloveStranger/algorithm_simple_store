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

var fourSum = function (nums, target) {
  const output = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate values for a

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue; // Skip duplicate values for b

      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          output.push([nums[i], nums[j], nums[left], nums[right]]);

          while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicate values for c
          while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicate values for d

          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return output;
};

// Test cases
const nums1 = [1, 0, -1, 0, -2, 2];
const target1 = 0;
console.log(fourSum(nums1, target1));

const nums2 = [2, 2, 2, 2, 2];
const target2 = 8;
console.log(fourSum(nums2, target2));

// 双指针法：使用双指针的方法，对数组进行遍历和收缩搜索空间。这样可以在 O(n^3) 的时间复杂度内解决四数之和的问题。

// 排序：对数组进行排序，使得相同的元素相邻。这个步骤可以帮助我们处理重复元素，并且有助于跳过重复的组合，避免得到重复的四元组。

// 跳过重复元素：在遍历过程中，通过判断当前元素与前一个元素是否相同，从而跳过重复元素。这确保了结果中不会出现重复的四元组。

// 嵌套循环：使用嵌套的循环来考虑不同位置的元素组合，利用双指针收缩搜索空间，从而找到满足条件的四元组。

// 合理的指针移动：根据当前四数之和与目标值的大小关系，适当地移动指针，使得和接近目标值，从而快速找到符合条件的组合。

// 这些关键点共同作用下，算法能够在高效的时间复杂度内（O(n^3)）找到所有满足条件的四元组，并且避免了重复的组合出现在最终的结果中。
