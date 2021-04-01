<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" id="order-list" class="pos-order">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table border style="width: 100%" :data="tableData">
              <el-table-column
                prop="goodsName"
                label="商品名称"
              ></el-table-column>
              <el-table-column
                prop="count"
                label="数量"
                width="50"
              ></el-table-column>
              <el-table-column
                prop="price"
                label="金额"
                width="70"
              ></el-table-column>
              <el-table-column label="操作" fixed="right">
                <template scope="scope">
                  <el-button type="text" size="small">删除</el-button>
                  <el-button type="text" size="small">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="tatal">
                数量:{{totalCount}}
                金额 : {{totalMoney}}
            </div>
            <div class="div-btn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger">删除</el-button>
              <el-button type="success">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单"> 挂单 </el-tab-pane>
          <el-tab-pane label="外卖"> 外卖 </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="15">
        <div class="title">常用商品</div>
        <div class="often-goods-list">
          <ul>
            <li v-for="goods in oftenGoods" :key="goods.goodsId" @click="addOrderList(goods)">
              <span>{{ goods.goodsName }}</span>
              <span class="o-price">¥{{ goods.price }}</span>
            </li>
          </ul>
        </div>
        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <ul class="cookList">
                <li v-for="goods in typeGoods_0" :key="goods.goodsId" @click="addOrderList(goods)">
                  <span class="foodImg"
                    ><img :src="goods.goodsImg" width="100%" height="100%"
                  /></span>
                  <span class="foodName">{{ goods.goodsName }}</span>
                  <span class="foodPrice">￥{{ goods.price }}</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <ul class="cookList">
                <li v-for="goods in typeGoods_1" :key="goods.goodsId"  @click="addOrderList(goods)">
                  <span class="foodImg"
                    ><img :src="goods.goodsImg" width="100%"
                  /></span>
                  <span class="foodName">{{ goods.goodsName }}</span>
                  <span class="foodPrice">￥{{ goods.price }}</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <ul class="cookList">
                <li v-for="goods in typeGoods_2" :key="goods.goodsId"  @click="addOrderList(goods)">
                  <span class="foodImg"
                    ><img :src="goods.goodsImg" width="100%"
                  /></span>
                  <span class="foodName">{{ goods.goodsName }}</span>
                  <span class="foodPrice">￥{{ goods.price }}</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <ul class="cookList">
                <li v-for="goods in typeGoods_3" :key="goods.goodsId"  @click="addOrderList(goods)">
                  <span class="foodImg"
                    ><img :src="goods.goodsImg" width="100%"
                  /></span>
                  <span class="foodName">{{ goods.goodsName }}</span>
                  <span class="foodPrice">￥{{ goods.price }}</span>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "pos",
  data() {
    return {
      tableData: [],
      oftenGoods: [
        {
          goodsId: 1,
          goodsName: "香辣鸡腿堡",
          price: 18,
        },
        {
          goodsId: 2,
          goodsName: "田园鸡腿堡",
          price: 15,
        },
        {
          goodsId: 3,
          goodsName: "和风汉堡",
          price: 15,
        },
        {
          goodsId: 4,
          goodsName: "快乐全家桶",
          price: 80,
        },
        {
          goodsId: 5,
          goodsName: "脆皮炸鸡腿",
          price: 10,
        },
        {
          goodsId: 6,
          goodsName: "魔法鸡块",
          price: 20,
        },
        {
          goodsId: 7,
          goodsName: "可乐大杯",
          price: 10,
        },
        {
          goodsId: 8,
          goodsName: "雪顶咖啡",
          price: 18,
        },
        {
          goodsId: 9,
          goodsName: "大块鸡米花",
          price: 15,
        },
        {
          goodsId: 20,
          goodsName: "香脆鸡柳",
          price: 17,
        },
      ],
      typeGoods_0: {
        1: {
          goodsId: 1,
          goodsImg: require("@/assets/xianglajituibao.png"),
          goodsName: "香辣鸡腿堡",
          price: 18,
        },
        2: {
          goodsId: 2,
          goodsImg: require("@/assets/tianyuanjituibao.jpg"),
          goodsName: "田园鸡腿堡",
          price: 15,
        },
        3: {
          goodsId: 3,
          goodsImg: require("@/assets/hefenghanbao.jpg"),
          goodsName: "和风汉堡",
          price: 15,
        },
      },
      typeGoods_1: {
        1: {
          goodsId: 4,
          goodsImg: require("@/assets/jitui.jpg"),
          goodsName: "脆皮炸鸡腿",
          price: 10,
        },
        2: {
          goodsId: 5,
          goodsImg: require("@/assets/jikuai.jpg"),
          goodsName: "魔法鸡块",
          price: 20,
        },
        3: {
          goodsId: 6,
          goodsImg: require("@/assets/jimihua.png"),
          goodsName: "大块鸡米花",
          price: 15,
        },
        4: {
          goodsId: 7,
          goodsImg: require("@/assets/jiliu.jpg"),
          goodsName: "香脆鸡柳",
          price: 17,
        },
      },
      typeGoods_2: {
        1: {
          goodsId: 8,
          goodsImg: require("@/assets/kele.png"),
          goodsName: "可乐大杯",
          price: 10,
        },
        2: {
          goodsId: 9,
          goodsImg: require("@/assets/kafei.jpg"),
          goodsName: "雪顶咖啡",
          price: 18,
        },
      },
      typeGoods_3: {
        1: {
          goodsId: 10,
          goodsImg: require("@/assets/quanjaitong.png"),
          goodsName: "快乐全家桶",
          price: 80,
        },
      },
      totalMoney: 0,
      totalCount: 0
    };
  },
  components: {},
  created: function () {
    axios
      .get(
        "https://www.fastmock.site/mock/0bf6a5bae7eab8507e44b56191ddff36/vuepos/oftenGoods"
      )
      .then((res) => {
        this.oftenGoods = res.data.oftenGoods;
      })
      .catch();
  },
  mounted: function () {
    var orderHeight = document.body.clientHeight;
    document.getElementById("order-list").style.height = orderHeight + "px";
  },
  methods: {
    addOrderList(goods){
      // 商品是否存在订单列表中
      let isHave = false
      for (let i = 0; i < this.tableData.length; i++) {
        const element = this.tableData[i];
        if (this.tableData[i].goodsId === goods.goodsId) {
          isHave = true
        }
      }
      // 有  数量加一
      if (isHave) {
       let arr = this.tableData.filter( item =>  item.goodsId === goods.goodsId)
       arr[0].count +=1
      } else {
        // 无  新增
        let newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count: 1
        }
        this.tableData.push(newGoods)

      }
      this.totalCount = 0
      this.totalMoney = 0
      this.tableData.forEach(element => {
        this.totalCount += element.count;
        this.totalMoney = this.totalMoney + (element.price * element.count)
      })


    }
  }
};
</script>

<style scoped>
.pos {
  text-align: center;
}
.pos-order {
  background: #f9fafc;
  border-right: 1px solid #c0ccda;
}
.div-btn {
  margin-top: 10px;
}
.title {
  height: 19px;
  border-bottom: 1px solid #d3dce6;
  background: #f9fafc;
  padding: 10px;
  text-align: left;
}
.often-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 5px;
  background-color: #fff;
  cursor: pointer;
}
.o-price {
  color: #58b7ff;
}
.goods-type {
  clear: both;
}
.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auot;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
}
.cookList li span {
  display: block;
  float: left;
}
.foodImg {
  width: 40%;
  height: 80px;
}
.foodName {
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}
.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
.tatal{
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid lightgray;
}
</style>  
