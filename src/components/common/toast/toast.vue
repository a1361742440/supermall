<template>
  <div v-show="isShow" class="toast">
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  name: "toast",
  props: {},
  data() {
    return {
      message: "",
      isShow: false
    };
  },
  methods: {
    show(message, duration = 2000) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    }
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;

  z-index: 100;
  padding: 10px 20px;
  border-radius: 10px;
}
</style>