/**
 * 编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function(head) {
  let set = new Set();
  let pre = head;
  if(!head || !head.next) return head;
  let next = head.next;
  set.add(pre.val);
  while(next) {
    if(set.has(next.val)) {
      pre.next = next.next;
      next = pre.next;
    } else {
      set.add(next.val);
      pre = next;
      next = next.next;
    }
  }
  return head;
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(2);
head.next.next.next.next.next = new ListNode(1);
removeDuplicateNodes(head);