import 'dart:math';

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *   int val;
 *   TreeNode? left;
 *   TreeNode? right;
 *   TreeNode([this.val = 0, this.left, this.right]);
 * }
 */

class TreeNode {
  int val;
  TreeNode? left;
  TreeNode? right;
  TreeNode([this.val = 0, this.left, this.right]);
}

class Solution {
  int ans = 0;

  int calculateDepth(TreeNode? root) {
    dfs(root, 0);
    return ans;
  }

  void dfs(TreeNode? node, int depth) {
    if (node == null) return;
    ans = max(ans, ++depth);
    dfs(node.left, depth);
    dfs(node.right, depth);
  }
}
