// 双向链表

function Node(key, val) {
    this.key = key
    this.val = val
    this.next = null
    this.pre = null
}

function doubleLinkedList() {
    this.head = new Node()
    this.tail = new Node()
    this.head.next = this.tail
    this.tail.pre = this.head
}

doubleLinkedList.prototype.removeNode = function(node) {
    node.pre.next = node.next
    node.next.pre = node.pre
}

doubleLinkedList.prototype.addNode = function(node) {
    node.next = this.head.next
    this.head.next.pre = node
    this.head.next = node
    node.pre = this.head
}