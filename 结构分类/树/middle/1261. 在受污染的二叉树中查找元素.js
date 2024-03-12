// 给出一个满足下述规则的二叉树：

// root.val == 0
// 如果 treeNode.val == x 且 treeNode.left != null，那么 treeNode.left.val == 2 * x + 1
// 如果 treeNode.val == x 且 treeNode.right != null，那么 treeNode.right.val == 2 * x + 2
// 现在这个二叉树受到「污染」，所有的 treeNode.val 都变成了 -1。

// 请你先还原二叉树，然后实现 FindElements 类：

// FindElements(TreeNode* root) 用受污染的二叉树初始化对象，你需要先把它还原。
// bool find(int target) 判断目标值 target 是否存在于还原后的二叉树中并返回结果。

// 示例 1：

// 输入：
// ["FindElements","find","find"]
// [[[-1,null,-1]],[1],[2]]
// 输出：
// [null,false,true]
// 解释：
// FindElements findElements = new FindElements([-1,null,-1]);
// findElements.find(1); // return False
// findElements.find(2); // return True
// 示例 2：

// 输入：
// ["FindElements","find","find","find"]
// [[[-1,-1,-1,-1,-1]],[1],[3],[5]]
// 输出：
// [null,true,true,false]
// 解释：
// FindElements findElements = new FindElements([-1,-1,-1,-1,-1]);
// findElements.find(1); // return True
// findElements.find(3); // return True
// findElements.find(5); // return False
// 示例 3：

// 输入：
// ["FindElements","find","find","find","find"]
// [[[-1,null,-1,-1,null,-1]],[2],[3],[4],[5]]
// 输出：
// [null,true,false,false,true]
// 解释：
// FindElements findElements = new FindElements([-1,null,-1,-1,null,-1]);
// findElements.find(2); // return True
// findElements.find(3); // return False
// findElements.find(4); // return False
// findElements.find(5); // return True

// 提示：

// TreeNode.val == -1
// 二叉树的高度不超过 20
// 节点的总数在 [1, 10^4] 之间
// 调用 find() 的总次数在 [1, 10^4] 之间
// 0 <= target <= 10^6
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
//DFS
// var FindElements = function (root) {
//   root.val = 0;
//   this.valueArr = [0];
//   const dfs = (node) => {
//     if (node.left) {
//       const value = node.val * 2 + 1;
//       node.left.val = value;
//       this.valueArr.push(value);
//       dfs(node.left);
//     }
//     if (node.right) {
//       const value = node.val * 2 + 2;
//       node.right.val = value;
//       this.valueArr.push(value);
//       dfs(node.right);
//     }
//   };
//   dfs(root);
// };

///BFS
var FindElements = function (root) {
  root.val = 0;
  this.valueArr = [0];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    if (node.left) {
      const value = node.val * 2 + 1;
      node.left.val = value;
      this.valueArr.push(value);
      queue.push(node.left);
    }
    if (node.right) {
      const value = node.val * 2 + 2;
      node.right.val = value;
      this.valueArr.push(value);
      queue.push(node.right);
    }
  }
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
  return this.valueArr.includes(target);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(-1);
root.right = new TreeNode(-1);
const findElements = new FindElements(root);
findElements.find(2);

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
