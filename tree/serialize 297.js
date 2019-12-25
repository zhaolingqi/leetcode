/**
 * 序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。

请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

示例: 

你可以将以下二叉树：

    1
   / \
  2   3
     / \
    4   5

序列化为 "[1,2,3,null,null,4,5]"
提示: 这与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。

说明: 不要使用类的成员 / 全局 / 静态变量来存储状态，你的序列化和反序列化算法应该是无状态的。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}
var serialize = function (root) {
    let tempArr = []
    let res = []
    let temp
    tempArr.push(root)
    while (tempArr.length > 0) {
        temp = tempArr.shift()
        if(temp !== null) {
            tempArr.push(temp.left)
            tempArr.push(temp.right)
            res.push(temp.val)
        } else res.push(null)
    }
    while (res[res.length - 1] === null) {
        res.pop()
    } 
    // console.log(res.join(),res)
    return res.join()
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    let arr = data.split(',')
    console.log(arr)
    let tempArr = []
    if(arr[0] === '') return null
    let root = new TreeNode(Number(arr.shift()))
    tempArr.push(root)
    let temp = root
    while(arr.length > 0) {
        temp = tempArr.shift()
        if(temp !== null) {
            let num = arr.shift()
            if(num !== '' && num !== undefined) {
                temp.left = new TreeNode(Number(num))
                tempArr.push(temp.left)
            } else temp.left = null
            num = arr.shift()
            if(num !== '' && num !== undefined) {
                temp.right = new TreeNode(Number(num))
                tempArr.push(temp.right)
            } else temp.right = null
        }
    }
    console.log(root)
    return root    
};

let root = new TreeNode(1)
root.left = new TreeNode(2)
// root.right = new TreeNode(3)
// root.right.right = new TreeNode(5)
// root.right.left = new TreeNode(4)
deserialize(serialize(root))
// let num = ''
// let temp = new TreeNode(Number(''))
// console.log(temp)

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */