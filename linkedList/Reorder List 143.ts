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
/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  let nodes: Array<ListNode> = []
  while ( head ) {
    let temp: ListNode | null = head.next
    head.next = null
    nodes.push( head )
    head = temp
  }
  let i = 0, j = nodes.length - 1
  while ( i < j ) {
    let pre = nodes[ i++ ]
    let last = nodes[ j-- ]
    pre.next = last
    last.next = nodes[i] !== last ? nodes[i] : null
  }
};