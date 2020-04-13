<template>
  <div class="params-info" v-if="Object.keys(paramsInfo).length !== 0">
    <table v-for="(table,index) in paramsInfo.size" :key="index" class="info-size">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-params">
      <tr v-for="(info,index) in paramsInfo.infos" :key="index">
        <td class="params-key">{{info.key}}</td>
        <td class="params-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img">
      <img :src="paramsInfo.image" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "detailParamsInfo",
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.params-info {
  padding: 30px 20px;
  border-bottom: 5px solid rgba(0, 0, 0, 0.1);
}
.info-size {
  font-size: 18px;
}
.info-size tr {
  height: 45px;
}
.info-size td {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.params-info table {
  width: 100%;
  border-collapse: collapse;
}
.info-params td {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.info-params .params-key {
  width: 42px;
}
.info-params .params-value {
  padding-left: 45px;
  color: var(--color-high-text);
}
</style>