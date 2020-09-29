/**
 * 给定一个二叉树，我们在树的节点上安装摄像头。
 * 节点上的每个摄影头都可以监视其父对象、自身及其直接子对象。
 * 计算监控树的所有节点所需的最小摄像头数量。
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
 * @return {number}
 */
var minCameraCover = function(root) {

  function dfs(node) {
    if(!node) {
      return [Math.floor(Number.MAX_SAFE_INTEGER / 2), 0, 0];
    }
    const [la, lb, lc] = dfs(node.left);
    const [ra, rb, rc] = dfs(node.right);
    const a = lc + rc + 1;
    const b = Math.min(a, Math.min(la + rb, ra + lb));
    const c = Math.min(a, lb + rb);
    return [a, b, c];
  }
  
  return dfs(root)[1];
};