/**
 * 给定一个二叉搜索树，编写一个函数 kthSmallest 来查找其中第 k 个最小的元素。

说明：
你可以假设 k 总是有效的，1 ≤ k ≤ 二叉搜索树元素个数。
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
    // 对二叉搜索树中序遍历可以得到从小到大的排序的数组
    let arr = []
    dfs(root)
    return arr[k - 1]
    function dfs(root) {
        if(root === null) return
            dfs(root.left)
            arr.push(root.val)
            dfs(root.right)   
    }
};