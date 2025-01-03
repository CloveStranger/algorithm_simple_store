// 给你一个单链表的头节点 head ，请你判断该链表是否为
// 回文链表
// 。如果是，返回 true ；否则，返回 false 。

// 示例 1：

// 输入：head = [1,2,2,1]
// 输出：true
// 示例 2：

// 输入：head = [1,2]
// 输出：false

// head = [1,2,3,4,5,4,3,2,1]

// 提示：

// 链表中节点数目在范围[1, 105] 内
// 0 <= Node.val <= 9

// 进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var isPalindrome = function (head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
var isPalindrome = function (head) {
  let len = 0;
  let node = head;
  while (node) {
    len++;
    node = node.next;
  }
  let slow = head;
  let fast = head;
  for (let i = 0; i < Math.ceil(len / 2); i++) {
    fast = fast.next;
  }

  console.log(slow, fast);
};

head = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      3,
      new ListNode(
        4,
        new ListNode(
          5,
          new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1)))),
        ),
      ),
    ),
  ),
);
console.log(isPalindrome(head));
