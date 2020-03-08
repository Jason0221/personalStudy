### 第一章  准备
#### 1. 区别实例函数与函数对象

*   函数对象:将函数作为对象使用,简称为函数对象
*   new 函数产生的对象,简称为对象
```js
function Fn () { // 一个构造函数

}

coonst fn = new Fn();   // 返回一个实例对象:  fn, 简称对象

console.log(Fn.prototype)  // Fn 是函数对象

Fn.bind()


```

#### 2. 两种类型的回调函数

2.1 同步回调: 
* 立即执行,执行完了才结束,不会放入回调队列中
```js
// 同步回调
const arr = [1,2,3];
arr.forEach( item => console.log(item))// 先执行
console.log('hello') // 后执行
```


2.2 异步回调: 
* 不会立即执行, 会放入回调队列中

```js
//异步回调
setTimeout( ()=>{
    console.log('timeOut callback')// 后执行
},0)
console('hello')// 先执行
```

#### JS的error处理

3.1  错误的类型

* Error: 所有错误的父类型
* ReferenceError: 引用的变量不存在
* TypeError: 数据类型不正确
* RangeError: 数据值不在其允许的范围内
* SyntaxError: 语法错误

3.2 错误处理: 
捕获错误: try... catch
抛出异常:   throw new Error('') 

```js
// 捕获异常
try{
    let d = ''
    console.log(d.xxx)
} catch (error) {
    console.log(error)
}


//抛出并捕获异常
function buildError(num) {
    if (num % 2 === 1) {
        console.log('输入参数为奇数,不抛异常')
    } else {
        throw new Error('输入参数为偶数,抛出异常') // 抛出一个异常
    }
}

try {
    buildError(2)
} catch (error) { // 捕获抛出的异常, 进行处理
    console.log(error.message);     
}
```