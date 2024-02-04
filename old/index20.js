/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  const timeout = setTimeout(() => fn(...args), t);
  return () => clearTimeout(timeout);
};

const fn = (x) => x * 5;
const args = [2];
const t = 20;
const cancelT = 50;

const cancel = cancellable(fn, args, t);

setTimeout(() => {
  cancel();
}, cancelT);
