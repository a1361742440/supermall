<template>
  <div class="bottom-bar">
    <div class="bottom-left bar-item">
      <div class="service">
        <i class="service-icon icon"></i>
        <span>客服</span>
      </div>
      <div class="shop">
        <i class="shop-icon icon"></i>
        <span>店铺</span>
      </div>
      <div class="Collection">
        <i class="Collection-icon icon"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bottom-right bar-item">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBottomBar",
  methods:{
      addToCart(){
          this.$emit('addToCart')
      }
  }
};
</script>

<style scoped>
.bottom-bar {
  height: 58px;
  position: fixed;
  background-color: #fff;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  text-align: center;
}
.bottom-bar .bar-item {
  flex: 1;
  display: flex;
}
.bottom-bar .bar-item > div {
  flex: 1;
}
.bottom-left .icon {
  margin: 10px auto 3px;
  display: block;
  width: 22px;
  height: 22px;
  background: url("../../../assets/img/detail/detail_bottom.png") 0 0 /100%;
}
.bottom-left{
    font-size: 13px;
}
.bottom-left .service-icon {
  background-position: 0 -54px;
}
.bottom-left .shop-icon {
  background-position: 0 -98px;
}
.bottom-right {
  font-size: 15px;

  line-height: 58px;
}
.bottom-right .cart {
  background-color: orange;
  color: black;
}
.bottom-right .buy {
  background-color: var(--color-high-text);
  color: #fff;
}
</style>