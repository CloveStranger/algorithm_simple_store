// 请设计一个机械累加器，计算从 1、2... 一直累加到目标数值 target 的总和。注意这是一个只能进行加法操作的程序，不具备乘除、if-else、switch-case、for 循环、while 循环，及条件判断语句等高级功能。

// 示例 1：

// 输入: target = 5
// 输出: 15
// 示例 2：

// 输入: target = 7
// 输出: 28

// 提示：

// 1 <= target <= 10000

/**
 * @param {number} target
 * @return {number}
 */
var mechanicalAccumulator = function (target) {
  let sum = 0;

  for (let i = 1; i <= target; i++) {
    sum += i;
  }

  return sum;
};

var mechanicalAccumulator = function (target) {
  target && (target += mechanicalAccumulator(target - 1));
  return target;
};

target = 5;
console.log(mechanicalAccumulator(target));
