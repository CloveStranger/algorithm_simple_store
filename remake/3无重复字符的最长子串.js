// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   if (s.length < 2) {
//     return s.length;
//   }

//   let i = 0;
//   let j = 1;

//   const strMap = new Set();

//   for (j; j < s.length; j++) {
//     const item = s[j];
//     console.log(item);
//     const sliceStr = s.slice(i, j);

//     if (sliceStr.includes(item)) {
//       strMap.add(sliceStr);
//       i = i + 1;
//       j = i + 1;
//     }
//   }

//   const sliceStr = s.slice(i, j);
//   strMap.add(sliceStr);

//   console.log(strMap);

//   let output = 0;

//   strMap.forEach((item) => {
//     if (item.length > output) {
//       output = item.length;
//     }
//   });

//   console.log(output);

//   return output;
// };

//官方
var lengthOfLongestSubstring = function (s) {
  // 哈希集合，记录每个字符是否出现过
  const occ = new Set();
  const n = s.length;
  // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let rk = -1,
    ans = 0;
  for (let i = 0; i < n; ++i) {
    console.log(occ);
    if (i != 0) {
      // 左指针向右移动一格，移除一个字符
      occ.delete(s.charAt(i - 1));
    }
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      // 不断地移动右指针
      occ.add(s.charAt(rk + 1));
      ++rk;
    }
    // 第 i 到 rk 个字符是一个极长的无重复字符子串
    ans = Math.max(ans, rk - i + 1);
  }

  console.log(ans);
  return ans;
};

const s = "abcabcbb";
const s1 = "bbbbb";
const s2 = "pwwkew";
const s3 = "";
const s4 = " ";
const s5 = "dvdf";

lengthOfLongestSubstring(s);

//思路剖析，个人理解
//每个字符遍历，通过while循环找到最大子串
//通过Math.max函数对比最大值
//Set主要负责字符串存储，因为哈希集合的特性是唯一值
