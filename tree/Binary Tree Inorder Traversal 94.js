/**
 * 给定一个二叉树，返回它的中序 遍历。
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let node = root;
  let stack = [];
  let res = [];
  while(stack.length > 0 || node) {
    if(node) {
      stack.push(node);
      node = node.left
    } else {
      let temp = stack.pop();
      res.push(temp.val);
      node = temp.right;                                    
    }
  }
  return res
};
let root = new TreeNode(3)
root.left = new TreeNode(7)
root.right = new TreeNode(17)
root.right.left = new TreeNode(27)
root.right.right = new TreeNode(37)
inorderTraversal(root);