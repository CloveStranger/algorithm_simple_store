// 给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
// 每条从根节点到叶节点的路径都代表一个数字：

// 例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
// 计算从根节点到叶节点生成的 所有数字之和 。

// 叶节点 是指没有子节点的节点。

// 示例 1：

// 输入：root = [1,2,3]
// 输出：25
// 解释：
// 从根到叶子节点路径 1->2 代表数字 12
// 从根到叶子节点路径 1->3 代表数字 13
// 因此，数字总和 = 12 + 13 = 25
// 1
//2 3
// 示例 2：

// 输入：root = [4,9,0,5,1]
// 输出：1026
// 解释：
// 从根到叶子节点路径 4->9->5 代表数字 495
// 从根到叶子节点路径 4->9->1 代表数字 491
// 从根到叶子节点路径 4->0 代表数字 40
// 因此，数字总和 = 495 + 491 + 40 = 1026

// 提示：

// 树中节点的数目在范围 [1, 1000] 内
// 0 <= Node.val <= 9
// 树的深度不超过 10

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
var sumNumbers = function (root) {
  let output = 0;
  const dfs = (node, val) => {
    if (!node) return;
    if (!node.left && !node.right) {
      output += val * 10 + node.val;
      return;
    }
    dfs(node.left, val * 10 + node.val);
    dfs(node.right, val * 10 + node.val);
  };
  dfs(root, output);
  return output;
};

var sumNumbers = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return root.val;
  const left = sumNumbers(root.left);
  const right = sumNumbers(root.right);
  const lCount = left.toString().length;
  const rCount = right.toString().length;
  console.log(left, right);
  return root.val * 10 ** lCount + left + root.val * 10 ** rCount + right;
};
var sumNumbers = function (root, x = 0) {
  if (root === null) {
    return 0;
  }
  x = x * 10 + root.val;
  if (root.left === root.right) {
    return x;
  }
  return sumNumbers(root.left, x) + sumNumbers(root.right, x);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
root = new TreeNode(
  4,
  new TreeNode(9, new TreeNode(5), new TreeNode(1)),
  new TreeNode(0),
);

console.log(sumNumbers(root));
