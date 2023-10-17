// var createCounter = function (init) {
//   let store = init;
//   const increment = () => {
//     return ++init;
//   };
//   const decrement = () => {
//     return --init;
//   };
//   const reset = () => {
//     init = store;
//     return init;
//   };
//   return {
//     increment,
//     decrement,
//     reset,
//   };
// };

var createCounter = function (init) {
  return {
    initVal: init,
    increment: function increment() {
      return ++init;
    },
    decrement: function increment() {
      return --init;
    },
    reset: function increment() {
      return (init = this.initVal);
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
