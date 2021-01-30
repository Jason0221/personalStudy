#!/usr/bin/python
#encoding=utf-8
import sys
max = sys.maxsize

def getCoinNum (coinList, result):

    # 构建一个列表, 每个位置的值都为最大正整数
    f = []
    for i in range(0,result + 1):
        f.append(max)
    
    n = len(coinList) # 一共有n种硬币

    f[0] = 0 # 手动定义第0位置的值为0, 即拼成0元, 最少需要0个硬币

    for i in range(0,len(f)): #  由 0-- 27 进行遍历, 即计算拼出每一个值需要的结果, 由小到大的顺序计算
        for j in range(n): # 对于每一个结果来说,  进行最后一步为 2,5,7 的结果的计算.
            coin = coinList[j]
            if i >= coin and f[i - coin] != max: # 开始条件和边界条件. 
                f[i] = min([f[i - coin] + 1, f[i]])

    for i in range(0,len(f)): # 不符合调节的结果, 变为-1
        if f[i] == max:
            f[i] = -1

    return f


coinList = [2, 5, 7]
a = getCoinNum(coinList, 5)
print(a)