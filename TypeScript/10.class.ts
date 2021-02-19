// 类的声明
class Person {
  content = 'hello world'
  sayHello(){
    return this.content
  }
}

const guohao = new Person()
console.log(guohao.sayHello());

// 类的继承

class FE extends Person{

  showSkill(){
    return 'i can write FE code'
  }
  // 父类方法的重写与重写中使用父类的方法
  // 使用super调用父类.
  sayHello(){    
    return super.sayHello() + '----'
  }
}

const jason = new FE()

console.log(jason.sayHello()); // 调用父类的方法

console.log(jason.showSkill());
