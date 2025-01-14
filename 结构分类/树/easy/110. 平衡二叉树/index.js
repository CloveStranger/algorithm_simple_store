// 给定一个二叉树，判断它是否是
// 平衡二叉树

// 示例 1：

// 输入：root = [3,9,20,null,null,15,7]
// 输出：true
// 示例 2：

// 输入：root = [1,2,2,3,3,null,null,4,4]
// 输出：false
// 示例 3：

// 输入：root = []
// 输出：true

// 提示：

// 树中的节点数在范围 [0, 5000] 内
// -104 <= Node.val <= 104

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
 * @return {boolean}
 */
var isBalanced = function (root) {
  const dfs = (node) => {
    if (!root) {
      return 0;
    }
    const left = isBalanced(root.left);
    const right = isBalanced(root.right);
    console.log(left, right);
    return Math.max(left, right) + 1;
  };
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);

console.log(isBalanced(root));
