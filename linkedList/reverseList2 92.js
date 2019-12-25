/**
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明:
1 ≤ m ≤ n ≤ 链表长度。
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val
    this.next = null
}
var reverseBetween = function (head, m, n) {
    let i = 1
    let pre = null
    let cur = head
    let start = pre
    let end = cur
    while (i <= n) {
        if (i < m) {
            pre = cur
            start = pre
            cur = cur.next
            end = cur
        }
        else if (i >= m) {
            let temp = cur.next
            cur.next = pre
            pre = cur
            cur = temp
        }
        i++
    }
    if (m === 1) {
        head = pre
    } else {
        start.next = pre
    }
    end.next = cur
    return head
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
console.log(reverseBetween(head, 2, 4))