/**
 * 给定二叉搜索树的根结点 root，返回值位于范围 [low, high] 之间的所有结点的值的和。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 中序遍历
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  let sum = 0;
  traverse(root);
  return sum;
  // function traverse(node) {
  //   if(node == null) return;
  //   traverse(node.left);
  //   if(node.val >= low && node.val <= high)sum += node.val;
  //   if(node.val > high) return;
  //   traverse(node.right);
  // }
  function traverse(node) {
    if(node === null) return;
    let point = node;
    let stack = [];
    while(stack.length > 0 || point !== null) {
      if(point) {
        stack.push(point);
        point = point.left;
      } else {
        let temp = stack.pop();
        if(temp.val >= low && temp.val <= high) sum += temp.val;
        point = temp.right;
      }
    }
  }
};