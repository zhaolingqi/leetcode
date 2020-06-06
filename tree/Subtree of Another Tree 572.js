/**
 * 给定两个非空二叉树 s 和 t，检验 s 中是否包含和 t 具有相同结构和节点值的子树。s 的一个子树包括 s 的一个节点和这个节点的所有子孙。s 也可以看做它自身的一棵子树。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {

    let res = false
    if (s !== null && t !== null) {
        if (s.val === t.val) {
            res = isSameTree(s, t)
        }
        if (!res) isSubtree(s.left, t)
        if (!res) isSubtree(s.right, t)
    }

    return res

    function isSameTree(s, t) {
        if(s === null && t === null) return true
        if (s === null || t === null) return false
        if (s.val !== t.val) return false

        return isSameTree(s.left, t.left) && isSameTree(s.right, t.right)
    }
};