/**
 * 编写一个算法来判断一个数是不是“快乐数”。

一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。

示例: 

输入: 19
输出: true
解释: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    let arr = divide(n)
    let newNumber = arr.reduce((pre, e) => {
        pre += e * e
        return pre
    }, 0)
    let set = new Set()
    while(newNumber !== 1) {
        newNumber = divide(newNumber).reduce((pre, e) => {
            pre += e * e
            return pre
        }, 0)
        if(set.has(newNumber) && newNumber !== 1) return false
        set.add(newNumber)
    }
    return true


    function divide(n) {
        let arr = []
        while(n > 0) {
            arr.unshift(n % 10)
            n = Math.floor(n / 10)
        }
        return arr
    }
};
console.log(isHappy(19))