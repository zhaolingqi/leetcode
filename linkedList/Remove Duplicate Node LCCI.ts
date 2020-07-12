/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function removeDuplicateNodes(head: ListNode | null): ListNode | null {
  const set: Set<number> = new Set();
  if(!head && !head.next) return head;
  let pre: ListNode | null = head;
  let next: ListNode | null = head.next;
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