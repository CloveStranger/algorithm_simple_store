// 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

// 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

// 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//冒泡排序
// var merge = function (nums1, m, nums2, n) {
//   let index2 = 0;
//   for (let i = m; i < m + n; i++) {
//     if (nums1[i] === 0) {
//       nums1[i] = nums2[index2++];
//     }
//   }
//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; j < nums1.length; j++) {
//       if (nums1[j] > nums1[j + 1]) {
//         let temp = nums1[j + 1];
//         nums1[j + 1] = nums1[j];
//         nums1[j] = temp;
//       }
//     }
//   }
// };

var merge = function (nums1, m, nums2, n) {
  let index2 = 0;
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] > nums2[index2]) {
      for (let j = nums1.length - 1; j >= i; j--) {
        nums1[j] = nums1[j - 1];
      }
      nums1[i] = nums2[index2];
      index2++;
    }
  }
  if (index2 <= n) {
    for (let i = m + index2; i < m + n; i++) {
      nums1[i] = nums2[index2++];
    }
  }
  console.log(nums1);
};

// const nums1 = [1, 2, 3, 0, 0, 0];
// const m = 3;
// const nums2 = [2, 5, 6];
// const n = 3;
// [1, 2, 2, 3, 5, 6];

// nums1 = [1];
// m = 1;
// nums2 = [];
// n = 0;

// nums1 = [0];
// m = 0;
// nums2 = [1];
// n = 1;

// nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
// m = 6;
// nums2 = [1, 2, 2];
// n = 3;

nums1 = [4, 5, 6, 0, 0, 0];
m = 3;
nums2 = [1, 2, 2];
n = 3;

merge(nums1, m, nums2, n);
