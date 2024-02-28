// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

// 注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。

// 示例 1:

// 输入: num1 = "2", num2 = "3"
// 输出: "6"
// 示例 2:

// 输入: num1 = "123", num2 = "456"
// 输出: "56088"

// 提示：

// 1 <= num1.length, num2.length <= 200
// num1 和 num2 只能由数字组成。
// num1 和 num2 都不包含任何前导零，除了数字0本身。
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  // 将数字字符串转换为数组，并反转，方便按位相乘
  let arr1 = num1.split("").reverse();
  let arr2 = num2.split("").reverse();
  console.log(num1, num2);
  console.log(arr1);
  console.log(arr2);

  // 创建一个数组来存储乘积的各位
  let result = new Array(arr1.length + arr2.length).fill(0);

  // 逐位相乘
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result[i + j] += parseInt(arr1[i]) * parseInt(arr2[j]);
      result[i + j + 1] += Math.floor(result[i + j] / 10);
      result[i + j] %= 10;
    }
  }

  // 去除结果数组前导的0
  while (result.length > 1 && result[result.length - 1] === 0) {
    result.pop();
  }

  // 反转数组并将其转换为字符串
  return result.reverse().join("");
};

num1 = "2";
num2 = "3";

num1 = "123456789";
num2 = "987654321";

console.log(multiply(num1, num2));
