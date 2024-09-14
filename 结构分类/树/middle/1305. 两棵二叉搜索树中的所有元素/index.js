// 给你 root1 和 root2 这两棵二叉搜索树。请你返回一个列表，其中包含 两棵树 中的所有整数并按 升序 排序。.

// 示例 1：

// 输入：root1 = [2,1,4], root2 = [1,0,3]
// 输出：[0,1,1,2,3,4]
// 示例 2：

// 输入：root1 = [1,null,8], root2 = [8,1]
// 输出：[1,1,8,8]

// 提示：

// 每棵树的节点数在 [0, 5000] 范围内
// -105 <= Node.val <= 105

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  const arr = [];

  const dfs = (node) => {
    if (!node) return;
    arr.push(node.val);
    dfs(node.left);
    dfs(node.right);
  };

  dfs(root1);
  dfs(root2);

  return arr.sort((a, b) => a - b);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
