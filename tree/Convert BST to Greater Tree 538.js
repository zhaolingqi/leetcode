/**
 * 给定一个二叉搜索树（Binary Search Tree），把它转换成为累加树（Greater Tree)，使得每个节点的值是原来的节点值加上所有大于它的节点值之和。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  let sum = 0
  traverse(root);

  function traverse(node) {
    if(!node) return;
    traverse(node.right);
    sum += node.val
    node.val = sum;
    traverse(node.left);
  }
};
let root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(4);
root.left.left = new TreeNode(-2);
root.right.left = new TreeNode(3);
convertBST(root);