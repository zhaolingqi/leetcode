/**
 * 给定一个二叉树，返回所有从根节点到叶子节点的路径。
 * 说明: 叶子节点是指没有子节点的节点。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let path = [];
  let res = [];
  if(root) {
    dfs(root, path);
  }
  console.log(res);
  function dfs(root, path) {
    path.push(root.val);
    if(root.left === null && root.left === null) {
      generatePath(path);
      return
    }
    if(root.left) {
      dfs(root.left, path);
      path.pop();
    }
    if(root.right) {
      dfs(root.right, path);
      path.pop();
    }
  }

  function generatePath(path) {
    res.push(path.join("->"));
  }
};

binaryTreePaths()