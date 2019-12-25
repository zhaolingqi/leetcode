/**
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
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
var detectCycle = function (head) {

    if(hasCycle(head) === false) {
        return null
    }
    let meet = hasCycle(head)
    let start = head
    while(meet !== start) {
        meet = meet.next
        start = start.next
    }
    return start

    function hasCycle(head) {
        if (head === null) return false
        let fast = head
        let slow = head
        while (fast !== null) {
            if (fast.next === null) return false
            else fast = fast.next.next
            slow = slow.next
            if (fast === slow) return fast
        }
        return false
    }
};