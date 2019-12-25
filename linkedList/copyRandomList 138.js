/*
 * @Author: Zhaolq 
 * @Date: 2019-11-04 13:59:43 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-11-05 16:53:34
 */
/**
 * 给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。
 * 要求返回这个链表的深拷贝。 
 */
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
function Node(val, next, random) {
    this.val = val
    this.next = next
    this.random = random
}

// var visitedNode = new Map()

// var copyRandomList = function(head) {

//     if(head === null) return null
//     if(visitedNode.has(head)) {
//         return visitedNode.get(head)
//     }
//     let node = new Node(head.val, null, null)
//     visitedNode.set(head, node)
//     node.next = copyRandomList(head.next)
//     node.random = copyRandomList(head.random)
//     return node
// };

var copyRandomList = function(head) {

    if(head === null) return null
    let pointer = head
    while(pointer !== null) {
        let temp = new Node(pointer.val, null, null)
        temp.next = pointer.next
        pointer.next = temp
        pointer = temp.next
    }
    pointer = head

    // 确定random

    while(pointer !== null) {
        if(pointer.random !== null) pointer.next.random = pointer.random.next
        else pointer.next.random = null
        pointer = pointer.next.next
    }

    pointer = head
    let newHead = head.next
    let newPointer = newHead
    while(pointer !== null) {
        pointer.next = pointer.next.next
        newPointer.next = newPointer.next.next
        pointer = pointer.next
        newPointer = newPointer.next
    }
    return newHead
};