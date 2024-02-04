// 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。

// 你可以对一个单词进行如下三种操作：

// 插入一个字符
// 删除一个字符
// 替换一个字符

// 示例 1：

// 输入：word1 = "horse", word2 = "ros"
// 输出：3
// 解释：
// horse -> rorse (将 'h' 替换为 'r')
// rorse -> rose (删除 'r')
// rose -> ros (删除 'e')
// 示例 2：

// 输入：word1 = "intention", word2 = "execution"
// 输出：5
// 解释：
// intention -> inention (删除 't')
// inention -> enention (将 'i' 替换为 'e')
// enention -> exention (将 'n' 替换为 'x')
// exention -> exection (将 'n' 替换为 'c')
// exection -> execution (插入 'u')

// 提示：

// 0 <= word1.length, word2.length <= 500
// word1 和 word2 由小写英文字母组成
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let m = word1.length,
    n = word2.length;

  let minCount = m - n;

  return m + n - 2 * minCount[m][n];
};
word1 = "intention";
word2 = "execution";

word1 = "horse";
word2 = "ros";
console.log(minDistance(word1, word2));
/*
1、定义状态
在word1某个位置进行增删改三个操作中的一个得到一个新串
2、状态转移方程
word[i]=word[i-1]某个操作
3、初始化 i = 0 不用考虑
4、递推
5、解决原问题 
6、优化复杂度
*/
