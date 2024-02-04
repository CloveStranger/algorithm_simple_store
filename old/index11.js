const fn = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};
const inputs = [5];
const t = 50;

var timeLimit = function (fn, t) {
  return async function (...args) {
    return Promise.all([
      fn(...args),
      new Promise((_, reject) =>
        setTimeout(() => reject("Time Limit Exceeded"), t)
      ),
    ]);
  };
};

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(100).catch(console.log);
