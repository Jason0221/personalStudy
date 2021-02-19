class Person_4 {
  private _name = 'jason';
  get name(){
    return this._name
  }
  set name(name){
    this._name = this._name + name
  }
}

const jason_4 = new Person_4()
console.log(jason_4.name);
jason_4.name = ' hello'
console.log(jason_4.name);


// 静态类
class Person_5 {
  // 静态类的方法, 调用时, 不需要new一个实例 而是通过类直接调用
  static sayHi(){
    return 'hello world'
  }
  public readonly _name:string;
  constructor(name: string){
    this._name = name;
  }
}
console.log(Person_5.sayHi());

const person_5 = new Person_5('jason');

// person_5.name = 'guohao'; // 此处会报错, 因为_name是只读属性.

