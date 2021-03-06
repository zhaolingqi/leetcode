### 分割回文串

给定一个字符串 *s*，将 *s* 分割成一些子串，使每个子串都是回文串。

返回 *s* 所有可能的分割方案。

**示例:**

```
输入: "aab"
输出:
[
  ["aa","b"],
  ["a","a","b"]
]
```



首先，定义$dp[i][j]$ 表示字符串$s[i,j]$是否是回文字符串
$$
dp[i][j]=
\begin{cases}
true, &\text s[i] === s[j]&\&\& &(i + 1 >= j - 1& || &p[i + 1][j - 1])
\\false, & else
\end{cases}
$$
再利用分治的思想，如对于

~~~
aabb
先考虑在第 1 个位置切割，a | abb
这样我们只需要知道 abb 的所有结果，然后在所有结果的头部把 a 加入
abb 的所有结果就是 [a b b] [a bb]
每个结果头部加入 a，就是 [a a b b] [a a bb]

aabb
再考虑在第 2 个位置切割，aa | bb
这样我们只需要知道 bb 的所有结果，然后在所有结果的头部把 aa 加入
bb 的所有结果就是 [b b] [bb]
每个结果头部加入 aa,就是 [aa b b] [aa bb]

aabb
再考虑在第 3 个位置切割，aab|b
因为 aab 不是回文串，所有直接跳过

aabb
再考虑在第 4 个位置切割，aabb |
因为 aabb 不是回文串，所有直接跳过

最后所有的结果就是所有的加起来
[a a b b] [a a bb] [aa b b] [aa bb]
~~~



### 单词搜索

给定一个二维网格和一个单词，找出该单词是否存在于网格中。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

示例:

~~~
board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

给定 word = "ABCCED", 返回 true.
给定 word = "SEE", 返回 true.
给定 word = "ABCB", 返回 false.
~~~

采用DFS加回溯的方法进行，用二维数组flags保存状态，表明该点是否已搜索过。





给定一个二维网格 **board** 和一个字典中的单词列表 **words**，找出所有同时在二维网格和字典中出现的单词。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。

**示例:**

```
输入: 
words = ["oath","pea","eat","rain"] and board =
[
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]

输出: ["eat","oath"]
```



###  有效的字母异位词 

给定两个字符串 *s* 和 *t* ，编写一个函数来判断 *t* 是否是 *s* 的字母异位词。

**示例 1:**

```
输入: s = "anagram", t = "nagaram"
输出: true
```

**示例 2:**

```
输入: s = "rat", t = "car"
输出: false
```

**说明:**
你可以假设字符串只包含小写字母。

**进阶:**
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？



遍历s中的每个字符，在t中找到这个字符并将其删除，若找不到，则返回false

先对数组排序后比较

拿一个26位的数组记录s中每个字符的出现次数，在遍历t，将次数减去，若出现小于0时，返回false

###  无重复字符的最长子串

给定一个字符串，请你找出其中不含有重复字符的 **最长子串** 的长度。

**示例 1:**

```
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

**示例 2:**

```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

**示例 3:**

```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```



**解题思路：**滑动窗口的思想



### 字符串的排序 567

给定两个字符串 **s1** 和 **s2**，写一个函数来判断 **s2** 是否包含 **s1** 的排列。

换句话说，第一个字符串的排列之一是第二个字符串的子串。

**示例1:**

```
输入: s1 = "ab" s2 = "eidbaooo"
输出: True
解释: s2 包含 s1 的排列之一 ("ba").
```

 

**示例2:**

```
输入: s1= "ab" s2 = "eidboaoo"
输出: False
```

 

**注意：**

1. 输入的字符串只包含小写字母
2. 两个字符串的长度都在 [1, 10,000] 之间



**解题思路**

要判断s2的子串是否包含s1的所有排序，即判断s2的某个子串的每个字母出现的频率和s1的相同即可。

采用滑动窗口的思想，用两个数组保存s2的子串和s1的字母出现次数。窗口在s2滑动，依次进行比较



### #71 简化路径

以 Unix 风格给出一个文件的绝对路径，你需要简化它。或者换句话说，将其转换为规范路径。

在 Unix 风格的文件系统中，一个点（.）表示当前目录本身；此外，两个点 （..） 表示将目录切换到上一级（指向父目录）；两者都可以是复杂相对路径的组成部分。更多信息请参阅：Linux / Unix中的绝对路径 vs 相对路径

请注意，返回的规范路径必须始终以斜杠 / 开头，并且两个目录名之间必须只有一个斜杠 /。最后一个目录名（如果存在）不能以 / 结尾。此外，规范路径必须是表示绝对路径的最短字符串。

**解题思路**

用状态机的思想

