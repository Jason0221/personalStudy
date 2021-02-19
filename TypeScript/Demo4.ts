/* 
    类型注解  annotation
    类型推断  inference
*/

let count_3 : number;  // : number 类型注解

count_3 = 123;

// 类型推断, 自动推断 huying 的类型为 string
let huying = 'hello'

function getTotal(one : number, two : number) { // 此处需要添加类型注解, one two的类型会被推断为any
    return one + two
}
let total  = getTotal(1,2); //  此处total  会被推断出为number(因为是两个number 相加)

// 宗旨: 
// 如果ts 能自动能分析出变量类型, 则不需要做类型注解
// 如果ts 不能自动分析出变量类型, 则需要类型注解
