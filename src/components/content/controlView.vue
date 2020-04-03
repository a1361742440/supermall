<template>
  <div class="control">
    <div
      v-for="(item,index) in title"
      class="control-item"
      :class="{active:index===currentIndex}"
      @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "controlView",
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    }
  },
  props: {
    title: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.control {
  height: 44px;
  line-height: 44px;
  display: flex;
  text-align: center;
}
.control-item {
  flex: 1;
}
.active span {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-high-text);
  padding: 5px;
}
</style>