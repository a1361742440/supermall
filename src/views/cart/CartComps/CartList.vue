<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <CartListItem v-for="(item,index) in cartList" :key="index" :product="item"></CartListItem>
    </scroll>
  </div>
</template>

<script>

import CartListItem from "./CartListItem";
import scroll from "../../../components/common/scroll/Scroll";
import { mapGetters } from "vuex";

export default {
  name: "CartList",
  props: {},
  components: {
    scroll,
    CartListItem,
    
  },
  computed: {
    ...mapGetters(["cartList"])
  },
  activated() {
    this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
.cart-list {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 93px;
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>