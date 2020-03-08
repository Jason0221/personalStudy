

try{
    let d = null;
    console.log(d.xxx)
} catch (error) {
    console.log('-----');
    console.log(error.message)
}
console.log('错误之后的代码, 依然可以继续执行');

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

