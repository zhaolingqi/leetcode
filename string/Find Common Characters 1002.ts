/**
 * 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。
 * 例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。
 * 你可以按任意顺序返回答案。
 */
function commonChars(A: string[]): string[] {
  const N: number = A.length;
  let res: string[] = [];
  if(N < 1) return [];
  if(N === 1) return A[0].split(""); 
  let firstStr: string = A[0];
  let map: Map<string, number> = new Map();
  for(const ch of firstStr) {
    let val: number | undefined = map.get(ch);
    if(val) {
      map.set(ch, val + 1);
      for(let i = 1; i < N; i++) {
        let count = val ++;
        for(const ch2 of A[i]) {
          if(ch2 === ch) count --;
        }
        if(count > 0) break;
        else {
          if(i === N - 1) res.push(ch);
        }
      }
      
    } else {
      for(let i = 1; i < N; i++) {
        if(A[i].indexOf(ch) === -1) break;
        else {
          if(i === N - 1) res.push(ch);
        }
      }
      map.set(ch, 1);
    }
  }
  console.log(res);
  return res;
};
commonChars(["bella","label","roller"]);