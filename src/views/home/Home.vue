<template>
  <div id="home">
    <nav-bar class="home-nav">
      <slot slot="center">购物街</slot>
    </nav-bar>
    <control-view
      :title="['流行','新款','精选']"
      @tabClick="tabClick"
      ref="tabcontrol1"
      class="tab-control"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <recommends-view :recommends="recommends"></recommends-view>
      <fuertrue-view />
      <control-view :title="['流行','新款','精选']" @tabClick="tabClick" ref="tabcontrol2" />
      <good-list :goods="goods[currentType].list" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import Scroll from "../../components/common/scroll/Scroll";

import HomeSwiper from "./Homechildren/HomeSwiper";
import recommendsView from "./Homechildren/recommendsView";
import BackTop from "../../components/content/BackTop";
import FuertrueView from "../../components/content/FuertrueView";
import controlView from "../../components/content/controlView";
import GoodList from "../../components/content/goods/GoodsList";

import { getHomeMultidata, getHomeGoods } from "../../network/home";
import { backTopMixin } from "../../common/mixin";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    recommendsView,
    FuertrueView,
    controlView,
    GoodList,
    Scroll
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    };
  },
  mixins: [backTopMixin],
  created() {
    this.getHomeMultidata();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    //console.log(tabOffsetTop)
    const refresh = this.debounce(this.$refs.scroll.refresh, 1000);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  }, //进入页面
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  }, //离开
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
  },
  methods: {
    debounce(func, delay) {
      let timer = null;
      return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabcontrol1.currentIndex = index;
      this.$refs.tabcontrol2.currentIndex = index;
    },
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        console.log(res);
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      // console.log(position)
      //如果y轴大于1000为true 否则为flase
      this.isShowBackTop = -position.y > 1000;
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      console.log("上拉加载更多");
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.refresh();
    }, //轮播图图片加载完后
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabcontrol2.$el.offsetTop;
      console.log(this.tabOffsetTop);
    }
  }
};
</script>
<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control {
  background-color: #fff;
  z-index: 10;
  position: relative;
}
</style>