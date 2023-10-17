var fibGenerator = function* () {
  let pre = arguments[0] || 0;
  let cur = arguments[1] || 1;
  yield pre;
  return yield* fibGenerator(cur, pre + cur);
};

const gen = fibGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
