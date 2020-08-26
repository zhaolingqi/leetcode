/**
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}
var lowestCommonAncestor = function (root, p, q) {

    findNext(root)
    var resNode = null
    return resNode

    function findNext(curNode) {
        if (curNode === null) return false
        let mid = (curNode === p || curNode === q) ? 1 : 0
        let left = findNext(curNode.left) ? 1 : 0
        let right = findNext(curNode.right) ? 1 : 0
        if (mid + left + right >= 2) {
            resNode = curNode
        }
        return mid + left + right > 0
    }
};

let arr = []
arr.push(null)
console.log(arr.length)
