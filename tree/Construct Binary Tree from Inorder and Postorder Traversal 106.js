/**
 * 根据一棵树的中序遍历与后序遍历构造二叉树。
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
 * 中序遍历 左中右
 * 后序遍历 左右中
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  // 后序遍历的最后一个元素为root
  if(postorder.length < 1) return null;
  if(postorder.length === 1) return new TreeNode(postorder[0]);
  let root = new TreeNode(postorder[postorder.length - 1]);

  let index = inorder.findIndex((value) => value === root.val);
  // 左子树
  let leftIn = inorder.slice(0, index);
  let leftPost = postorder.slice(0, index);
  root.left = buildTree(leftIn, leftPost);
  // 右子树
  
  let rightIn = inorder.slice(index + 1);
  let rightPost = postorder.slice(index, postorder.length - 1);
  root.right = buildTree(rightIn, rightPost);

  return root;
};