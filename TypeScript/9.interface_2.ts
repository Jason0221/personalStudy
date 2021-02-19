interface Employee {
  name: string;
  age: number;
  skill ? : string;
  [propname: string] : any    // 可以是任意值
}
const salesmen = {
  name: 'huying',
  age: 21,
  skill: 'sale',
  hobby: 'tea'
}

const test_2 = (salesmen:Employee) => {
  console.log(salesmen.name);
  console.log(salesmen.age);
  console.log(salesmen.skill);
  console.log(salesmen.hobby);
}
test_2(salesmen)

// 接口对类的限制

class Jason implements Employee {
  name = 'jason';
  age = 23;
}

// 接口的继承

interface Manager extends Employee {
  say(): string
}

