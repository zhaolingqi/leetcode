/**
 * 统计所有小于非负整数 n 的质数的数量。

示例:

输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    // let count = 0
    // for(let i = 2; i <= n; i++) {
    //     if(isPrime(i)) {
    //         count++
    //     }
    // }
    // console.log(count)
    // return count

    // function isPrime(num) {
    //     if(num === 2 || num === 3) return true
    //     let mid = Math.ceil(Math.sqrt(num))
    //     for(let i = 2; i <= mid; i++) {
    //         if(num % i === 0) return false
    //     }
    //     return true
    // }

    let arr = new Array(n).fill(true)
    arr[0] = false
    arr[1] = false
    for(let i = 2; i < n; i++) {
        let temp = 2
        while(temp * i < n) {
            arr[temp*i] = false
            temp++
        }
    }
    return arr.reduce((pre, element) => {
        if(element === true)
            pre++
        return pre
    }, 0)

};

countPrimes(11)