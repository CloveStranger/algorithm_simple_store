/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function (nums, val) {
//   if (!nums.length) {
//     return 0;
//   }
//   if (nums.length === 1) {
//     if (nums[0] === val) {
//       nums = [];
//       return 0;
//     }
//     return 1;
//   }
//   let iStore = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       for (let j = i + 1; j < nums.length; j++) {
//         if (nums[j] !== val) {
//           nums[j] = nums[i] + nums[j];
//           nums[i] = nums[j] - nums[i];
//           nums[j] = nums[j] - nums[i];
//           iStore++;
//           break;
//         }
//       }
//     } else {
//       iStore++;
//     }
//   }
//   console.log(nums);
//   return iStore;
// };

var removeElement = function (nums, val) {
  let left = 0,
    right = nums.length;
  while (left < right) {
    if (nums[left] === val) {
      nums[left] = nums[right - 1];
      right--;
    } else {
      left++;
    }
  }
  return left;
};

// nums = [3, 2, 2, 3];
// val = 3;
/*
2323
2233
*/

nums = [0, 1, 2, 2, 3, 0, 4, 2];
val = 2;
/*
01322042
01302242
01304222
*/

// nums = [2];
// val = 3;

console.log(removeElement(nums, val));
