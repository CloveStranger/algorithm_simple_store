Array.prototype.last = function () {
  if (!this.length) {
    return -1;
  }

  return this[this.length - 1];
};

const nums = [1, 2];
console.log(nums.last());
