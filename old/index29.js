// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let numLen = digits.length;
  let stepSignal = true;
  for (let i = numLen - 1; i >= 0; i--) {
    let item = digits[i];
    console.log(item);
    if (stepSignal) {
      item = item + 1;
    }
    if (item === 10) {
      stepSignal = true;
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
      }
    } else {
      digits[i] = item;
      stepSignal = false;
    }
  }

  return digits;
};

// var plusOne = function (digits) {
//   const n = digits.length;
//   for (let i = n - 1; i >= 0; --i) {
//     if (digits[i] !== 9) {
//       ++digits[i];
//       for (let j = i + 1; j < n; ++j) {
//         digits[j] = 0;
//       }
//       return digits;
//     }
//   }

//   // digits 中所有的元素均为 9
//   const ans = new Array(n + 1).fill(0);
//   ans[0] = 1;
//   return ans;
// };

// digits = [1, 2, 3];

// digits = [4, 3, 2, 1];

// digits = [0];

// digits = [9];

// digits = [9, 9, 9];

digits = [1, 9, 9];

const res = plusOne(digits);
console.log(res);
