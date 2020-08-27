/**
 * 给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。
 * 说明: 叶子节点是指没有子节点的节点。
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
 * @param {number} sum
 * @return {number[][]}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var pathSum = function (root, sum) {
    let path = []
    findSubPath(root, sum, [])
    console.log(path)
    return path
    function findSubPath(root, sum, tempPath) {
        sum = sum - root.val
        if(sum < 0) return
        tempPath.push(root.val)
        if(root.left) {
            findSubPath(root.left, sum, tempPath.slice())
        }
        if(root.right) {
            findSubPath(root.right, sum, tempPath.slice())
        }
        if(root.left === null && root.right === null && sum === 0) {
            path.push(tempPath)
        }
    }
};
let root = new TreeNode(5)
root.left = new TreeNode(4)
root.right = new TreeNode(8)
root.left.left = new TreeNode(11)
root.right.left = new TreeNode(13)
root.right.right = new TreeNode(4)
root.left.left.left = new TreeNode(7)
root.left.left.right = new TreeNode(2)
root.right.right.left = new TreeNode(5)
root.right.right.right = new TreeNode(1)
pathSum(root,22)