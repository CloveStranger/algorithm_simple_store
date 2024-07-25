// 给你一个整数 n ，请你找出所有可能含 n 个节点的 真二叉树 ，并以列表形式返回。答案中每棵树的每个节点都必须符合 Node.val == 0 。

// 答案的每个元素都是一棵真二叉树的根节点。你可以按 任意顺序 返回最终的真二叉树列表。

// 真二叉树 是一类二叉树，树中每个节点恰好有 0 或 2 个子节点。

// 示例 1：

// 输入：n = 7
// 输出：[[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
// 示例 2：

// 输入：n = 3
// 输出：[[0,0,0]]

// 提示：

// 1 <= n <= 20
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var allPossibleFBT = function (n) {
  if (n % 2 === 0) return [];
  const output = [];
  const root = new TreeNode(0);
  let remainCounts = n;
  const dfs = (node) => {
    if (remainCounts === 1) {
      output.push(root);
      return;
    }
    const lNode = new TreeNode(0);
    const rNode = new TreeNode(0);
    node.left = lNode;
    node.right = rNode;
    remainCounts -= 2;
    dfs(lNode);
    dfs(rNode);
  };
  dfs(root, n);
  return output;
};

var allPossibleFBT = function (n) {
  let fullBinaryTrees = [];
  if (n % 2 === 0) {
    return fullBinaryTrees;
  }
  if (n === 1) {
    fullBinaryTrees.push(new TreeNode(0));
    return fullBinaryTrees;
  }
  for (let i = 1; i < n; i += 2) {
    let leftSubtrees = allPossibleFBT(i);
    let rightSubtrees = allPossibleFBT(n - 1 - i);
    for (let leftSubtree of leftSubtrees) {
      for (let rightSubtree of rightSubtrees) {
        let root = new TreeNode(0, leftSubtree, rightSubtree);
        fullBinaryTrees.push(root);
      }
    }
  }
  return fullBinaryTrees;
};

console.log(allPossibleFBT(7));
