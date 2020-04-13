<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt />
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left shop-middle-item">
        <div>
          <div>{{shop.Sells}}</div>
          <div class="middle-left-text">总销量</div>
        </div>
        <div>
          <div>
            <div>{{shop.goods}}</div>
            <div class="middle-left-text">全部宝贝</div>
          </div>
        </div>
      </div>
      <div class="shop-middle-right shop-middle-item">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more':item.isBetter}">
              <span>{{item.isBetter?"高":"低"}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bootom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style scoped>
.shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid rgba(0, 0, 0, 0.1);
}
.shop-top {
  line-height: 45px;
  display: flex;
  text-align: center;
}
.shop-top img {
  height: 45px;
  width: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.shop-top span {
  margin-left: 10px;
}
.shop-middle {
  display: flex;
  margin-top: 15px;
  align-items: center;
}
.shop-middle-item {
  flex: 1;
}
.shop-middle-left {
  display: flex;
  color: #333;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: space-evenly;
}
.middle-left-text {
  margin-top: 5px;
}
.shop-middle-right {
  font-size: 13px;
  color: #333;
}
.shop-middle-right table {
  margin-left: 30px;
  width: 120px;
}
.shop-middle-right table td {
  padding: 5px 0;
}
.shop-middle-right .score {
  color: green;
}
.shop-middle-right .score-better  {
  color: red;
}
.shop-middle-right .better span {
  background-color: green;
  color: #fff;
  text-align: center;
}

.shop-middle-right .better-more span {
  background-color: red;
  color: #fff;
}
.shop-bootom {
  text-align: center;
  margin-top: 10px;
}

.enter-shop {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
    
}
</style>