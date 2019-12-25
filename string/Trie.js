/**
 * 实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。
 * 示例:
 * Trie trie = new Trie();
 * trie.insert("apple");
 * trie.search("apple");   // 返回 true
 * trie.search("app");     // 返回 false
 * trie.startsWith("app"); // 返回 true
 * trie.insert("app");   
 * trie.search("app");     // 返回 true
 * 
 * 说明:
 * 你可以假设所有的输入都是由小写字母 a-z 构成的。
 * 保证所有输入均为非空字符串。
 */


/**
 * Initialize your data structure here.
 */
function TreeNode() {
    this.end = false
    this.nexts = new Map()
}
var Trie = function () {
    this.head = new TreeNode()
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let i = 0, N = word.length
    let cur = this.head
    while (i < N) {
        if (!cur.nexts.has(word[i])) {
            cur.nexts.set(word[i], new TreeNode())
        }
        cur = cur.nexts.get(word[i])
        i++
        if (i === N) {
            cur.end = true
        }
    }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let i = 0, N = word.length
    let cur = this.head
    while (i < N) {
        if (!cur.nexts.has(word[i])) {
            return false
        }
        cur = cur.nexts.get(word[i])
        i++
        if (i === N && cur.end === true) {
            return true
        }
    }
    return false
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let i = 0, N = prefix.length
    let cur = this.head
    while (i < N) {
        if (!cur.nexts.has(prefix[i])) {
            return false
        }
        cur = cur.nexts.get(prefix[i])
        i++
    }
    return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
var obj = new Trie()
obj.insert("apple")
var param_2 = obj.search("applef")
var param_3 = obj.startsWith("aapp")
console.log(obj, param_2, param_3)