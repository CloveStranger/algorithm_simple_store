// 给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数，citations 已经按照 升序排列 。计算并返回该研究者的 h 指数。

// h 指数的定义：h 代表“高引用次数”（high citations），一名科研人员的 h 指数是指他（她）的 （n 篇论文中）至少 有 h 篇论文分别被引用了至少 h 次。

// 请你设计并实现对数时间复杂度的算法解决此问题。

// 示例 1：

// 输入：citations = [0,1,3,5,6]
// 输出：3
// 解释：给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 0, 1, 3, 5, 6 次。
//      由于研究者有3篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3 。
// 示例 2：

// 输入：citations = [1,2,100]
// 输出：2

// 提示：

// n == citations.length
// 1 <= n <= 105
// 0 <= citations[i] <= 1000
// citations 按 升序排列

/**
 * @param {number[]} citations
 * @return {number}
 */

var hIndex = function (citations) {
  let output = citations[0];
  for (let i = 0; i < citations.length; i++) {
    const remain = citations.length - i;
    const current = citations[i];

    if (current >= remain) {
      output = remain;
      break;
    }
  }
  return output;
};

var hIndex = function (citations) {
  let output = citations[0];
  let left = -1;
  let right = citations.length;

  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2);
    const midVal = citations[mid];
    if (midVal >= right - mid) {
      output = right - mid;
      break;
    } else {
      left = mid;
    }
  }

  return output;
};

var hIndex = function (citations) {
  const n = citations.length;
  let left = 0;
  let right = n + 1;
  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2);
    if (citations[n - mid] >= mid) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return left;
};

var hIndex = function (citations) {
  const n = citations.length;
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (citations[n - mid] >= mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};

citations = [0, 1, 3, 5, 6];
citations = [100];
citations = [0, 1];
citations = [1, 1, 2, 3, 4, 5, 7];
console.log(hIndex(citations));
