/**
 * 给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

 */
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let stack = []
    let res = []
    let count = []
    for (let i = 0; i < s.length; i++) {
        let ch = s[i]
        if (ch === ']') {
            let tempStr = []
            let tempCh = stack.pop()
            while (tempCh !== '[') {
                tempStr.unshift(tempCh)
                tempCh = stack.pop()
            }
            let count = Number(stack.pop())
            let str = new Array(count).fill(tempStr.join("")).join("")
            stack.push(str)
        } else {
            if (/[0-9]/.test(ch)) {
                while (/[0-9]/.test(ch)) {
                    count.push(ch)
                    ch = s[++i]
                }
                stack.push(count.join(""))
                count.length = 0
            } 
            stack.push(ch)
        }
    }
    while (stack.length > 0) {
        res.unshift(stack.pop())
    }
    return res.join("")
};
let res = decodeString('10[abc]3[cd]ef')
console.log(res)