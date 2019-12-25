/**
 * 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。

获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。

进阶:

你是否可以在 O(1) 时间复杂度内完成这两种操作？
 */
/**
 * @param {number} capacity 
*/

function Node(key, val) {
    this.val = val
    this.key = key
    this.next = null
    this.pre = null
}

function deleteNode(node) {
    node.pre.next = node.next
    node.next.pre = node.pre
}
function deleteLastNode(node) {
    let newKey = node.pre.key
    node.pre.pre.next = node
    node.pre = node.pre.pre
    return newKey
}

var LRUCache = function(capacity) {
    this.capacity = capacity
    this.map = new Map()
    this.head = new Node(0, 0)
    this.tail = new Node(0, 0)
    this.head.next = this.tail
    this.tail.pre = this.head
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) { 
    if(!this.map.has(key)) return -1
    let node = this.map.get(key)
    deleteNode(node)
    node.next = this.head.next
    this.head.next.pre = node
    this.head.next = node
    node.pre = this.head  
    return node.val 
};   

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.map.has(key)) {
        //删除双向链表中的结点，并在链表头加上这个结点
        deleteNode(this.map.get(key))
        let node = new Node(key, value)
        this.map.set(key, node)
        node.next = this.head.next
        this.head.next.pre = node
        this.head.next = node
        node.pre = this.head

    } else {
        if(this.map.size === this.capacity) {
            // 删除链表最后的结点,在链表头加上新结点
            let deleteKey = deleteLastNode(this.tail)
            this.map.delete(deleteKey)
            let node = new Node(key, value)
            this.map.set(key, node)
            node.next = this.head.next
            this.head.next.pre = node
            this.head.next = node
            node.pre = this.head
        } else {
            let node = new Node(key, value)
            this.map.set(key, node)
            node.next = this.head.next
            this.head.next.pre = node
            this.head.next = node
            node.pre = this.head
        }
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
