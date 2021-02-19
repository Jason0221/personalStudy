class Person_2 {
  public name: string;
  constructor(name: string) {
    this.name = name
  }
  // 上面3行, 可以简化为下面一行
  // constructor(public name: string)
}
// 通过构造函数, 传值
const person_2 = new Person_2('guohao');
class FE_2 extends Person_2{
  constructor(public age : number){
    super('jason')
  }
}
console.log(person_2.name);

const person_3 = new FE_2(18)
console.log(person_3.age);

