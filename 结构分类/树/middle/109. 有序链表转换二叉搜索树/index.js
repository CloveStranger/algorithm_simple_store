// 给定一个单链表的头节点  head ，其中的元素 按升序排序 ，将其转换为
// 平衡
//  二叉搜索树。

// 示例 1:

// 输入: head = [-10,-3,0,5,9]
// 输出: [0,-3,9,-10,null,5]
// 解释: 一个可能的答案是[0，-3,9，-10,null,5]，它表示所示的高度平衡的二叉搜索树。
// 示例 2:

// 输入: head = []
// 输出: []

// 提示:

// head 中的节点数在[0, 2 * 104] 范围内
// -105 <= Node.val <= 105

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var sortedListToBST = function (head) {};

const root = new ListNode(-10);
root.next = new ListNode(-3);
root.next.next = new ListNode(0);
root.next.next.next = new ListNode(5);
root.next.next.next.next = new ListNode(9);
