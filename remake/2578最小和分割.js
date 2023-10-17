// 给你一个正整数 num ，请你将它分割成两个非负整数 num1 和 num2 ，满足：

// num1 和 num2 直接连起来，得到 num 各数位的一个排列。
// 换句话说，num1 和 num2 中所有数字出现的次数之和等于 num 中所有数字出现的次数。
// num1 和 num2 可以包含前导 0 。
// 请你返回 num1 和 num2 可以得到的和的 最小 值。

// 注意：

// num 保证没有前导 0 。
// num1 和 num2 中数位顺序可以与 num 中数位顺序不同。

// 示例 1：

// 输入：num = 4325
// 输出：59
// 解释：我们可以将 4325 分割成 num1 = 24 和 num2 = 35 ，和为 59 ，59 是最小和。
// 示例 2：

// 输入：num = 687
// 输出：75
// 解释：我们可以将 687 分割成 num1 = 68 和 num2 = 7 ，和为最优值 75 。

// 提示：

// 10 <= num <= 109

/**
 * @param {number} num
 * @return {number}
 */
// var splitNum = function (num) {
//   if (num < 10) {
//     return num;
//   }
//   let numbers = [];
//   let curVal = num;
//   let output = 0;
//   while (curVal >= 1) {
//     const pushInfo = curVal % 10;
//     numbers.push(pushInfo);
//     curVal = ~~(curVal / 10);
//   }
//   numbers = numbers.sort();
//   console.log(numbers);
//   if (numbers.length == 2) {
//     return numbers[0] + numbers[1];
//   }
//   for (let i = 0; i < numbers.length / 2; i++) {
//     const add1 = numbers[i];
//     const add2 = numbers[numbers.length - i - 1];
//     if (i !== numbers.length - i - 1) {
//       const addInfo = add1 * 10 + add2;
//       output += addInfo;
//     } else {
//       const addInfo = add1;
//       output += addInfo;
//     }
//   }
//   console.log(output);
//   return output;
// };

var splitNum = function (num) {
  const stnum = [...String(num)].map(Number).sort((a, b) => a - b);
  let num1 = 0,
    num2 = 0;
  stnum.forEach((val, i) => {
    i % 2 == 0 ? (num1 = num1 * 10 + val) : (num2 = num2 * 10 + val);
  });
  return num1 + num2;
};

const num1 = 4325;

const num2 = 687;

const num3 = 999999999;

const output = splitNum(num3);
console.log(output);

// //取整技巧
// 1、~~number
// 2、number ^ 0
// 3、number << 0
// //函数取整
// 1、Math.round(number)
// 2、Math.ceil(number)
// 3、Math.floor(number)
