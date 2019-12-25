/**
 * 给定两个整数，分别表示分数的分子 numerator 和分母 denominator，以字符串形式返回小数。

如果小数部分为循环小数，则将循环的部分括在括号内。

示例 1:

输入: numerator = 1, denominator = 2
输出: "0.5"
示例 2:

输入: numerator = 2, denominator = 1
输出: "2"
示例 3:

输入: numerator = 2, denominator = 3
输出: "0.(6)"
 */
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
    if(numerator === 0) return '0'
    let map = new Map()
    let flag = true
    if(!((numerator > 0 && denominator > 0) || (numerator < 0 && denominator < 0))) {
        flag = false
    }

    numerator = Math.abs(numerator)
    denominator = Math.abs(denominator)
    let integer = Math.floor(numerator / denominator)
    let decimal = []
    numerator = numerator % denominator
    if(numerator === 0) {
        decimal.unshift(integer)
        if(flag === false) decimal.unshift('-')
        decimal = decimal.join('')
        return decimal
    }
    map.set(numerator, 0)
    let i = 1
    while (true) {
        let temp = Math.floor(numerator * 10 / denominator)
        decimal.push(temp)
        numerator = (numerator * 10) % denominator
        if (numerator === 0) break
        if (!map.has(numerator)) {
            map.set(numerator, i)
            i++
        } else {
            let start = map.get(numerator)
            let end = i
            // decimal中 start和end之间的数据循环
            // 在decimal[start]插入（，其余数据后移一位，最后插入）
            let tempDecimal1 = decimal.slice(0, start)
            let tempDecimal = decimal.slice(start)
            tempDecimal.push(')')
            decimal = tempDecimal1
            decimal[start] = '('
            decimal.push(...tempDecimal)
            break;
        }
    }
    decimal.unshift('.')
    decimal.unshift(integer)
    if(flag === false) decimal.unshift('-')
    decimal = decimal.join('')
    return decimal
    // console.log(integer, decimal, numerator / denominator)
};
console.log(fractionToDecimal(1, 214748364))
// console.log(parseInt(1/214748364), Math.floor(0.6))