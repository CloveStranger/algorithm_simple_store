// 给定一棵二叉树的根节点 root，请左右翻转这棵二叉树，并返回其根节点。

// 示例 1：

// 输入：root = [5,7,9,8,3,2,4]
// 输出：[5,9,7,4,2,3,8]

// 提示：

// 树中节点数目范围在 [0, 100] 内
// -100 <= Node.val <= 100

// 注意：本题与主站 226 题相同：https://leetcode-cn.com/problems/invert-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  if (root === null) {
    return root;
  }
  const bfs = () => {
    const queue = [root];
    while (queue.length) {
      const node = queue.shift();
      const lNode = node.left;
      const rNode = node.right;
      node.left = rNode;
      node.right = lNode;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  };
  bfs();
  return root;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

root = new TreeNode(5);
root.left = new TreeNode(7);
root.right = new TreeNode(9);
root.left.left = new TreeNode(8);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(2);
root.right.right = new TreeNode(4);

root = new TreeNode(5);
root.right = new TreeNode(7);

root = new TreeNode(1);
root.left = new TreeNode(2);

console.log(mirrorTree(root));
