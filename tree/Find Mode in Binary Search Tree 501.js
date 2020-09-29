/**
 * 给定一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。

假定 BST 有如下定义：

结点左子树中所含结点的值小于等于当前结点的值
结点右子树中所含结点的值大于等于当前结点的值
左子树和右子树都是二叉搜索树
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
 * @return {number[]}
 */
var findMode = function(root) {
  let res = [];
  let count = 1;
  if(!root) return res;
  let pre = root.val;
  let maxCount = -1;

  let temp = InOrderReverse(root);
  if(count > maxCount) {
    res.shift();
    res.push(temp.val);
  } else if(count === maxCount) {
    res.push(temp.val);
  }

  return res;
  function InOrderReverse(node) {
    if(!node) return;
    let tempNode = node;
    if(node.left) InOrderReverse(node.left);
    if(node.val === pre) count++;
    else {
      if(count > maxCount) {
        maxCount = count;
        res.shift();
        res.push(pre);
      } else if(count === maxCount) {
        res.push(pre);
      }
      pre = node.val;
      count = 1; 
    }
    if(node.right) tempNode = InOrderReverse(node.right);
    return tempNode;
  }
};
