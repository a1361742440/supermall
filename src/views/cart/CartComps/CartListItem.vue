<template>
  <div class="shop-item">
    <div class="item-selector">
      <check-bottom class="shop-bottom" :isChecked="product.checked" @click.native="checkClick"></check-bottom>
    </div>
    <div class="item-img">
      <img :src="product.image" alt />
    </div>
    <div class="item-info">
      <div class="info-title">{{product.title}}</div>
      <div class="info-desc">{{product.desc}}</div>
      <div class="info-bottom">
        <div class="bottom-price left">￥{{product.price}}</div>
        <div class="bottom-count right">X{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBottom from "../../../components/content/checkbottom/CheckBottom";
export default {
  name: "CartListItem",
  components: {
    CheckBottom
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    },

  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked;
    }
  }
};
</script>
<style scoped>
.item-selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.shop-item {
  width: 100%;
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-img {
  padding: 5px;
}
.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.info-title,
.info-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.info-desc {
  padding-top: 15px;
  padding-bottom: 30px;
  font-size: 13px;
}

.info-bottom .bottom-price {
  font-size: 17px;
  color: orangered;
}
.info-bottom .bottom-count {
  padding-right: 5px;
}
.left {
  float: left;
}
.rigth {
  float: right;
}
</style>