// 给你一棵二叉树的根节点 root ，请你返回 层数最深的叶子节点的和 。

// 示例 1：

// 输入：root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// 输出：15
// 示例 2：

// 输入：root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// 输出：19

// 提示：

// 树中节点数目在范围 [1, 104] 之间。
// 1 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  let sum = 0;
  let maxDepth = 0;
  const dfs = (root, depth) => {
    if (root === null) return;
    if (depth === maxDepth) {
      sum += root.val;
    } else if (depth > maxDepth) {
      sum = root.val;
      maxDepth = depth;
    }
    dfs(root.left, depth + 1);
    dfs(root.right, depth + 1);
  };
  dfs(root, 0);
  return sum;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.left.left = new TreeNode(7);
root.right.right = new TreeNode(6);
root.right.right.right = new TreeNode(8);
console.log(deepestLeavesSum(root));
