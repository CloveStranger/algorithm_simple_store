// 给你一个链表的头节点 head 。

// 移除每个右侧有一个更大数值的节点。

// 返回修改后链表的头节点 head 。

// 示例 1：

// 输入：head = [5,2,13,3,8]
// 输出：[13,8]
// 解释：需要移除的节点是 5 ，2 和 3 。
// - 节点 13 在节点 5 右侧。
// - 节点 13 在节点 2 右侧。
// - 节点 8 在节点 3 右侧。
// 示例 2：

// 输入：head = [1,1,1,1]
// 输出：[1,1,1,1]
// 解释：每个节点的值都是 1 ，所以没有需要移除的节点。

// 提示：

// 给定列表中的节点数目在范围 [1, 105] 内
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
 * @return {ListNode}
 */
var removeNodes = function (head) {
  let dummy = new ListNode(0, head);
  let pre = dummy;
  let max = head;
  let cur = head;
  while (cur) {
    if (cur.val > max.val) {
      pre.next = cur;
      max = cur;
    }
  }
};
