/**
 * 给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。
 * 你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，
 * 否则不为 NULL 的节点将直接作为新二叉树的节点。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {

  return dfs(t1, t2);
  function dfs(t1, t2) {
    let newVal;
    if(!t1 && !t2) return null;
    if(t1 && t2) {
      newVal = t1.val + t2.val;
    }
    if(t1 && !t2) {
      newVal = t1.val;
    }
    if(!t1 && t2) {
      newVal = t2.val;
    }
    let node = new TreeNode(newVal);
    if(t1 && t2) {
      node.left = dfs(t1.left, t2.left);
      node.right = dfs(t1.right, t2.right);
    }
    if(t1 && !t2) {
      node.left = dfs(t1.left, null);
      node.right = dfs(t1.right, null);
    }
    if(!t1 && t2) {
      node.left = dfs(null, t2.left);
      node.right = dfs(null, t2.right);
    }
    return node;
  }
};