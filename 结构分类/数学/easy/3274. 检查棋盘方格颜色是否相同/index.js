// 给你两个字符串 coordinate1 和 coordinate2，代表 8 x 8 国际象棋棋盘上的两个方格的坐标。

// 以下是棋盘的参考图。

// 如果这两个方格颜色相同，返回 true，否则返回 false。

// 坐标总是表示有效的棋盘方格。坐标的格式总是先字母（表示列），再数字（表示行）。

// 示例 1：

// 输入： coordinate1 = "a1", coordinate2 = "c3"

// 输出： true

// 解释：

// 两个方格均为黑色。

// 示例 2：

// 输入： coordinate1 = "a1", coordinate2 = "h3"

// 输出： false

// 解释：

// 方格 "a1" 是黑色，而 "h3" 是白色。

// 提示：

// coordinate1.length == coordinate2.length == 2
// 'a' <= coordinate1[0], coordinate2[0] <= 'h'
// '1' <= coordinate1[1], coordinate2[1] <= '8'

/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function (coordinate1, coordinate2) {
  const x1 = coordinate1.charCodeAt(0);
  const y1 = coordinate1.charCodeAt(1);

  const x2 = coordinate2.charCodeAt(0);
  const y2 = coordinate2.charCodeAt(1);

  const w1 = (x1 % 2 === 0 && y1 % 2 === 1) || (x1 % 2 === 1 && y1 % 2 === 0);
  const w2 = (x2 % 2 === 0 && y2 % 2 === 1) || (x2 % 2 === 1 && y2 % 2 === 0);

  return w1 === w2;
};

var checkTwoChessboards = function (coordinate1, coordinate2) {
  const a = (coordinate1.charCodeAt(0) + coordinate1.charCodeAt(1)) % 2;

  const b = (coordinate2.charCodeAt(0) + coordinate2.charCodeAt(1)) % 2;

  return a === b;
};

coordinate1 = "a1";
coordinate2 = "c3";

coordinate1 = "a1";
coordinate2 = "h3";

coordinate1 = "d1";
coordinate2 = "h4";

console.log(checkTwoChessboards(coordinate1, coordinate2));
