/*
    函数参数的类型
*/


function getTotal(one: number, two: number) : number {  // 函数返回类型的注解, 在参数后面添加类型注解
    return one + two;
}

let total : number = getTotal(1,2);
 

function sayHello() : void { // 不返回的函数, 需要将返回类型注解为 void 
    console.log('Hello');
}


// 不能执行所有语句的函数, 或者 函数里有死循环的函数,  返回值注解为 never
function errorFun() : never {
    throw new Error();
    console.log('helo errorFun');
    
}

function forNever() : never {
    while(true) {}
    console.log('hello forNever');
}

function add( {one, two} : {one: number, two: number} ) {
    return one + two
}

let total_2 = add({one:1, two: 2})

console.log(total_2);



