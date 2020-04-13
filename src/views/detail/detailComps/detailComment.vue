<template>
  <div v-if="Object.keys(commentInfo).length!==0" class="detail-comment">
    <div class="info-header">
      <span class="header-title">用户评论</span>
      <span class="header-more">更多</span>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt />
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-comment">
      <p>{{commentInfo.content}}</p>
      <div class="comment-message">
        <span class="data">{{commentInfo.created |showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="comment-imgs">
        <img :src="item" v-for="(item ,index) in commentInfo.images" :key="index" alt />
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils';
export default {
  name: "detailComment",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
      showDate:function(value){
          let data =new Date(value*1000);
          return formatDate(data,'yyyy-MM-dd')
      }
  }
};
</script>

<style scoped>
.detail-comment {
  padding: 0 20px;
}
.info-header {
  height: 60px;
  line-height: 60px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.info-header {
  font-size: 16px;
  font-weight: bold;
}
.info-header .header-title {
  float: left;
  padding-left: 20px;
}
.info-header .header-more {
  float: right;
  padding-right: 20px;
}

.info-user {
  height: 60px;
  line-height: 60px;
  width: 100%;
  padding-top: 10px;
}
.info-user img {
  line-height: 50px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.info-user span {
  font-size: 17px;
  padding-left: 10px;
  position: relative;
  top: -10px;
}
.info-comment {
  height: 70px;
  width: 100%;
}

.info-comment p {
  font-size: 15px;
}
.info-comment .comment-message {
  font-size: 13px;
  padding: 15px 0;
}
.info-comment .comment-message .data {
  padding-right: 7px;
}

.comment-imgs img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>