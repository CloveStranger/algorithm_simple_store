// 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

// 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

// 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let remain;

  for (let i = 1; i <= x / 2; i++) {
    console.log(x / i);
    if (x / i === i) {
      remain = x / i;
    }
  }
  if (remain) {
    return remain;
  }
  return 0;
};

// x = 1;
// x = 2;

// x = 144;

// x = 8;

x = 12;

x = 16;

// x = 10;

// x = 100;

const res = mySqrt(x);
console.log(res);

//[1,16] [2,8] [3,unKnown] [4,4]

//1,2,3,5,6,7,10,11
