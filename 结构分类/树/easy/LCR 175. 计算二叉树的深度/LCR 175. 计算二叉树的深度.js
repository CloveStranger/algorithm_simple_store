// 某公司架构以二叉树形式记录，请返回该公司的层级数。

// 示例 1：

// 输入：root = [1, 2, 2, 3, null, null, 5, 4, null, null, 4]
// 输出: 4
// 解释: 上面示例中的二叉树的最大深度是 4，沿着路径 1 -> 2 -> 3 -> 4 或 1 -> 2 -> 5 -> 4 到达叶节点的最长路径上有 4 个节点。

// 提示：

// 节点总数 <= 10000
// 注意：本题与主站 104 题相同：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/

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
var calculateDepth = function (root) {
  let output = 0;
  const dfs = (node, depth) => {
    if (!node) {
      return;
    }
    output = Math.max(output, depth++);
    dfs(node.left, depth);
    dfs(node.right, depth);
  };
  dfs(root, 1);
  return output;
};

var calculateDepth = function (root) {
  if (root === null) return 0;
  return Math.max(calculateDepth(root.left), calculateDepth(root.right)) + 1;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(1);

console.log(calculateDepth(root));
