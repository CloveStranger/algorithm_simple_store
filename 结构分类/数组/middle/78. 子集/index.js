// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的
// 子集
// （幂集）。

// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// 示例 2：

// 输入：nums = [0]
// 输出：[[],[0]]

// 提示：

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// nums 中的所有元素 互不相同

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const output = [[]];

  const dfs = (index, path) => {
    output.push(path);
    for (let i = index; i < nums.length; i++) {
      dfs(i + 1, [...path, nums[i]]);
    }
  };

  for (let i = 0; i < nums.length; i++) {
    dfs(i + 1, [nums[i]]);
  }

  return output;
};

var subsets = function (nums) {
  const output = [];

  const dfs = (index, path) => {
    output.push(path);
    for (let i = index; i < nums.length; i++) {
      dfs(i + 1, [...path, nums[i]]);
    }
  };

  dfs(0, []);

  return output;
};

var subsets = function (nums) {
  const output = [];
  const path = [];

  const dfs = (index) => {
    output.push(path.slice());
    for (let i = index; i < nums.length; i++) {
      path.push(nums[i]);
      dfs(i + 1);
      path.pop();
    }
  };

  dfs(0);

  return output;
};

nums = [1, 2, 3];
console.log(subsets(nums));
