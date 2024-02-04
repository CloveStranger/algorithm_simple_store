const input = [1, 2, 2];

// var removeDuplicates = function (nums) {
//   let index1 = 0;
//   let index2 = 1;
//   let numStore = nums[0];

//   for (index2; index2 < nums.length; index2++) {
//     const curItem = nums[index2];
//     if (curItem !== numStore) {
//       numStore = curItem;
//       nums.splice(index1 + 1, index2 - index1 - 1);
//       index2 = index1 + 1;
//       index1 = index2;
//     } else {
//       if (index2 === nums.length - 1) {
//         nums.splice(index1 + 1);
//       }
//     }
//   }
//   console.log(nums);

//   return nums.length;
// };

var removeDuplicates = function (nums) {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }

  let index1 = 1;
  let index2 = 1;

  while (index2 < n) {
    if (nums[index2] !== nums[index2 - 1]) {
      nums[index1] = nums[index2];
      ++index1;
    }
    ++index2;
  }
  console.log(nums);

  return index1;
};

removeDuplicates(input);
