<template>
  <div v-if="Object.keys(detailInfo).length!==0" class="goodsinfo">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
      <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    </div>

    <div class="info-list">
      <img
        v-for="(item,index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
        @load="imageload"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "detailGoodsInfo",
  props: {
    detailInfo: {
      type: Object
    }
  },
  data() {
    return {
      count: 0,
      imageslength: 0
    };
  },
  methods: {
    imageload() {
      if (++this.count === this.imageslength) {
        this.$emit("imageload");
        console.log(this.imageslength);
      }
    }
  },
  watch: {
    detailInfo() {
      this.imageslength = this.detailInfo.detailImage[0].list.length;
    }
  }
};
</script>

<style scoped>
.goodsinfo {
  padding-bottom: 30px;
  border-bottom: 5px solid rgba(0, 0, 0, 0.1);
}
.info-desc {
  padding: 10px 15px;
  font-size: 14px;
}
.info-key {
  font-size: 16px;
  color: #333;
  padding-top: 20px;
}

.start,
.end {
  height: 1px;
  width: 90px;
  background-color: #333;
  position: relative;
}
.start {
  float: left;
}
.end {
  float: right;
}
.start::before,
.end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}
.end::after {
  right: 0;
}
.desc {
  padding: 15px 0;
}
.info-list img {
  width: 100%;
}
</style>