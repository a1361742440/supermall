<template>
  <div>
    <tab-bar>
      <tab-bar-item path='/home'>
        <img src="../../assets/img/tabbar/home.svg" slot="icon" />
        <img src="../../assets/img/tabbar/home_active.svg" slot="icon-active" />
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img src="../../assets/img/tabbar/category.svg" slot="icon" />
        <img src="../../assets/img/tabbar/category_active.svg" slot="icon-active" />
        <div slot="text">选项</div>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <img src="../../assets/img/tabbar/shopcart.svg" slot="icon" />
        <img src="../../assets/img/tabbar/shopcart_active.svg" slot="icon-active" />
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <img src="../../assets/img/tabbar/profile.svg" slot="icon" />
        <img src="../../assets/img/tabbar/profile_active.svg" slot="icon-active" />
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "../common/tabbar/TabBar";
import TabBarItem from "../common/tabbar/TabBarItem";
export default {
  name: "TabBarMain",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>