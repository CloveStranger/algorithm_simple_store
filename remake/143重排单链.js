/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {};

// 给定一个单链表 L 的头节点 head ，单链表 L 表示为：

// L0 → L1 → … → Ln - 1 → Ln
// 请将其重新排列后变为：

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// 不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

// 输入：head = [1,2,3,4]
// 输出：[1,4,2,3]

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head = [
  new ListNode(1, 2),
  new ListNode(2, 3),
  new ListNode(3, 4),
  new ListNode(4),
];
console.log(head[0].val);

// 输入：head = [1,2,3,4,5]
// 输出：[1,5,2,4,3]
