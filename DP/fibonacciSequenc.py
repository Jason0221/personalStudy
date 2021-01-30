#!usr/bin/python 
import sys
def func(n):
    f = []
    for i in range(0, n + 2):
        f.append(sys.maxsize)
    f[0] = 0
    f[1] = 1
    # else:
    for i in range(2,n+1):
        f[i] = func(i - 1) + func(i - 2)
        f[i] = f[i - 1] + f[i - 2]
    return f[n]


print(func(0))

print(func(1))
print(func(2))
print(func(3))
print(func(4))
print(func(5))
print(func(6))
print(func(7))