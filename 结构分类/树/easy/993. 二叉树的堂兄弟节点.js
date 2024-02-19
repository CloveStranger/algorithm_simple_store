// 在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。

// 如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。

// 我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。

// 只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。

// 示例 1：

// 输入：root = [1,2,3,4], x = 4, y = 3
// 输出：false
// 示例 2：

// 输入：root = [1,2,3,null,4,null,5], x = 5, y = 4
// 输出：true
// 示例 3：

// 输入：root = [1,2,3,null,4], x = 2, y = 3
// 输出：false

// 提示：

// 二叉树的节点数介于 2 到 100 之间。
// 每个节点的值都是唯一的、范围为 1 到 100 的整数。
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  console.log(root, x, y);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// 示例测试
let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
console.log(isCousins(root1, 4, 3)); // Output: false

// let root2 = new TreeNode(1);
// root2.left = new TreeNode(2);
// root2.right = new TreeNode(3);
// root2.left.right = new TreeNode(4);
// root2.right.right = new TreeNode(5);
// console.log(isCousins(root2, 5, 4)); // Output: true

// let root3 = new TreeNode(1);
// root3.left = new TreeNode(2);
// root3.right = new TreeNode(3);
// root3.left.right = new TreeNode(4);
// console.log(isCousins(root3, 2, 3)); // Output: false
