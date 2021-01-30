/**
 *  基础静态类型与对象静态类型
 * 
 * 
 */

 const  count_3 : number = 100; // 基础静态类型 null undefined boolean void symbol


const Person: {
    name: string,
    age: number

} = {
    name: 'guohao',
    age: 20
}

// 对象类型: 

// 数组类型
const Persons : string [] = ['jason', 'guohao']; // Persons 是个数组, 数组中必须全是字符串;

// 类类型
class Fruits{};
const banana : Fruits = new Fruits();

// 函数类型
const sayHi: () => string = ()=>('1')

