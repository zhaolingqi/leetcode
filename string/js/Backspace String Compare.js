"use strict";
/**
 * 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。
 * 注意：如果对空文本输入退格字符，文本继续为空。
 */
function backspaceCompare(S, T) {
    backspaceString(S);
    function backspaceString(S) {
        let newStrArr = [];
        const N = S.length;
        let count = 0;
        for (let i = N - 1; i >= 0; i--) {
            if (S[i] === '#') {
                count++;
                continue;
            }
            if (count > 0) {
                count--;
            }
            else {
                newStrArr.unshift(S[i]);
            }
        }
        console.log(newStrArr);
        return newStrArr.join("");
    }
    return false;
}
;
backspaceCompare("wr######c#a", "a#");
