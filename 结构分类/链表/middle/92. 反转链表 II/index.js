// 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。

// 示例 1：

// 输入：head = [1,2,3,4,5], left = 2, right = 4
// 输出：[1,4,3,2,5]
// 示例 2：

// 输入：head = [5], left = 1, right = 1
// 输出：[5]

// 提示：

// 链表中节点数目为 n
// 1 <= n <= 500
// -500 <= Node.val <= 500
// 1 <= left <= right <= n

// 进阶： 你可以使用一趟扫描完成反转吗？

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
// var reverseBetween = function (head, left, right) {
//   let guard = new ListNode(null, head);

//   let index = 0;

//   let start = guard;

//   while (index < left - 1) {
//     start = start.next;
//     index++;
//   }

//   let pre = null;
//   let cur = start.next;
//   while (index < right) {
//     const nxt = cur.next;
//     cur.next = pre;
//     pre = cur;
//     cur = nxt;
//     index++;
//   }
//   start.next.next = cur;
//   start.next = pre;

//   return guard.next;
// };

var reverseBetween = function (head, left, right) {
  const guardNode = new ListNode(null, head);

  let leftNode = guardNode;
  for (let i = 0; i < left - 1; i++) {
    leftNode = leftNode.next;
  }

  let pre = null;
  let cur = leftNode.next;

  for (let i = 0; i < right - left + 1; i++) {
    const nxt = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nxt;
  }
  leftNode.next.next = cur;
  leftNode.next = pre;
  return guardNode.next;
};

head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
);
left = 2;
right = 4;

console.log(reverseBetween(head, left, right));
