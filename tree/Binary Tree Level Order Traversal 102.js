/**
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
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
 * @return {number[][]}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var levelOrder = function (root) {
    let que = []
    let res = []
    let tempRes = []
    let point = root
    que.push(point)
    res.push([point.val])
    let length = que.length
    let i = 0
    while (que.length > 0) {
        let temp = que.shift()
        if (temp.left) {
            que.push(temp.left)
            tempRes.push(temp.left.val)
        }
        if (temp.right) {
            que.push(temp.right)
            tempRes.push(temp.right.val)
        }
        i++
        if (i === length) {
            i = 0
            if(tempRes.length > 0) res.push(tempRes)
            tempRes = []
            length = que.length
        }
    }
    console.log(res)
    return res
};
let root = new TreeNode(3)
// root.left = new TreeNode(7)
// root.right = new TreeNode(17)
// root.right.left = new TreeNode(27)
// root.right.right = new TreeNode(37)
levelOrder(root)