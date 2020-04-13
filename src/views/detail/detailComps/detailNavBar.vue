<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backItem">
        <img src="../../../assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item,index) in title"
          class="title-item"
          :class="{active:index===currentindex}"
          @click="navClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar";
export default {
  name: "detailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentindex: 0
    };
  },
  methods: {
    backItem() {
      this.$router.back();
    },
    navClick(index) {
      this.currentindex = index;
      this.$emit('tabClick',index)
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
.back {
  padding-top: 7px;
}
.active {
  color: var(--color-high-text);
  border-bottom: 1px solid var(--color-high-text);
}
</style>