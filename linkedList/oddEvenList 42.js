/**
 * 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。

请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。

示例 1:

输入: 1->2->3->4->5->NULL
输出: 1->3->5->2->4->NULL
示例 2:

输入: 2->1->3->5->6->4->7->NULL 
输出: 2->3->6->7->1->5->4->NULL
说明:

应当保持奇数节点和偶数节点的相对顺序。
链表的第一个节点视为奇数节点，第二个节点视为偶数节点，以此类推。
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
var oddEvenList = function(head) {
    if(head === null || head.next === null) return head
    let odd = head, oddHead = head
    let even = head.next, evenHead = head.next
    while(odd.next !== null && odd.next.next !== null) {
        odd.next = odd.next.next
        odd = odd.next
        even.next = odd.next
        even = even.next
    }
    odd.next = evenHead
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
console.log(oddEvenList(head))