// const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
// const x = 4;

// const functions = [x => 10 * x, x => 10 * x, x => 10 * x];
// const x = 1;
const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
const x = 4;

var compose = function (functions) {
  return function (x) {
    let funcLen = functions.length - 1;
    let output = x;
    if (funcLen === -1) {
      return output;
    }

    for (funcLen; funcLen >= 0; funcLen--) {
      output = functions[funcLen](output);
    }

    return output;
  };
};

const fn = compose(functions);

console.log(fn(x));
