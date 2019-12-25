/**
 * 请判断一个链表是否为回文链表。

示例 1:

输入: 1->2
输出: false
示例 2:

输入: 1->2->2->1
输出: true
进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @return {boolean}
 */
function ListNode(val) {
    this.val = val
    this.next = null
}
var isPalindrome = function(head) {
    let arr = []
    if(head === null) return true
    while(head !== null) {
        arr.push(head)
        head = head.next
    }
    while(arr.length > 1) {
        if(arr.pop().val !== arr.shift().val) return false
    }
    return true
};