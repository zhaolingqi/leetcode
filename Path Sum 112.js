/**
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
 * 说明: 叶子节点是指没有子节点的节点。
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if(root === null) return false
  let tempSum = 0;
  return subPathSum(root, sum, tempSum);
  function subPathSum (root, sum, tempSum) {
    tempSum += root.val;
    let left = false;
    let right = false;
    if(tempSum > sum) return false;
    if(tempSum === sum && !root.left && !root.right) return true;
    if(root.left) left = subPathSum(root.left, sum, tempSum);
    if(root.right) right = subPathSum(root.right, sum, tempSum);
    return left || right
  }
};