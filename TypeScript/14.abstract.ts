// 声明一个抽象类
abstract class BasketBallPlayer{
  // 规定继承该类的类, 都必须实现skill 方法.
  abstract skill()
}

class C extends BasketBallPlayer{
  skill(){
    console.log('中锋');
  }
}
class PG extends BasketBallPlayer{
  skill(){
    console.log('得分后卫');
  }
}