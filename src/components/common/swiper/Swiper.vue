<template>
  <div id="hy-swiper">
    <div class="swiper" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  data: function() {
    return {
      scrolling: false, //是否在滚动
      currentIndex: 1, //当前的index
      swiperStyle: {}, //swiper的样式
      totalWidth: 0, //swiper的总宽度
      slideCount: 0 //元素个数
    };
  },
  methods: {


    //滚动正确的位置
    scrollContent:()=>{
      
    },


    /**
     * 设置滚动的位置
     */
    setTransform: function(position) {
      this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
      this.swiperStyle[
        "-webkit-transform"
      ] = `translate3d(${position}px), 0, 0`;
      this.swiperStyle["-ms-transform"] = `translate3d(${position}px), 0, 0`;
    },
    handleDom: () => {
      //获取要操作的元素
      let swiperEl = document.querySelector(".swiper");
      let slidesEls = document.getElementsByClassName("slide");
      //获取个数
      this.slideCount = slidesEls.length;
      //如果大于1，那么在前后分别添加一个slide
      if (slideCount > 1) {
        let cloneFirst = slidesEls[0].cloneNode(true);
        let cloneLast = slidesEls[this.slideCount.length - 1].cloneNode(true);
        swiperEl.insertBefore(cloneLast, slidesEls[0]);
        swiperEl.appendChild(cloneFirst);
        this.totalWidth = swiperEl.offsetWidth;
        this.swiperStyle = swiperEl.style;
      }
      //让swiper元素,显示第一个（目前是显示前面添加的最后一个元素）
      this.setTransform(-this.totalWidth);
    },
    touchstart: e => {
      
      this.startX = e.touches[0].pageX;
    },
    touchmove: e => {
      //计算出用户拖动的位置
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      let currentPosition = -this.currentIndex * this.totalWidth;
      let moveDistance = this.distance + this.currentPosition;

      //设置当前位置
      this.setTransform(moveDistance);
    },
    touchend: e => {
      //获取移动的距离
      let currentmove = Math.abs(this.distance);
    }
  }
};
</script>

<style scoped>
#hy-swiper {
  overflow: hidden;
  position: relative;
}

.swiper {
  display: flex;
}
</style>