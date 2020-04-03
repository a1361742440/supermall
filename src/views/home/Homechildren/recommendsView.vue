<template>
  <div class="recommends">
    <div v-for="item in recommends" class="recommends-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "recommendsDiv",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.recommends {
  display: flex;
  width: 100%;
  text-align: center;
  padding: 0.6rem 0 15px;
  border-bottom: 0.5rem solid #f3f3f3;
}
.recommends-item {
  flex: 1;
}
.recommends-item img {
  width: 4rem;
  height: 4rem;
}
</style>