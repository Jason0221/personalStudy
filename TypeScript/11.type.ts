// 类的访问类型


class Person_1 {
  // 默认类型为 public,及在类的内部和外部都可以被调用
  name: string;
  public sayHello(){
    console.log(this.name + ' hello');
  };
  private gender = 'male';
  showGender(){
    console.log(this.gender);
  };
  protected skill = 'FE';
}

const person =  new Person_1();

person.name = 'jason';

console.log(person.name);
person.sayHello()
// person.gender = 'famele'; // 此处会报错, 
person.showGender()

// 
class FE_1 extends Person_1{
  public showSkill(){
    console.log(this.skill); // 此处不报错
    // console.log(this.gender); // 此处会报错, private类型
    
    
  }
}