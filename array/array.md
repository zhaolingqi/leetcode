## 递增的3元子序列

给定一个未排序的数组，判断这个数组中是否存在长度为 3 的递增子序列。

数学表达式如下:

~~~
如果存在这样的 i, j, k,  且满足 0 ≤ i < j < k ≤ n-1，
使得 arr[i] < arr[j] < arr[k] ，返回 true ; 否则返回 false 。
~~~

说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1) 。

使用双指针，一个为small，另一个为big

当第三个数大于big 返回true

当第三个数小于big 大于small ，将big定位到该数

当第三个数小于small 并small定位到该数，big不变





递增的x元子序列通用解法：维护子序列数组

维护一个长度为x的数组，初始化为数组的第一个元素，然后遍历原数组

将遇到的元素与子序列数组从头开始比较，插入至合适位置





当遇到的元素比子序列数组最后一位大时，将其加入子序列数组

当比子序列数组最后一位小时，更新子序列数组，使得子序列”尽量小”



###  除自身以外数组的乘积

给定长度为 *n* 的整数数组 `nums`，其中 *n* > 1，返回输出数组 `output` ，其中 `output[i]` 等于 `nums` 中除 `nums[i]` 之外其余各元素的乘积。

**示例:**

```
输入: [1,2,3,4]
输出: [24,12,8,6]
```

**说明:** 请**不要使用除法，**且在 O(*n*) 时间复杂度内完成此题。

**进阶：**
你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组**不被视为**额外空间。）



保存两个数组，一个用来记录左侧乘积，另一个用来记录右侧乘积

要计算某个数在数组中除自身以外的乘积，只需计算该数左侧乘积和右侧乘积的乘积



#### 4. 寻找两个有序数组的中位数

给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

