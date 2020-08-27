/**
 * 根据一棵树的前序遍历与中序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。
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
 * 前序遍历 根左右
 * 中序遍历 左根右
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if(preorder.length < 1) return null
    if(preorder.length === 1) return new TreeNode(preorder[0])
    let root = new TreeNode(preorder[0])
    let index = inorder.findIndex((value) => value === root.val)
    console.log(index)
    // 左子树
    let leftPre = preorder.slice(1, index + 1)
    let leftIn = inorder.slice(0, index)
    console.log(leftIn, leftPre)
    root.left = buildTree(leftPre, leftIn)
    // 右子树
    let rightPre = preorder.slice(index + 1)
    let rightIn = inorder.slice(index + 1)
    console.log(rightIn, rightPre)
    root.right = buildTree(rightPre, rightIn)

    return root
};

let res = buildTree([1,2,3], [ 3, 2, 1])
console.log(res)