<template>
  <div class="bottom-bar">
    <div class="checked">
      <check-bottom class="check-bottom" :isChecked="isSelectAll" @click.native="checkClick"></check-bottom>
      <span class="checked-all">全选</span>
    </div>
    <div class="total">
      <span>合计:￥{{totalPrice}}</span>
    </div>
    <div class="calculate" @click="calcClick">
      <span>去计算({{checkLength}})</span>
    </div>
  </div>
</template>
<script>
import CheckBottom from "../../../components/content/checkbottom/CheckBottom";
import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  components: {
    CheckBottom
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return this.cartList
        .filter(item => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.count * item.price;
        }, 0)
        .toFixed(2);
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).length;
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false;
      //return !this.cartList.find(item => !item.checked);
      for (let item of this.cartList) {
        if (!item.checked) {
          return false;
        }
      }
      return true;
    }
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.forEach(item => (item.checked = false));
      } else {
        this.cartList.forEach(item => (item.checked = true));
      }
    },
    calcClick() {
      if (this.checkLength < 1) {
        this.$toast.show("请选择要购买的商品", 2000);
      }
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 49px;
  right: 0;
  left: 0;
  height: 44px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
}
.checked {
  display: flex;
  width: 70px;
}
.checked .checked-bottom {
  margin-left: 5px;
}
.checked .checked-all {
  margin-left: 5px;
  flex: 1;
}
.total {
  padding-left: 20px;
}
.calculate {
  color: #fff;
  text-align: center;
  line-height: 40px;
  height: 100%;
  width: 90px;
  background-color: red;
  position: absolute;
  right: 0;
}
</style>