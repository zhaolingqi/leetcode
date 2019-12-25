/**
 * 相交链表
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // if(headA === null || headB === null) return null
    // let arrA = []
    // let arrB = []
    // let tailA = headA
    // let tailB = headB
    // while(tailA !== null) {
    //     arrA.push(tailA)
    //     tailA = tailA.next
    // }
    // while(tailB !== null) {
    //     arrB.push(tailB)
    //     tailB = tailB.next
    // }
    // let pre = null
    // let nodeA = arrA.pop()
    // let nodeB = arrB.pop()
    // while(nodeA === nodeB && nodeA !== undefined) {
    //     pre = nodeA
    //     nodeA = arrA.pop()
    //     nodeB = arrB.pop()
    // }
    // return pre
    if(headA === null || headB === null) return null
    let tempA = headA
    let tempB = headB
    while(true) {
        if(tempA !== tempB) {
            tempA = tempA.next
            tempB = tempB.next
            if(tempA === null && tempB === null) return null
            if(tempA === null) tempA = headB
            if(tempB === null) tempB = headA
        } else return tempA
    }

};