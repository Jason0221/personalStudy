const p = new Promise( (resolve, reject) => { // 执行器函数
    // 2. 执行异步操作任务
    setTimeout( ()=> {
        const time = Date.now() //如果当前时间是偶数,成功, 反之失败
        console.log(time);
        
        if ( time % 2 === 0) {
            resolve('成功数据:'+time)
        }else {
            reject('失败数据,'+time)
        }

    }, 10)
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