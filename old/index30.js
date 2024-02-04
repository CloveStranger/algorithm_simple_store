// 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const aLen = a.length;
  const bLen = b.length;
  let stepSignal = false;
  let output = "";
  let maxLen = 0;
  if (aLen < bLen) {
    maxLen = bLen;
    for (let i = 0; i < bLen - aLen; i++) {
      a = "0" + a;
    }
  } else {
    maxLen = aLen;
    for (let i = 0; i < aLen - bLen; i++) {
      b = "0" + b;
    }
  }
  for (let i = maxLen - 1; i >= 0; i--) {
    const itemA = a[i];
    const itemB = b[i];

    if (itemA === itemB) {
      if (itemB === "1") {
        if (stepSignal) {
          output = "1" + output;
        } else {
          output = "0" + output;
        }
        if (i === 0) {
          output = "1" + output;
        }
        stepSignal = true;
      }
      if (itemB === "0") {
        if (stepSignal) {
          output = "1" + output;
          stepSignal = false;
        } else {
          output = "0" + output;
        }
      }
    }
    if (itemA !== itemB) {
      if (stepSignal) {
        output = "0" + output;
        if (i === 0) {
          output = "1" + output;
        }
      } else {
        output = "1" + output;
      }
    }
  }
  return output;
};

// var addBinary = function (a, b) {
//   let ans = "";
//   let ca = 0;
//   for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
//     let sum = ca;
//     sum += i >= 0 ? parseInt(a[i]) : 0;
//     sum += j >= 0 ? parseInt(b[j]) : 0;
//     ans += sum % 2;
//     ca = Math.floor(sum / 2);
//   }
//   ans += ca == 1 ? ca : "";
//   return ans.split("").reverse().join("");
// };

// a = "11";
// b = "1";

// a = "1010";
// b = "1011";

// a = "001";
// b = "111";

a = "1111";
b = "1111";

const res = addBinary(a, b);
console.log(res);
