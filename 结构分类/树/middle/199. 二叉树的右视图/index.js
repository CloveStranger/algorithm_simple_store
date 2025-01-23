// 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

// 示例 1：

// 输入：root = [1,2,3,null,5,null,4]

// 输出：[1,3,4]

// 解释：

// 示例 2：

// 输入：root = [1,2,3,4,null,null,null,5]

// 输出：[1,3,4,5]

// 解释：

// 示例 3：

// 输入：root = [1,null,3]

// 输出：[1,3]

// 示例 4：

// 输入：root = []

// 输出：[]

// 提示:

// 二叉树的节点个数的范围是 [0,100]
// -100 <= Node.val <= 100

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
 * @return {number[]}
 */
/// 广度优先遍历、层序遍历
var rightSideView = function (root) {
  if (!root) return [];
  let quene = [root];
  let tempQuene = [];
  let output = [];
  while (quene.length) {
    for (let i = 0; i < quene.length; i++) {
      const node = quene[i];
      if (node.left) {
        tempQuene.push(node.left);
      }
      if (node.right) {
        tempQuene.push(node.right);
      }
    }
    output.push(quene[quene.length - 1].val);
    quene = tempQuene;
    tempQuene = [];
  }
  return output;
};

/// 深度优先遍历
var rightSideView = function (root) {
  let output = [];
  const dfs = (root, depth) => {
    if (!root) return;
    if (depth === output.length) {
      output.push(root.val);
    }
    dfs(root.right, depth + 1);
    dfs(root.left, depth + 1);
  };
  dfs(root, 0);
  return output;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3),
);
console.log(rightSideView(root));
