// 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。

// k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

// 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

// 示例 1：

// 输入：head = [1,2,3,4,5], k = 2
// 输出：[2,1,4,3,5]
// 示例 2：

// 输入：head = [1,2,3,4,5], k = 3
// 输出：[3,2,1,4,5]

// 提示：
// 链表中的节点数目为 n
// 1 <= k <= n <= 5000
// 0 <= Node.val <= 1000

// 进阶：你可以设计一个只用 O(1) 额外内存空间的算法解决此问题吗？

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var reverseKGroup = function (head, k) {
  let count = 0;
  let countNode = head;
  while (countNode) {
    countNode = countNode.next;
    count++;
  }

  let dummy = new ListNode(0, head);

  let curStore = dummy;

  for (let i = 0; i < Math.floor(count / k); i++) {
    let pre = null;

    let cur = curStore.next;

    for (let j = 0; j < k; j++) {
      let next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }

    const next = curStore.next;
    curStore.next.next = cur;
    curStore.next = pre;
    curStore = next;
  }

  return dummy.next;
};

// head = [1, 2, 3, 4, 5];
head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
);
k = 2;

console.log(reverseKGroup(head, k));
