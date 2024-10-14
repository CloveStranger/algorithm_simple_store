// 给你两个链表 list1 和 list2 ，它们包含的元素分别为 n 个和 m 个。

// 请你将 list1 中下标从 a 到 b 的全部节点都删除，并将list2 接在被删除节点的位置。

// 下图中蓝色边和节点展示了操作后的结果：

// 请你返回结果链表的头指针。

// 示例 1：

// 输入：list1 = [10,1,13,6,9,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
// 输出：[10,1,13,1000000,1000001,1000002,5]
// 解释：我们删除 list1 中下标为 3 和 4 的两个节点，并将 list2 接在该位置。上图中蓝色的边和节点为答案链表。
// 示例 2：

// 输入：list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]
// 输出：[0,1,1000000,1000001,1000002,1000003,1000004,6]
// 解释：上图中蓝色的边和节点为答案链表。

// 提示：

// 3 <= list1.length <= 104
// 1 <= a <= b < list1.length - 1
// 1 <= list2.length <= 104

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let startNode;
  let endNode;
  let curNode = list1;
  let index = 0;

  while (index <= b) {
    if (index == a - 1) {
      startNode = curNode;
    }
    if (index == b) {
      endNode = curNode;
      break;
    }
    curNode = curNode.next;
    index++;
  }

  startNode.next = list2;

  while (list2.next) {
    list2 = list2.next;
  }

  list2.next = endNode;

  return list1;
};
var mergeInBetween = function (list1, a, b, list2) {
  let preA = list1;
  for (let i = 0; i < a - 1; i++) {
    preA = preA.next;
  }
  let preB = preA;
  for (let i = 0; i < b - a + 2; i++) {
    preB = preB.next;
  }
  preA.next = list2;
  while (list2.next) {
    list2 = list2.next;
  }
  list2.next = preB;
  return list1;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

node1 = new ListNode(
  10,
  new ListNode(
    1,
    new ListNode(13, new ListNode(6, new ListNode(9, new ListNode(5)))),
  ),
);
node2 = new ListNode(1000000, new ListNode(1000001, new ListNode(1000002)));

console.log(mergeInBetween(node1, 2, 5, node2));
