/**
 * 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

你可以假设除了数字 0 之外，这两个数字都不会以零开头。

 

进阶：

如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。

 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    // 找到链表尾部相加
    let arr1 = []
    let arr2 = []
    let point1 = l1
    let point2 = l2
    let newNode = new ListNode(0)
    while (point1 !== null) {
        arr1.push(point1.val)
        point1 = point1.next
    }
    while (point2 !== null) {
        arr2.push(point2.val)
        point2 = point2.next
    }

    let res = add(arr1.join(''), arr2.join(''))
    res = res.split('').map(Number)
    let temp = newNode
    for (let i = 0; i < res.length; i++) {
        temp.next = new ListNode(res[i])
        temp = temp.next
    }
    return newNode.next
};
// 字符串a, b 相加
function add(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;

    let carry = 0;
    let ret = '';
    while (i >= 0 || j >= 0) {
        let x = 0;
        let y = 0;
        let sum;

        if (i >= 0) {
            x = a[i] - '0';
            i --;
        }

        if (j >= 0) {
            y = b[j] - '0';
            j --;
        }

        sum = x + y + carry;

        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        } else {
            carry = 0;
        }
        // 0 + ''
        ret = sum + ret;
    }

    if (carry) {
        ret = carry + ret;
    }

    return ret;
}
console.log(add('5', '199871'))
