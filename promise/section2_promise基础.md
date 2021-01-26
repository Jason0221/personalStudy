### promise 是什么
1. 定义
js中进行异步编程的新解决方案,

是一个构造函数,用来封装一个异步操作并可以获取其结果

2. promise的状态改变
* pendding --->  resolved
* pending ---> rejected

只有这两种状态的改变情况, 一个promise对象只能改变一次状态, 不论是变为成功还是变为失败,
都有一个结果数据, 一般成功的结果数据, 叫value, 失败的结果数据, 叫reason

3. 基本流程

* 创建一个Promise 对象 new Prmise(), 状态为pending状态
* 执行异步操作
* 成功
    * 状态为 resolved
    * 执行回调  onResolved()函数,  为then()
    * 返回一个新的Promise对象
* 失败
    * 状态为 rejected
    * 执行回调 onRejected*()函数,  为then()或catch()
    * 返回一个新的Promise对象
4. 基本使用
```js
// 1. 创建一个promise对象
const p = new Promise( (resolve, reject) => { // 执行器函数
    // 2. 执行异步操作任务
    setTimeout( ()=> {
        const time = Date.now() //如果当前时间是偶数,成功, 反之失败
        if ( time % 2 === 0) {
            resolve('成功数据:',time)
        }else {
            reject('失败数据,',time)
        }

    }, 1000)
    // 3.1 如果成功了, 调用resolve(value)

    // 3.2 如果失败了, 调用 reject(reason)
})

p.then(
    value => { //接收得到成功的value数据 onResolved
        console.log('成功的回调:', value)
    },
    reason => { // 接收得到失败的reason数据  onRejected
        console.log('失败的回调: ', reason)
    }
)

```