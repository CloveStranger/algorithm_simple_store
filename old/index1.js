const s = "()";

var isValid = function (s) {
  if (s.length % 2 != 0) {
    return false;
  }

  const left = [
    {
      key: "(",
      value: 0,
    },
    {
      key: "[",
      value: 0,
    },
    {
      key: "{",
      value: 0,
    },
  ];

  const rightKey = [")", "]", "}"];

  if (rightKey.includes(s[0])) {
    return false;
  }

  let curKey = [];

  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (item === "(") {
      left[0].value++;
      curKey.push(item);
    }
    if (item === "[") {
      left[1].value++;
      curKey.push(item);
    }
    if (item === "{") {
      left[2].value++;
      curKey.push(item);
    }
    if (item === ")") {
      if (curKey[curKey.length - 1] !== "(") {
        return false;
      }
      left[0].value--;
      console.log(curKey);
      curKey.pop();
      console.log(curKey);
      if (left[0].value < 0) {
        return false;
      }
    }
    if (item === "]") {
      if (curKey[curKey.length - 1] !== "[") {
        return false;
      }
      left[1].value--;
      curKey.pop();
      if (left[1].value < 0) {
        return false;
      }
    }
    if (item === "}") {
      if (curKey[curKey.length - 1] !== "{") {
        return false;
      }
      left[2].value--;
      curKey.pop();
      if (left[2].value < 0) {
        return false;
      }
    }
  }

  console.log(curKey);
  if (curKey.length) {
    return false;
  }

  if (left.includes((x) => x.value % 2 !== 0)) {
    return false;
  }
  return true;
};

console.log(isValid(s));
