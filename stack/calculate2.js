/**
 *   基本计算器 II
实现一个基本的计算器来计算一个简单的字符串表达式的值。

字符串表达式仅包含非负整数，+， - ，*，/ 四种运算符和空格  。 整数除法仅保留整数部分。
 */
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    const priorityInStack = {
        '+': 2,
        '-': 2,
        '*': 4,
        '/': 4,
        '#': 0
    }
    const priorityOutStack = {
        '+': 1,
        '-': 1,
        '*': 3,
        '/': 3,
        '#': 0
    }
    const valReg = /[0-9]/
    const optReg = /\+|\-|\*|\//
    let valStack = []
    let optStack = []
    optStack.push('#')
    let N = s.length
    let i = 0
    let temp = ''
    while (i < N) {
        let c = s[i]
        if (c === ' ') {
            i++
            continue
        }
        if (optReg.test(c)) {
            let top = optStack[optStack.length - 1]
            if (top === '#') {
                optStack.push(c)
            } else {
                if (priorityInStack[top] < priorityOutStack[c]) {
                    optStack.push(c)
                } else {
                    // let opt = optStack.pop()
                    while(priorityInStack[top] >= priorityOutStack[c]) {
                        let val1 = valStack.pop()
                        let val2 = valStack.pop()
                        optStack.pop()
                        let result = cal(val1, val2, top)
                        valStack.push(result)
                        top = optStack[optStack.length - 1]
                    }
                    optStack.push(c)
                }
            }
        } else {
            if ((i < N - 1 && optReg.test(s[i + 1])) || i === N - 1 || s[i + 1] === ' ') {
                temp += c
                valStack.push(temp)
                temp = ''
            } else if (!optReg.test(s[i + 1])) {
                temp += c
            }
        }
        i++
    }
    let top = optStack.pop()
    while (top !== '#') {
        let val1 = valStack.pop()
        let val2 = valStack.pop()
        let result = cal(val1, val2, top)
        valStack.push(result)
        top = optStack.pop()
    }
    console.log(valStack[0])
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
                result = Math.floor(val2 / val1)
                break
        }
        return result
    }
};

calculate("1*2-3/4+5*6-7*8+9/10")
