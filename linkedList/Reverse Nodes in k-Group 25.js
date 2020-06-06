/**
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

k 是一个正整数，它的值小于或等于链表的长度。

如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let count = 1
    let tempHead = head
    let point = head
    let preTail = new ListNode(-1)
    preTail.next = head
    head = preTail
    while(point.next && k !== 1) {
        point = point.next
        count++
        if(count === k) {
            // 翻转tempHead到point这段链表
            let pre = tempHead
            let cur = tempHead.next
            let tempPoint = point.next
            while(cur !== tempPoint) {
                let temp = cur.next
                cur.next = pre
                pre = cur
                cur = temp
            }
            point = tempPoint
            preTail.next.next = tempPoint
            preTail.next = pre
            preTail = tempHead
            tempHead = point
            count = 1
        }
    }
    console.log(head.next)
    return head
};

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)
// head.next.next.next.next.next = new ListNode(6)
reverseKGroup(head, 3)