<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-services">
      <span v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" />
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.base-info {
  padding: 8px 8px 0;
}
.info-title {
  font-size: 18px;
  color: #222;
  font-weight: bolder;
}
.info-price {
  padding: 12px 0 15px;
}
.n-price {
  font-size: 27px;
  margin-right: 5px;
  color: var(--color-high-text);
}
.o-price {
  text-decoration: line-through;
}
.discount {
  background-color: var(--color-high-text);
  padding: 2px 5px;
  color: #fff;
  border-radius: 8px;
  margin-left: 5px;

  /**使用定位上浮一点 */
  position: relative;
  top: -8px;
}

.info-other {
  font-size: 13px;
  display: flex;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  line-height: 30px;
  margin-top: 5px;
  justify-content: space-between;
}

.info-services {
  display: flex;
  justify-content: space-between;
  margin: 20px 0 20px;
  color:#333;
  font-size: 13px;
}

.info-services img {
  width: 14px;
  height: 14px;
  position: relative;
  top:2px;
}
</style>