// 给你一个有根节点 root 的二叉树，返回它 最深的叶节点的最近公共祖先 。

// 回想一下：

// 叶节点 是二叉树中没有子节点的节点
// 树的根节点的 深度 为 0，如果某一节点的深度为 d，那它的子节点的深度就是 d+1
// 如果我们假定 A 是一组节点 S 的 最近公共祖先，S 中的每个节点都在以 A 为根节点的子树中，且 A 的深度达到此条件下可能的最大值。

// 示例 1：

// 输入：root = [3,5,1,6,2,0,8,null,null,7,4]
// 输出：[2,7,4]
// 解释：我们返回值为 2 的节点，在图中用黄色标记。
// 在图中用蓝色标记的是树的最深的节点。
// 注意，节点 6、0 和 8 也是叶节点，但是它们的深度是 2 ，而节点 7 和 4 的深度是 3 。
// 示例 2：

// 输入：root = [1]
// 输出：[1]
// 解释：根节点是树中最深的节点，它是它本身的最近公共祖先。
// 示例 3：

// 输入：root = [0,1,3,null,2]
// 输出：[2]
// 解释：树中最深的叶节点是 2 ，最近公共祖先是它自己。

// 提示：

// 树中的节点数将在 [1, 1000] 的范围内。
// 0 <= Node.val <= 1000
// 每个节点的值都是 独一无二 的。

// 注意：本题与力扣 865 重复：https://leetcode-cn.com/problems/smallest-subtree-with-all-the-deepest-nodes/

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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function (root) {
  let maxLevel = 1;
  const dfs = (node, level) => {
    if (!node) {
      return level - 1;
    }
    const llevel = dfs(node.left, level + 1);
    const rlevel = dfs(node.right, level + 1);
    maxLevel = Math.max(maxLevel, level);
    return level;
  };
  dfs(root, 1);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

console.log(lcaDeepestLeaves(root));
