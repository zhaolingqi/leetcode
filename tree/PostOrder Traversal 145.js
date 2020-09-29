/**
 * 给定一个二叉树，返回它的 后序 遍历。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  let node = root;
  let stack = [];
  let map = new Map();
  let res = [];
  while (stack.length > 0 || node) {
    if (node) {
      map.set(node, 1);
      stack.push(node);
      node = node.left;
    } else {
      let tempNode = stack[stack.length - 1];
      let count = map.get(tempNode);
      if (count === 1) {
        map.set(tempNode, 2);
        node = tempNode.right;
      } else {
        stack.pop();
        res.push(tempNode.val);
        node = null;
      }
    }
  }
  console.log(res);
};
let root = new TreeNode(3)
root.left = new TreeNode(7)
root.right = new TreeNode(17)
root.right.left = new TreeNode(27)
root.right.right = new TreeNode(37)
postorderTraversal(root);