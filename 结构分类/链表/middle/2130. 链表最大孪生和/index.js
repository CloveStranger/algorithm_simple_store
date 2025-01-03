// 在一个大小为 n 且 n 为 偶数 的链表中，对于 0 <= i <= (n / 2) - 1 的 i ，第 i 个节点（下标从 0 开始）的孪生节点为第 (n-1-i) 个节点 。

// 比方说，n = 4 那么节点 0 是节点 3 的孪生节点，节点 1 是节点 2 的孪生节点。这是长度为 n = 4 的链表中所有的孪生节点。
// 孪生和 定义为一个节点和它孪生节点两者值之和。

// 给你一个长度为偶数的链表的头节点 head ，请你返回链表的 最大孪生和 。

// 示例 1：

// 输入：head = [5,4,2,1]
// 输出：6
// 解释：
// 节点 0 和节点 1 分别是节点 3 和 2 的孪生节点。孪生和都为 6 。
// 链表中没有其他孪生节点。
// 所以，链表的最大孪生和是 6 。
// 示例 2：

// 输入：head = [4,2,2,3]
// 输出：7
// 解释：
// 链表中的孪生节点为：
// - 节点 0 是节点 3 的孪生节点，孪生和为 4 + 3 = 7 。
// - 节点 1 是节点 2 的孪生节点，孪生和为 2 + 2 = 4 。
// 所以，最大孪生和为 max(7, 4) = 7 。
// 示例 3：

// 输入：head = [1,100000]
// 输出：100001
// 解释：
// 链表中只有一对孪生节点，孪生和为 1 + 100000 = 100001 。

// 提示：

// 链表的节点数目是 [2, 105] 中的 偶数 。
// 1 <= Node.val <= 105

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  const output = [];
  let node = head;
  while (node) {
    output.push(node.val);
    node = node.next;
  }
  let maxSum = 0;
  for (let i = 0; i < output.length / 2; i++) {
    const pre = output[i];
    const last = output[output.length - i - 1];
    maxSum = Math.max(pre + last, maxSum);
  }
  return maxSum;
};
var pairSum = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let pre = null;
  let cur = slow;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  let maxSum = 0;
  let node = head;
  while (node && pre) {
    maxSum = Math.max(node.val + pre.val, maxSum);
    node = node.next;
    pre = pre.next;
  }
  return maxSum;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

head = new ListNode(4);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);

console.log(pairSum(head));
