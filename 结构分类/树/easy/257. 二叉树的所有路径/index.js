// 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。

// 叶子节点 是指没有子节点的节点。

// 示例 1：

// 输入：root = [1,2,3,null,5]
// 输出：["1->2->5","1->3"]
// 示例 2：

// 输入：root = [1]
// 输出：["1"]

// 提示：

// 树中节点的数目在范围 [1, 100] 内
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const output = [];
  const dfs = (node, arr) => {
    if (!node.left && !node.right) {
      output.push([...arr, node.val].join("->"));
      return;
    }
    if (node.left) {
      dfs(node.left, [...arr, node.val]);
    }
    if (node.right) {
      dfs(node.right, [...arr, node.val]);
    }
  };

  dfs(root, []);

  return output;
};
var binaryTreePaths = function (root) {
  const output = [];
  const path = [];
  const backTracking = (node) => {
    if (!node) {
      return;
    }
    path.push(node.val);
    if (node.left === node.right) {
      output.push(path.join("->"));
    } else {
      backTracking(node.left);
      backTracking(node.right);
    }
    path.pop();
  };

  backTracking(root);

  return output;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var root = new TreeNode(
  1,
  new TreeNode(2, null, new TreeNode(5)),
  new TreeNode(3),
);

console.log(binaryTreePaths(root));
