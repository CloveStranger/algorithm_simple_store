// 给你一个有 n 个结点的二叉树的根结点 root ，其中树中每个结点 node 都对应有 node.val 枚硬币。整棵树上一共有 n 枚硬币。

// 在一次移动中，我们可以选择两个相邻的结点，然后将一枚硬币从其中一个结点移动到另一个结点。移动可以是从父结点到子结点，或者从子结点移动到父结点。

// 返回使每个结点上 只有 一枚硬币所需的 最少 移动次数。

// 示例 1：

// 输入：root = [3,0,0]
// 输出：2
// 解释：一枚硬币从根结点移动到左子结点，一枚硬币从根结点移动到右子结点。
// 示例 2：

// 输入：root = [0,3,0]
// 输出：3
// 解释：将两枚硬币从根结点的左子结点移动到根结点（两次移动）。然后，将一枚硬币从根结点移动到右子结点。

// 提示：

// 树中节点的数目为 n
// 1 <= n <= 100
// 0 <= Node.val <= n
// 所有 Node.val 的值之和是 n

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
var distributeCoins = function (root) {
  const dfs = (node) => {
    if (!node) return 0;
    const lCount = dfs(node.left);
    const rCount = dfs(node.right);
    return node.val + lCount + rCount;
  };

  return dfs(root);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

root = new TreeNode(3, new TreeNode(0), new TreeNode(0));
// root = new TreeNode(0, new TreeNode(3), new TreeNode(0));

console.log(distributeCoins(root));

/**
 *    0
 *  0   0
 * 7 0 0 0  6+1+4+3+2
 *
 *    7
 *  0   0
 * 0 0 0 0  6 + 4
 */
