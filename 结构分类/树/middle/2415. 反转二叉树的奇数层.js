// 给你一棵 完美 二叉树的根节点 root ，请你反转这棵树中每个 奇数 层的节点值。

// 例如，假设第 3 层的节点值是 [2,1,3,4,7,11,29,18] ，那么反转后它应该变成 [18,29,11,7,4,3,1,2] 。
// 反转后，返回树的根节点。

// 完美 二叉树需满足：二叉树的所有父节点都有两个子节点，且所有叶子节点都在同一层。

// 节点的 层数 等于该节点到根节点之间的边数。

// 示例 1：

// 输入：root = [2,3,5,8,13,21,34]
// 输出：[2,5,3,8,13,21,34]
// 解释：
// 这棵树只有一个奇数层。
// 在第 1 层的节点分别是 3、5 ，反转后为 5、3 。
// 示例 2：

// 输入：root = [7,13,11]
// 输出：[7,11,13]
// 解释：
// 在第 1 层的节点分别是 13、11 ，反转后为 11、13 。
// 示例 3：

// 输入：root = [0,1,2,0,0,0,0,1,1,1,1,2,2,2,2]
// 输出：[0,2,1,0,0,0,0,2,2,2,2,1,1,1,1]
// 解释：奇数层由非零值组成。
// 在第 1 层的节点分别是 1、2 ，反转后为 2、1 。
// 在第 3 层的节点分别是 1、1、1、1、2、2、2、2 ，反转后为 2、2、2、2、1、1、1、1 。

// 提示：

// 树中的节点数目在范围 [1, 214] 内
// 0 <= Node.val <= 105
// // root 是一棵 完美 二叉树

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
var reverseOddLevels = function (root) {
  const bfs = (node) => {
    const queue = [node];
    let level = 1;
    while (queue.length) {
      const len = queue.length;
      const arr = [];
      for (let i = 0; i < len; i++) {
        const cur = queue.shift();
        if (cur.left) {
          queue.push(cur.left);
          arr.push(cur.left.val);
        }
        if (cur.right) {
          queue.push(cur.right);
          arr.push(cur.right.val);
        }
      }
      if (level % 2 === 1) {
        for (let i = 0; i < arr.length; i++) {
          queue[i].val = arr[arr.length - 1 - i];
        }
      }
      level++;
    }
  };
  bfs(root);
  return root;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6), new TreeNode(7))
);
console.log(reverseOddLevels(root));
