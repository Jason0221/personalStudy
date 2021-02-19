const test = (name: string, age: number ) => {
  if (age >= 24) {
    console.log(name + ' revolve');
  } else {
    console.log(name + ' reject');
  }
}

const getResult = (name: string, age: number)=> {
  console.log(name);
  console.log(age);
}
test('jason', 25)
getResult('jason', 25)

// 上面两个函数, 参数有重复性, 可以通过interface 来优化
console.log('-----------------------------');

interface Player {
  name : string;
  age : number;
  skill ? : string;
}
const player = {
  name: 'jason',
  age: 25,
  skill: 'basketball'
}
const test_1 = (player: Player ) => {
  if (player.age >= 24) {
    console.log(player.name + ' revolve');
  } else {
    console.log(player.name + ' reject');
  }
}

test_1(player)
const getResult_1 = (player: Player)=> {
  console.log(player.name);
  console.log(player.age);
  if (player.skill) {
    console.log(player.skill);
  }
}
test_1(player)
getResult_1(player)