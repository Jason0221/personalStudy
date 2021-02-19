// 数组的类型注解
const numAry : number[] = [1,2,3]
const stringAry : string[] = [ '1', '2'];
const undefinedAry : undefined[] = [undefined, undefined]; 
const arr : (number | string)[] = [1, 'string' ];

const Test : {age: number, name:string}[] = [
  {age: 28, name:'jason'},
  {age: 18, name: 'holly'}
]

// 可以换个写法: 

type jason = {age: number, name:string}[]

const Test_2 : jason = [
  {age: 28, name:'jason'},
  {age: 18, name: 'holly'}
]

// 也可以用类的形式

class Jason{
  age: number;
  name: string;
}
const Test_3 : Jason[] = [
  {age: 27, name: 'hello'}
]