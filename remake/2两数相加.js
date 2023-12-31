// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  for (let i = 0; i < l1.length; i++) {
    const item = l1[i];
    console.log(item);
  }
  for (let i = 0; i < l2.length; i++) {
    const item = l2[i];
    console.log(item);
  }
};

// 输入：
// 输出：[7,0,8]
// 解释：342 + 465 = 807.
// const l1 = [2, 4, 3];
// const l2 = [5, 6, 4];

const l1 = [new ListNode(2, 4), new ListNode(4, 3), new ListNode(3)];
const l2 = [new ListNode(5, 6), new ListNode(6, 4), new ListNode(4)];

// 输入：l1 = [0], l2 = [0]
// 输出：[0]

// 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// 输出：[8,9,9,9,0,0,0,1]

const output = addTwoNumbers(l1, l2);
