/**
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var sortedArrayToBST = function(nums) {
  let N = nums.length;
  return subSort(nums, 0, N - 1)

  function subSort(nums, start, end) {
    if(start > end) return null;
    let mid = Math.floor((start + end) / 2);
    let root = new TreeNode(nums[mid]);
    root.left = subSort(nums, start, mid - 1);
    root.right =subSort(nums, mid + 1, end);
    return root;
  }
};