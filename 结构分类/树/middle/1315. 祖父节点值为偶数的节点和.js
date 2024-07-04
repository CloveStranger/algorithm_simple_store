// 给你一棵二叉树，请你返回满足以下条件的所有节点的值之和：

// 该节点的祖父节点的值为偶数。（一个节点的祖父节点是指该节点的父节点的父节点。）
// 如果不存在祖父节点值为偶数的节点，那么返回 0 。

// 示例：

// 输入：root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// 输出：18
// 解释：图中红色节点的祖父节点的值为偶数，蓝色节点为这些红色节点的祖父节点。

// 提示：

// 树中节点的数目在 1 到 10^4 之间。
// 每个节点的值在 1 到 100 之间

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
var sumEvenGrandparent = function (root) {
  let ans = 0;
  const dfs = (node) => {
    if (!node) return;
    if (node.val % 2 === 0) {
      if (node.left) {
        if (node.left.left) ans += node.left.left.val;
        if (node.left.right) ans += node.left.right.val;
      }
      if (node.right) {
        if (node.right.left) ans += node.right.left.val;
        if (node.right.right) ans += node.right.right.val;
      }
    }
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return ans;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(6);
root.left = new TreeNode(7);
root.right = new TreeNode(8);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(7);
root.right.left = new TreeNode(1);
root.right.right = new TreeNode(3);
root.left.right.left = new TreeNode(9);
root.right.right.left = new TreeNode(1);
root.right.right.right = new TreeNode(4);
root.right.right.right.left = new TreeNode(5);
root.right.right.right.right = new TreeNode(5);

console.log(sumEvenGrandparent(root));
