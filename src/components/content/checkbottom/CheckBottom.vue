<template>
  <div class="checked-bottom" :class="{check:isChecked}">
    <img src="../../../assets/img/cart/tick.svg" alt />
  </div>
</template>
<script>
export default {
  name: "CheckBottom",
  data() {
    return {
      checked: true
    };
  },
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  methods: {}
};
</script>

<style scoped>
.check {
  background-color: red;
  border-radius: 50%;
  box-sizing: border-box;
}
.checked-bottom {
  border-radius: 50%;
  border: 1px solid black;
  height: 20px;
  width: 20px;
}
</style>