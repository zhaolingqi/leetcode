/**
 * 反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val
    this.next = null
}
// var reverseList = function(head) {
//     let tempStack = []
//     let node = head
//     while(node !== null) {
//         tempStack.push(node)
//         node = node.next
//     }
//     if(tempStack.length < 1) return null
//     head = tempStack.pop()
//     node = head
//     while(tempStack.length > 0) {
//         node.next = tempStack.pop()
//         node = node.next
//     }
//     node.next = null
//     return head
// };


// 用递归
// var reverseList = function (head) {
//     if(head === null) return null
//     let end = new ListNode(0)
//     let newEnd = reverse(head)
//     newEnd.next = null
//     return end

//     function reverse(head) {
//         if (head === null || head.next === null) {
//             end = head
//             return head
//         }
//         let newHead = reverse(head.next)
//         newHead.next = head
//         newHead = newHead.next
//         return newHead
//     }
// };

// 迭代方法
var reverseList = function (head) {
    if(head === null) return null
    let cur = head
    let pre = null
    while(cur) {
        let temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
    return pre
};


let head = new ListNode(1)
let head1 = new ListNode(2)
let head2 = new ListNode(3)
let head3 = new ListNode(4)
let head4 = new ListNode(5)
head.next = head1
head1.next = head2
head2.next = head3
head3.next = head4
console.log(reverseList(head))