var chunk = function (arr, size) {
  const arrLen = arr.length;
  if (arrLen === 0) {
    return [];
  }
  const output = [];
  let circleTime = 1;
  while (circleTime * size <= arrLen + size) {
    const info = arr.slice(size * (circleTime - 1), circleTime * size);
    if (info.length) {
      output.push(info);
    }
    circleTime++;
  }
  return output;
};

const arr = [8, 5, 3, 2, 6];
const size = 2;
console.log(chunk(arr, size));
