<template>
  <div class="shop-cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list />
    <Cart-bottom-bar></Cart-bottom-bar>
  </div>
</template>
<script>
import CartBottomBar from "./CartComps/CartBottomBar";
import NavBar from "../../components/common/navbar/NavBar";
import CartList from "./CartComps/CartList";
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters(["cartLength"])
  }
};
</script>
<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.shop-cart {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>