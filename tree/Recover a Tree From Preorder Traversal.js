/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var recoverFromPreorder = function(S) {
    let N = S.length;
    let val = Number(S[0]);
    let root = new TreeNode(val);


    function subRrecover(s, depth) {

    }
};
