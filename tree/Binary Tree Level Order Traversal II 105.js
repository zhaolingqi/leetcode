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
var levelOrderBottom = function(root) {
  let nodeArr = [];
  let layerArr = [];
  let res = [];
  let tempRes = [];
  if(!root) return res;
  let curLayer = 0;
  layerArr.push(curLayer);
  nodeArr.push(root);
  while(nodeArr.length > 0) {
    let tempNode = nodeArr.shift();
    let tempLayer = layerArr.shift();
    if(tempLayer === curLayer) {
      tempRes.push(tempNode.val);
    } else {
      res.unshift(tempRes);
      tempRes = [];
      tempRes.push(tempNode.val);
      curLayer ++;
    }
    if(tempNode.left) {
      nodeArr.push(tempNode.left);
      layerArr.push(tempLayer + 1);
    }
    if(tempNode.right) {
      nodeArr.push(tempNode.right);
      layerArr.push(tempLayer + 1);
    }
  }
  if(tempRes.length > 0) {
    res.unshift(tempRes);
  }
  return res;
};
let root = new TreeNode(3)
root.left = new TreeNode(7)
root.right = new TreeNode(17)
root.right.left = new TreeNode(27)
root.right.right = new TreeNode(37)
levelOrderBottom(root);