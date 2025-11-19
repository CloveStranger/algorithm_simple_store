// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

// 例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]

// 示例 1：

// 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// 输出：3
// 解释：节点 5 和节点 1 的最近公共祖先是节点 3。
// 示例 2：

// 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// 输出：5
// 解释：节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。

// 说明：

// 所有节点的值都是唯一的。
// p、q 为不同节点且均存在于给定的二叉树中。
// 注意：本题与主站 236 题相同：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNodeItem {
  val: number;
  left: TreeNodeItem | null;
  right: TreeNodeItem | null;
  constructor(
    val?: number,
    left?: TreeNodeItem | null,
    right?: TreeNodeItem | null,
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
// function lowestCommonAncestor(
//   root: TreeNodeItem | null,
//   p: TreeNodeItem | null,
//   q: TreeNodeItem | null,
// ): TreeNodeItem | null {
//   if (!root || root === p || root === q) return root;
//   const left = lowestCommonAncestor(root.left, p, q);
//   const right = lowestCommonAncestor(root.right, p, q);
//   if (left === right) {
//     return root;
//   }
//   return null;
// }
function lowestCommonAncestor(
  root: TreeNodeItem | null,
  p: TreeNodeItem | null,
  q: TreeNodeItem | null,
): TreeNodeItem | null {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root; // 如果左右都找到，当前 root 就是 LCA
  return left || right; // 否则返回非空的那一侧
}

let root = new TreeNodeItem(
  3,
  new TreeNodeItem(
    5,
    new TreeNodeItem(6),
    new TreeNodeItem(2, new TreeNodeItem(7), new TreeNodeItem(4)),
  ),
  new TreeNodeItem(1, new TreeNodeItem(0), new TreeNodeItem(8)),
);

let p = new TreeNodeItem(5);

let q = new TreeNodeItem(1);

console.log(lowestCommonAncestor(root, p, q));
