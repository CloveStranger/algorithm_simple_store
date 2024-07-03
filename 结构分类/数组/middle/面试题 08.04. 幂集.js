// 幂集。编写一种方法，返回某集合的所有子集。集合中不包含重复的元素。

// 说明：解集不能包含重复的子集。

// 示例:

//  输入： nums = [1,2,3]
//  输出：
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [];
  const backtrack = (index, list) => {
    res.push([...list]);
    for (let i = index; i < nums.length; i++) {
      list.push(nums[i]);
      backtrack(i + 1, list);
      list.pop();
    }
  };
  backtrack(0, []);
  return res;
};

nums = [1, 2, 3];

console.log(subsets(nums));
