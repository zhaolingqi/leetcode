/**
 * 根据逆波兰表示法，求表达式的值。

有效的运算符包括 +, -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

说明：

整数除法只保留整数部分。
给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
 * 
 */


/**
* @param {string[]} tokens
* @return {number}
*/
var evalRPN = function (tokens) {
    let i = 0
    let valStack = []
    const optReg = /\+|\-|\*|\//
    let N = tokens.length
    while (i < N) {
        let c = tokens[i]
        if (c === '+' || c === '-' || c === '*' || c === '/') {
            let val1 = valStack.pop()
            let val2 = valStack.pop()
            let result = cal(val1, val2, c)
            valStack.push(result)
        } else {
            valStack.push(c)
        }
        i++
    }
    console.log(valStack)
    return valStack[0]
    function cal(val1, val2, c) {
        val1 = parseInt(val1)
        val2 = parseInt(val2)
        let result
        switch (c) {
            case '+':
                result = val1 + val2
                break
            case '-':
                result = val2 - val1
                break
            case '*':
                result = val1 * val2
                break
            case '/':
                result = parseInt(val2 / val1)
                break
        }
        return result
    }
};

tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
evalRPN(tokens)
const reg = /\+|\-|\*|\//
console.log(reg.test('-11'))
