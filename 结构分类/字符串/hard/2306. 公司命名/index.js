// 给你一个字符串数组 ideas 表示在公司命名过程中使用的名字列表。公司命名流程如下：

// 从 ideas 中选择 2 个 不同 名字，称为 ideaA 和 ideaB 。
// 交换 ideaA 和 ideaB 的首字母。
// 如果得到的两个新名字 都 不在 ideas 中，那么 ideaA ideaB（串联 ideaA 和 ideaB ，中间用一个空格分隔）是一个有效的公司名字。
// 否则，不是一个有效的名字。
// 返回 不同 且有效的公司名字的数目。

// 示例 1：

// 输入：ideas = ["coffee","donuts","time","toffee"]
// 输出：6
// 解释：下面列出一些有效的选择方案：
// - ("coffee", "donuts")：对应的公司名字是 "doffee conuts" 。
// - ("donuts", "coffee")：对应的公司名字是 "conuts doffee" 。
// - ("donuts", "time")：对应的公司名字是 "tonuts dime" 。
// - ("donuts", "toffee")：对应的公司名字是 "tonuts doffee" 。
// - ("time", "donuts")：对应的公司名字是 "dime tonuts" 。
// - ("toffee", "donuts")：对应的公司名字是 "doffee tonuts" 。
// 因此，总共有 6 个不同的公司名字。

// 下面列出一些无效的选择方案：
// - ("coffee", "time")：在原数组中存在交换后形成的名字 "toffee" 。
// - ("time", "toffee")：在原数组中存在交换后形成的两个名字。
// - ("coffee", "toffee")：在原数组中存在交换后形成的两个名字。
// 示例 2：

// 输入：ideas = ["lack","back"]
// 输出：0
// 解释：不存在有效的选择方案。因此，返回 0 。

// 提示：

// 2 <= ideas.length <= 5 * 104
// 1 <= ideas[i].length <= 10
// ideas[i] 由小写英文字母组成
// ideas 中的所有字符串 互不相同

/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function (ideas) {
  const nameSet = new Set(ideas);
  let output = 0;

  const backTrack = (tempArr) => {
    if (tempArr.length == 2) {
      if (tempArr[0] !== tempArr[1]) {
        let aChar = tempArr[0];
        let bChar = tempArr[1];
        const aCharStore = tempArr[0][0];
        const bCharStore = tempArr[1][0];
        aChar = aChar.replace(aCharStore, bCharStore);
        bChar = bChar.replace(bCharStore, aCharStore);
        if (!nameSet.has(aChar) && !nameSet.has(bChar)) {
          output++;
        }
      }
      return;
    }
    for (let i = 0; i < ideas.length; i++) {
      backTrack([...tempArr, ideas[i]]);
    }
  };

  backTrack([]);

  return output;
};

ideas = ["coffee", "donuts", "time", "toffee"];

console.log(distinctNames(ideas));
