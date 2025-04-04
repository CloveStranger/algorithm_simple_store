// 给你一个正整数数组 price ，其中 price[i] 表示第 i 类糖果的价格，另给你一个正整数 k 。

// 商店组合 k 类 不同 糖果打包成礼盒出售。礼盒的 甜蜜度 是礼盒中任意两种糖果 价格 绝对差的最小值。

// 返回礼盒的 最大 甜蜜度。

// 示例 1：

// 输入：price = [13,5,1,8,21,2], k = 3
// 输出：8
// 解释：选出价格分别为 [13,5,21] 的三类糖果。
// 礼盒的甜蜜度为 min(|13 - 5|, |13 - 21|, |5 - 21|) = min(8, 8, 16) = 8 。
// 可以证明能够取得的最大甜蜜度就是 8 。
// 示例 2：

// 输入：price = [1,3,1], k = 2
// 输出：2
// 解释：选出价格分别为 [1,3] 的两类糖果。
// 礼盒的甜蜜度为 min(|1 - 3|) = min(2) = 2 。
// 可以证明能够取得的最大甜蜜度就是 2 。
// 示例 3：

// 输入：price = [7,7,7,7], k = 2
// 输出：0
// 解释：从现有的糖果中任选两类糖果，甜蜜度都会是 0 。

// 提示：

// 2 <= k <= price.length <= 105
// 1 <= price[i] <= 109

/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
// var maximumTastiness = function (price, k) {
//   let output = 0;

//   const greedy = (arr, index) => {
//     if (arr.length === k) {
//       let min = Infinity;
//       const sweetList = [];
//       for (let i = 0; i < k - 1; i++) {
//         for (let j = i + 1; j < k; j++) {
//           min = Math.min(min, Math.abs(arr[i] - arr[j]));
//           sweetList.push(Math.abs(arr[i] - arr[j]));
//         }
//       }
//       output = Math.max(output, min);
//       return;
//     }
//     arr.push(price[index]);
//     for (let i = index; i < price.length; i++) {
//       greedy([...arr], i + 1);
//       arr.pop();
//     }
//   };

//   greedy([], 0);

//   return output;
// };

var maximumTastiness = function (price, k) {
  price.sort((a, b) => a - b);
  console.log(price);
};

price = [13, 5, 1, 8, 21, 2];
k = 3;

// price = [144, 69, 103, 148, 184, 50, 129, 154, 2];
// k = 4;

console.log(maximumTastiness(price, k));
