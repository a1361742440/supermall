<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @tabClick="tabClick" ref="navbar" />
    <scroll class="content" ref="scroll" @contentScroll="contentScroll" :probeType="3">
      <detailSwiper :top-images="topImages"></detailSwiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageload="imageload"></detail-goods-info>
      <detail-params-info ref="params" :params-info="paramsInfo"></detail-params-info>
      <detail-comment ref="comment" :comment-info="commentInfo"></detail-comment>
      <goods-list ref="recommend" :goods="goodsList"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import detailNavBar from "./detailComps/detailNavBar";
import detailSwiper from "./detailComps/detailSwiper";
import detailBaseInfo from "./detailComps/detailBaseInfo";
import detailShopInfo from "./detailComps/detailShopInfo";
import detailGoodsInfo from "./detailComps/detailGoodsInfo";
import detailParamsInfo from "./detailComps/detailParamsInfo";
import detailComment from "./detailComps/detailComment";
import detailBottomBar from "./detailComps/detailBottomBar";
import GoodsList from "../../components/content/goods/GoodsList";

import { mapActions } from "vuex";

import scroll from "../../components/common/scroll/Scroll";
import {
  Goods,
  getDetail,
  Shop,
  paramsInfo,
  getRecommend
} from "../../network/detail";
import { debounce } from "../../common/utils";
import { backTopMixin } from "../../common/mixin";
export default {
  name: "detail",
  components: {
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailGoodsInfo,
    detailParamsInfo,
    detailComment,
    GoodsList,
    detailBottomBar,
    scroll
  },
  data() {
    return {
      iid: null,
      topImages: null,
      data: null,
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      goodsList: [],
      themetopYs: [],
      getthemetopY: null,
      navbarHeight: null
    };
  },
  mixins: [backTopMixin],
  created() {
    this.iid = this.$route.params.iid;
    //console.log(this.$route.params.iid)
    // getdetail(this.iid).then(res={
    // })
    getDetail(this.iid).then(res => {
      //获取轮播图图片
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      console.log(res);
      //获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //console.log(data.shopInfo)
      //获取店铺信息
      this.shop = new Shop(data.shopInfo);

      this.detailInfo = data.detailInfo;
      //获取商品详细信息
      this.paramsInfo = new paramsInfo(
        data.itemParams.info,
        data.itemParams.rule
      );
      //获取评论信息
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
    }),
      getRecommend().then(res => {
        this.goodsList = res.data.list;
        // console.log(this.goodsList);
      }),
      (this.getthemetopY = debounce(function() {
        this.navbarHeight = this.$refs.navbar.$el.offsetHeight;
        this.themetopYs = [];
        this.themetopYs.push(0);
        this.themetopYs.push(
          this.$refs.params.$el.offsetTop - this.navbarHeight
        );
        this.themetopYs.push(
          this.$refs.comment.$el.offsetTop - this.navbarHeight
        );
        this.themetopYs.push(
          this.$refs.recommend.$el.offsetTop - this.navbarHeight
        );
        //console.log(this.themetopYs);
      }, 200));
  },
  methods: {
    ...mapActions(["addCart"]),
    imageload() {
      this.$refs.scroll.refresh();
      this.getthemetopY();
    },
    tabClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themetopYs[index], 1000);
      console.log(this.themetopYs);
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
      const positionY = -position.y;
      let length = this.themetopYs.length;
      for (let i = 0; i < length; i++) {
        if (
          (i < length - 1 &&
            positionY > this.themetopYs[i] &&
            positionY < this.themetopYs[i + 1]) ||
          (i === length - 1 && positionY > this.themetopYs[i])
        ) {
          this.$refs.navbar.currentindex = i;
        }
      }
    },
    addToCart() {
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // this.$store.cartList.push(product);
      // this.$store.dispatch("addCart", product).then(res => {
      //   console.log(res);
      // });
      this.addCart(product).then(res => {
        //console.log(res);
        // this.message = res;
        // this.isShow = true;

        // setTimeout(() => {
        //   this.message = '';
        //   this.isShow = false;
        // }, 2000);
        this.$toast.show(res, 2000);
      });
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 10;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
}
</style>