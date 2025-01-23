// 给你两棵二叉树： root1 和 root2 。

// 想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，不为 null 的节点将直接作为新二叉树的节点。

// 返回合并后的二叉树。

// 注意: 合并过程必须从两个树的根节点开始。

// 示例 1：

// 输入：root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// 输出：[3,4,5,5,4,null,7]
// 示例 2：

// 输入：root1 = [1], root2 = [1,2]
// 输出：[2,2]

// 提示：

// 两棵树中的节点数目在范围 [0, 2000] 内
// -104 <= Node.val <= 104

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  const root = new TreeNode();

  const dfs = (root1, root2, root) => {
    if (root1 === null && root2 === null) {
      return;
    }
    if (root1 === null) {
      root.val = root2.val;
      root.left = mergeTrees(null, root2.left);
      root.right = mergeTrees(null, root2.right);
      return;
    }
    if (root2 === null) {
      root.val = root1.val;
      root.left = mergeTrees(root1.left, null);
      root.right = mergeTrees(root1.right, null);
      return;
    }
    root.val = root1.val + root2.val;
    root.left = mergeTrees(root1.left, root2.left);
    root.right = mergeTrees(root1.right, root2.right);
  };

  dfs(root1, root2, root);

  return root;
};

var mergeTrees = function (root1, root2) {
  if (root1 === null) return root2;
  if (root2 === null) return root1;
  return new TreeNode(
    root1.val + root2.val,
    mergeTrees(root1.left, root2.left), // 合并左子树
    mergeTrees(root1.right, root2.right),
  ); // 合并右子树
};

var mergeTrees = function (root1, root2) {
  if (root1 === null) return root2;
  if (root2 === null) return root1;
  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left); // 合并左子树
  root1.right = mergeTrees(root1.right, root2.right); // 合并右子树
  return root1;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(3);
root1.right = new TreeNode(2);
root1.left.left = new TreeNode(5);

const root2 = new TreeNode(2);
root2.left = new TreeNode(1);
root2.right = new TreeNode(3);
root2.left.right = new TreeNode(4);
root2.right.right = new TreeNode(7);

console.log(mergeTrees(root1, root2));
