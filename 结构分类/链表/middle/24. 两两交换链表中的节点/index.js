// 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

// 示例 1：

// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]
// 示例 2：

// 输入：head = []
// 输出：[]
// 示例 3：

// 输入：head = [1]
// 输出：[1]

// 提示：

// 链表中节点的数目在范围 [0, 100] 内

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let curNode = head;
  let count = 0;
  while (curNode) {
    const tempNode = curNode.next;
    console.log(tempNode);

    curNode.next = tempNode.next;
    console.log(curNode);

    tempNode.next = curNode;
    console.log(tempNode);

    curNode = curNode.next;
    console.log(curNode);

    if (count === 0) {
      head = tempNode;
    }

    count++;
  }
  return head;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
console.log(swapPairs(head));
