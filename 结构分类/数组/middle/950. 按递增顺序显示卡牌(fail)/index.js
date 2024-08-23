// 牌组中的每张卡牌都对应有一个唯一的整数。你可以按你想要的顺序对这套卡片进行排序。

// 最初，这些卡牌在牌组里是正面朝下的（即，未显示状态）。

// 现在，重复执行以下步骤，直到显示所有卡牌为止：

// 从牌组顶部抽一张牌，显示它，然后将其从牌组中移出。
// 如果牌组中仍有牌，则将下一张处于牌组顶部的牌放在牌组的底部。
// 如果仍有未显示的牌，那么返回步骤 1。否则，停止行动。
// 返回能以递增顺序显示卡牌的牌组顺序。

// 答案中的第一张牌被认为处于牌堆顶部。

// 示例：

// 输入：[17,13,11,2,3,5,7] [17,13,11,7]
// 输出：[2,13,3,11,5,17,7]
// 解释：
// 我们得到的牌组顺序为 [17,13,11,2,3,5,7]（这个顺序不重要），然后将其重新排序。
// 重新排序后，牌组以 [2,13,3,11,5,17,7] 开始，其中 2 位于牌组的顶部。
// 我们显示 2，然后将 13 移到底部。牌组现在是 [3,11,5,17,7,13]。
// 我们显示 3，并将 11 移到底部。牌组现在是 [5,17,7,13,11]。
// 我们显示 5，然后将 17 移到底部。牌组现在是 [7,13,11,17]。
// 我们显示 7，并将 13 移到底部。牌组现在是 [11,17,13]。
// 我们显示 11，然后将 17 移到底部。牌组现在是 [13,17]。
// 我们展示 13，然后将 17 移到底部。牌组现在是 [17]。
// 我们显示 17。
// 由于所有卡片都是按递增顺序排列显示的，所以答案是正确的。

// 输入：[17,13,11,2,3,5,7,20]
// 输出：[2,11,3,17,5,13,7,20]
// 11 17 13 20
// 13 20 17
// 17 20
// 20
// 输入：[17,13,11,2,3,5,7,20,24]
// 输出：[2,20,3,13,5,24,7,17,11]
// [11,20,13,24,17]

// 提示：

// 1 <= A.length <= 1000
// 1 <= A[i] <= 10^6
// 对于所有的 i != j，A[i] != A[j]

/**
 * @param {number[]} deck
 * @return {number[]}
 */
// var deckRevealedIncreasing = function (deck) {
//   const arr = Array.from({ length: deck.length }).fill(0);
//   deck.sort((a, b) => a - b);
//   if (deck.length <= 2) {
//     return deck;
//   }
//   let lastIsBigger = deck.length % 2 === 0;
//   const arr1 = deck.splice(0, Math.ceil(deck.length / 2));
//   const arr2 = deck.splice(
//     0,
//     lastIsBigger ? Math.ceil(deck.length / 2) : Math.floor(deck.length / 2)
//   );
//   const arr3 = deck;
//   console.log(arr2, arr3);
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//       arr[i] = arr1[i / 2];
//       if (i < arr.length - 1) {
//         if (!lastIsBigger) {
//           arr[i + 1] = arr3.shift();
//         } else {
//           arr[i + 1] = arr2.shift();
//         }
//         lastIsBigger = !lastIsBigger;
//       }
//     }
//   }
//   return arr;
// };

/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  const len = deck.length;
  const arr = [];

  for (let i = 0; i < len; i++) {
    arr.push(i);
  }

  const ans = Array.from(arr);

  deck.sort((a, b) => a - b);

  for (let i = 0; i < deck.length; i++) {
    ans[arr.shift()] = deck[i];
    if (arr.length) {
      arr.push(arr.shift());
    }
  }

  return ans;
};

deck = [17, 13, 11, 2, 3, 5, 7];
deck = [17, 13, 11, 2, 3, 5, 7, 20, 24];
deck = [17, 13, 11, 2, 3, 5, 7, 15];
deck = [17, 13, 11, 2, 3, 5, 7];
// deck = [1, 2, 3, 4, 5, 6];
///[1,4,2,6,3,5]
/// 2 6 3 5 4
/// 3 5 4 6
/// 4 6 5

console.log(deckRevealedIncreasing(deck));
