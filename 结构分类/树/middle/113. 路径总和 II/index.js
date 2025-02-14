// 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

// 叶子节点 是指没有子节点的节点。

// 示例 1：

// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// 输出：[[5,4,11,2],[5,8,4,5]]
// 示例 2：

// 输入：root = [1,2,3], targetSum = 5
// 输出：[]
// 示例 3：

// 输入：root = [1,2], targetSum = 0
// 输出：[]

// 提示：

// 树中节点总数在范围 [0, 5000] 内
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000

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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const output = [];

  const dfs = (node, arr) => {
    if (!node) {
      return;
    }
    arr.push(node.val);
    if (node.left === node.right) {
      if (arr.reduce((a, b) => a + b, 0) === targetSum) {
        output.push([...arr]);
      }
    } else {
      dfs(node.left, [...arr]);
      dfs(node.right, [...arr]);
    }
  };

  dfs(root, []);

  return output;
};
var pathSum = function (root, targetSum) {
  const output = [];
  const path = [];
  const dfs = (node, sum) => {
    if (!node) {
      return;
    }
    sum += node.val;
    path.push(node.val);
    if (node.left === node.right) {
      if (sum === targetSum) {
        output.push([...path]);
      }
    } else {
      dfs(node.left, sum);
      dfs(node.right, sum);
    }
    path.pop();
  };

  dfs(root, 0);

  return output;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

root = new TreeNode(
  5,
  new TreeNode(
    4,
    new TreeNode(11, new TreeNode(7), new TreeNode(2)),
    new TreeNode(
      8,
      new TreeNode(13),
      new TreeNode(4, new TreeNode(5), new TreeNode(1)),
    ),
  ),
);

console.log(pathSum(root, 22));
console.log(10000 * 1.01 ** 220);
console.log(10000 * 1.02 ** 220);
console.log(10000 * 1.03 ** 220);
console.log(10000 * 1.04 ** 220);
console.log(10000 * 1.05 ** 190);
