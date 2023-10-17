/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
// var addTwoPromises = async function (promise1, promise2) {
//   const localX = await promise1;
//   const localY = await promise2;
//   return new Promise((res) => {
//     return res(localX + localY);
//   });
// };

// var addTwoPromises = async function (promise1, promise2) {
//   return (await promise1) + (await promise2);
// };

var addTwoPromises = async function (promise1, promise2) {
  const localX = await promise1;
  const localY = await promise2;
  return localX + localY;
};

const p1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const p2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

// addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4

addTwoPromises(p1, p2).then((x) => console.log(x)); // 4
