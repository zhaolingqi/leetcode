/**
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {

    let arr = []
    Traverse(root)
    for(let i = 0; i < arr.length - 2; i++) {
        if(arr[i] >= arr[i + 1]) return false
    }
    return true

    // 递归方式的中序遍历
    // function Traverse(root) {
    //     if(root === null) return
    //     Traverse(root.left)
    //     arr.push(root.val)
    //     Traverse(root.right)
    // }

    // 非递归方式的中序遍历
    function Traverse(root) {
        let stack = []
        let point = root
        while(stack.length !== 0 || point) {
            if(point) {
                stack.push(point)
                point = point.left
                
            } else {
                let temp = stack.pop()
                arr.push(temp.val)
                point = temp.right
            }
        }
    }
};