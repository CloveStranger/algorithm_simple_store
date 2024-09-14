// 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 小的元素（从 1 开始计数）。

// 示例 1：

// 输入：root = [3,1,4,null,2], k = 1
// 输出：1
// 示例 2：

// 输入：root = [5,3,6,2,4,null,null,1], k = 3
// 输出：3

// 提示：

// 树中的节点数为 n 。
// 1 <= k <= n <= 104
// 0 <= Node.val <= 104

// 进阶：如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化算法？

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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const arr = [];
  const dfs = (node) => {
    if (!node) return;
    arr.push(node.val);
    dfs(node.right);
    dfs(node.left);
  };
  dfs(root);
  return arr.sort((a, b) => a - b)[k - 1];
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.right = new TreeNode(3);

console.log(kthSmallest(root, 1));
