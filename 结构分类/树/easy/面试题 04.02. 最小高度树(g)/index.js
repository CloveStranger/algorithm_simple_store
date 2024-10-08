// 给定一个有序整数数组，元素各不相同且按升序排列，编写一个算法，创建一棵高度最小的二叉搜索树。

// 示例:
// 给定有序数组: [-10,-3,0,5,9],

// 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

//           0
//          / \
//        -3   9
//        /   /
//      -10  5

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const node = new TreeNode(nums[0]);
  const minDepth = Math.ceil(nums.length / 2);
  console.log(minDepth);
  for (let i = 1; i < nums.length; i++) {
    const curNode = new TreeNode(nums[i]);
    if (nums[i] > nums[i - 1]) {
      curNode.left = node;
    }
  }
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

arr = [-10, -3, 0, 5, 9];

console.log(sortedArrayToBST(arr));
