#!/usr/bin/python
#encoding=utf-8

a = 2
b = 1
c = True
d = 1+2j
print(type(a))
print(type(b))
print(type(c))
print(type(d))

a^=b;b^=a;a^=b
print(a,b)