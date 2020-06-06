/**
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

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
var lowestCommonAncestor = function (root, p, q) {

    // // 找到p或q节点
    // let tree = order(root)
    // // 找到p、q的位置
    // let pIndex = tree.findIndex(e => e === p)
    // let qIndex = tree.findIndex(e => e === q)
    // // 找到p和q的最近公共祖先
    // if(pIndex < qIndex) [pIndex, qIndex] = [qIndex, pIndex]
    // while(pIndex !== qIndex) {
    //     pIndex = Math.floor((pIndex - 1) / 2)
    //     if(pIndex === qIndex) return tree[pIndex]
    //     if(pIndex < qIndex) [pIndex, qIndex] = [qIndex, pIndex]
    // }

    // // 树的层序遍历
    // function order(root) {
    //     let que = []
    //     let arr = []
    //     let point = root
    //     que.push(point)
    //     arr.push(point)
    //     while(que.length > 0 && que.some((val) => val !== null)) {
    //         let temp = que.shift()
    //         if(temp) {
    //             que.push(temp.left)
    //             que.push(temp.right)
    //             arr.push(temp.left)
    //             arr.push(temp.right)
    //         } else {
    //             que.push(null)
    //             que.push(null)
    //             arr.push(null)
    //             arr.push(null)
    //         }
    //     }
    //     return arr
    // }


    let resNode = null
    findNext(root)
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

let arr = [1, 2, 3, 4, 5]
console.log(arr.findIndex(e => e === 2))

