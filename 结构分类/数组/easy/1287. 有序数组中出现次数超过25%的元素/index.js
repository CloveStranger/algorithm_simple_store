// 给你一个非递减的 有序 整数数组，已知这个数组中恰好有一个整数，它的出现次数超过数组元素总数的 25%。

// 请你找到并返回这个整数

// 示例：

// 输入：arr = [1,2,2,6,6,6,6,7,10]
// 输出：6

// 提示：

// 1 <= arr.length <= 10^4
// 0 <= arr[i] <= 10^5

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  let n = Math.floor(arr.length / 4);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + n]) {
      return arr[i];
    }
  }
};

arr = [1, 2, 2, 6, 6, 6, 6, 7, 10];
console.log(findSpecialInteger(arr));
