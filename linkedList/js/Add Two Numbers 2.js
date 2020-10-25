"use strict";
/**
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

 */
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
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function addTwoNumbers(l1, l2) {
    var head = new ListNode(0);
    var count = 0;
    var temp = head;
    while (l1 || l2) {
        var l1Val = 0;
        var l2Val = 0;
        if (l1) {
            l1Val = l1.val;
            l1 = l1.next;
        }
        if (l2) {
            l2Val = l2.val;
            l2 = l2.next;
        }
        var val = l1Val + l2Val + count;
        if (val >= 10) {
            val = val % 10;
            count = 1;
        }
        else {
            count = 0;
        }
        var tempNode = new ListNode(val);
        temp.next = tempNode;
        temp = tempNode;
    }
    if (count) {
        temp.next = new ListNode(count);
    }
    return head.next;
}
;
var l1 = new ListNode(9);
var l2 = new ListNode(9);
l2.next = new ListNode(9);
l2.next.next = new ListNode(9);
addTwoNumbers(l1, l2);
