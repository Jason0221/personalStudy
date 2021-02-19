/**
 *  基础静态类型与对象静态类型
 * 
 * 
 */

// 基础静态类型
const score : number = 100;
const myName: string = 'jason';

// 对象类型

// 1. 对象

const fruits : {
    name: string,
    from: string
} = {
    name: 'apple',
    from: 'shannxi'
}

// 2. 数组
const dogs : string [] = ['keji', 'erha'];

// 3.类

class Person{};

const jason_2 : Person = new Person()

// 4.函数
// sayHi  函数名
// () => string  指定返回值必须为 字符串
// = () => {return 'hello'} 函数主体
const sayHi : () => string = ()=>{
    return 'hello'
}


