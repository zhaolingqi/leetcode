/**
 * 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
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
var sortList = function(head) {
    if(head === null || head.next === null) return head
    let fast = head.next, slow = head
    while(fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
    }
    let mid = slow.next
    // 将链表从中间截断
    slow.next = null
    let left = sortList(head)
    let right = sortList(mid)
    // 将左右归并
    let result = new ListNode(1)
    let temp = result
    while(left !== null && right !== null) {
        if(left.val < right.val) {
            temp.next = left
            temp = temp.next
            left = left.next
        } else {
            temp.next = right
            temp = temp.next
            right = right.next
        }
    }
    temp.next = left === null ? right : left
    return result.next
};

let head = new ListNode(5)
let head1 = new ListNode(3)
let head2 = new ListNode(1)
let head3 = new ListNode(2)
let head4= new ListNode(6)
head.next = head1
head1.next = head2
head2.next = head3
head3.next = head4
console.log(sortList(head))