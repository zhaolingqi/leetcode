/**
 * 给定一个非空二叉树，返回其最大路径和。

本题中，路径被定义为一条从树中任意节点出发，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点。

示例 1:

输入: [1,2,3]

       1
      / \
     2   3

输出: 6
示例 2:

输入: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

输出: 42
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
function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}
var maxPathSum = function (root) {
    let max = Number.NEGATIVE_INFINITY
    max(root)
    return max
    function max(node) {
        if (node === null) return 0
        let left = Math.max(max(node.left), 0)
        let right = Math.max(max(node.right), 0)
        
        max = Math.max(max, node.val + left + right)

        return node.val + Math.max(left, right)
    }
};