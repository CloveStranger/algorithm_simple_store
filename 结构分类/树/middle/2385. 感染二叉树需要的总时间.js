// 给你一棵二叉树的根节点 root ，二叉树中节点的值 互不相同 。另给你一个整数 start 。在第 0 分钟，感染 将会从值为 start 的节点开始爆发。

// 每分钟，如果节点满足以下全部条件，就会被感染：

// 节点此前还没有感染。
// 节点与一个已感染节点相邻。
// 返回感染整棵树需要的分钟数。

// 示例 1：

// 输入：root = [1,5,3,null,4,10,6,9,2], start = 3
// 输出：4
// 解释：节点按以下过程被感染：
// - 第 0 分钟：节点 3
// - 第 1 分钟：节点 1、10、6
// - 第 2 分钟：节点5
// - 第 3 分钟：节点 4
// - 第 4 分钟：节点 9 和 2
// 感染整棵树需要 4 分钟，所以返回 4 。
// 示例 2：

// 输入：root = [1], start = 1
// 输出：0
// 解释：第 0 分钟，树中唯一一个节点处于感染状态，返回 0 。

// 提示：

// 树中节点的数目在范围 [1, 105] 内
// 1 <= Node.val <= 105
// 每个节点的值 互不相同
// 树中必定存在值为 start 的节点
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
 * @param {number} start
 * @return {number}
 */

var amountOfTime = function (root, start) {
  let output = 0;
  const dp = (node, virus) => {
    let hasVirus = virus || false;
    if (node.val === start) {
      hasVirus = true;
    }
    if (hasVirus) {
      console.log(node);
    }
    if (node.left) {
      hasVirus = dp(node.left, hasVirus);
    }
    if (node.right) {
      hasVirus = dp(node.right, hasVirus);
    }
    hasVirus && output++;
    return virus;
  };
  dp(root, false);
  return output;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const rootNode = new TreeNode(1, null, null);
rootNode.left = new TreeNode(5, null, null);
rootNode.left.right = new TreeNode(4, null, null);
rootNode.left.right.left = new TreeNode(9, null, null);
rootNode.left.right.right = new TreeNode(2, null, null);
rootNode.right = new TreeNode(3, null, null);
rootNode.right.left = new TreeNode(10, null, null);
rootNode.right.right = new TreeNode(6, null, null);

console.log(amountOfTime(rootNode, 3));
