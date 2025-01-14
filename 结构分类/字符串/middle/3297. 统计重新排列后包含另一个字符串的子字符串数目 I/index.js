// 给你两个字符串 word1 和 word2 。

// 如果一个字符串 x 重新排列后，word2 是重排字符串的
// 前缀
//  ，那么我们称字符串 x 是 合法的 。

// 请你返回 word1 中 合法
// 子字符串
//  的数目。

// 示例 1：

// 输入：word1 = "bcca", word2 = "abc"

// 输出：1

// 解释：

// 唯一合法的子字符串是 "bcca" ，可以重新排列得到 "abcc" ，"abc" 是它的前缀。

// 示例 2：

// 输入：word1 = "abcabc", word2 = "abc"

// 输出：10

// 解释：

// 除了长度为 1 和 2 的所有子字符串都是合法的。

// 示例 3：

// 输入：word1 = "abcabc", word2 = "aaabc"

// 输出：0

// 解释：

// 1 <= word1.length <= 105
// 1 <= word2.length <= 104
// word1 和 word2 都只包含小写英文字母。

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var validSubstringCount = function (word1, word2) {
  const word2Map = new Map();
  for (let i = 0; i < word2.length; i++) {
    const count = word2Map.get(word2[i]) || 0;
    word2Map.set(word2[i], count + 1);
  }
  let valid = 0;
  let window = word2.length;
  while (window < word1.length) {
    let left = 0;
    let right = window - 1;
    while (right < word1.length) {
      const tempMap = new Map();
      for (let i = left; i <= right; i++) {
        const count = tempMap.get(word1[i]) || 0;
        tempMap.set(word1[i], count + 1);
      }
      for (let [key, value] of word2Map) {
        if (tempMap.get(key) !== value) {
          break;
        }
      }
      left++;
      right++;
    }
    window++;
  }
  return valid;
};
var validSubstringCount = function (word1, word2) {
  const word2Map = new Map();

  // 构建 word2 的字符频率表
  for (let i = 0; i < word2.length; i++) {
    const count = word2Map.get(word2[i]) || 0;
    word2Map.set(word2[i], count + 1);
  }

  let valid = 0;
  let window = word2.length; // 从 word2 的长度开始
  while (window <= word1.length) {
    // 包含等于 word1.length 的情况
    let left = 0;
    let right = window - 1;

    // 初始化滑动窗口字符频率表
    const tempMap = new Map();
    for (let i = left; i <= right; i++) {
      const count = tempMap.get(word1[i]) || 0;
      tempMap.set(word1[i], count + 1);
    }

    while (right < word1.length) {
      // 判断当前窗口是否与 word2Map 匹配
      let isValid = true;
      for (let [key, value] of word2Map) {
        if (tempMap.get(key) !== value) {
          isValid = false;
          break;
        }
      }
      if (isValid) valid++; // 如果匹配，增加计数

      // 滑动窗口：移除左边字符，添加右边字符
      const leftChar = word1[left];
      const rightChar = word1[right + 1];
      if (tempMap.has(leftChar)) {
        tempMap.set(leftChar, tempMap.get(leftChar) - 1);
        if (tempMap.get(leftChar) === 0) tempMap.delete(leftChar);
      }
      if (rightChar) {
        tempMap.set(rightChar, (tempMap.get(rightChar) || 0) + 1);
      }

      left++;
      right++;
    }

    window++;
  }

  return valid;
};

var validSubstringCount = function (s, t) {
  if (s.length < t.length) {
    return 0;
  }

  const diff = Array(26).fill(0); // t 的字母出现次数与 s 的字母出现次数之差
  for (const c of t) {
    diff[c.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  // 统计窗口内有多少个字母的出现次数比 t 的少
  let less = 0;
  for (const d of diff) {
    if (d > 0) {
      less++;
    }
  }

  let ans = 0;
  let left = 0;

  for (const ch of s) {
    const c = ch.charCodeAt(0) - "a".charCodeAt(0);
    diff[c]--;

    if (diff[c] === 0) {
      // c 移入窗口后，窗口内 c 的出现次数和 t 的一样
      less--;
    }
    while (less === 0) {
      // 窗口符合要求
      const outChar = s[left++].charCodeAt(0) - "a".charCodeAt(0);
      if (diff[outChar] === 0) {
        // outChar 移出窗口之前，检查出现次数，
        // 如果窗口内 outChar 的出现次数和 t 的一样，
        // 那么 outChar 移出窗口后，窗口内 outChar 的出现次数比 t 的少
        less++;
      }
      diff[outChar]++;
    }
    ans += left;
  }
  return ans;
};

word1 = "abcabc";
word2 = "abc";

console.log(validSubstringCount(word1, word2));
