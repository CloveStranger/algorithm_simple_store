// 给你一个正整数 n。

// 如果一个二进制字符串 x 的所有长度为 2 的
// 子字符串
// 中包含 至少 一个 "1"，则称 x 是一个 有效 字符串。

// 返回所有长度为 n 的 有效 字符串，可以以任意顺序排列。

// 示例 1：

// 输入： n = 3

// 输出： ["010","011","101","110","111"]

// 解释：

// 长度为 3 的有效字符串有："010"、"011"、"101"、"110" 和 "111"。

// 示例 2：

// 输入： n = 1

// 输出： ["0","1"]

// 解释：

// 长度为 1 的有效字符串有："0" 和 "1"。

// 提示：

// 1 <= n <= 18

/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function (n) {
  let res = [];
  function dfs(strArr) {
    if (
      strArr.length &&
      strArr[strArr.length - 1] === "0" &&
      strArr[strArr.length - 2] === "0"
    )
      return;
    if (strArr.length === n) {
      res.push(strArr.join(""));
      return;
    }
    dfs([...strArr, "0"]);
    dfs([...strArr, "1"]);
  }
  dfs([]);
  return res;
};

var validStrings = function (n) {
  const ans = [];
  const path = Array(n);

  function dfs(i) {
    if (i === n) {
      ans.push(path.join("")); // 注意 join 需要 O(n) 时间
      return;
    }

    // 填 1
    path[i] = "1";
    dfs(i + 1);

    // 填 0
    if (i === 0 || path[i - 1] === "1") {
      path[i] = "0"; // 直接覆盖
      dfs(i + 1);
    }
  }

  dfs(0);
  return ans;
};

var validStrings = function (n) {
  const ans = [];
  const mask = (1 << n) - 1;
  for (let x = 0; x < 1 << n; x++) {
    if (((x >> 1) & x) === 0) {
      ans.push(_.padStart((x ^ mask).toString(2), n, "0"));
    }
  }
  return ans;
};
