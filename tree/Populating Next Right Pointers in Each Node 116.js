/**
 * 给定一个完美二叉树，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

初始状态下，所有 next 指针都被设置为 NULL。

 */
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if(!root) return root;
  root.next = null;
  let stack = [];
  if(root.left) {
    stack.push(root.left);
  }
  if(root.right) {
    stack.push(root.right);
  }
  while(stack.length > 0) {
    let tempArr = [];
    let N = stack.length;
    stack.forEach((node, index) => {
      if(node.left) {
        tempArr.push(node.left);
      }
      if(node.right) {
        tempArr.push(node.right);
      }
      node.next = index < N - 1 ? stack[index + 1] : null;
    })
    stack = tempArr;
  }
  return root;
};