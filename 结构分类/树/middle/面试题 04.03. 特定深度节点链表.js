// 给定一棵二叉树，设计一个算法，创建含有某一深度上所有节点的链表（比如，若一棵树的深度为 D，则会创建出 D 个链表）。返回一个包含所有深度的链表的数组。

// 示例：

// 输入：[1,2,3,4,5,null,7,8]

//         1
//        /  \
//       2    3
//      / \    \
//     4   5    7
//    /
//   8

// 输出：[[1],[2,3],[4,5,7],[8]]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function (tree) {
  const res = [];
  const bfs = (node) => {
    const queue = [node];
    let temp = new ListNode(node.val);
    while (queue.length) {
      const popNode = queue.shift();
      if (popNode.left) queue.push(popNode.left);
      if (popNode.right) queue.push(popNode.right);
    }
  };
  bfs(tree);
  return res;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(7);
root.left.left.left = new TreeNode(8);
console.log(listOfDepth(root));
