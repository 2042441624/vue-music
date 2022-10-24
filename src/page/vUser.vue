<template>
  <div class="c-user">

    <c-Header class="c-Header">
      <slot slot="left">
        <div @click="routerBack">返回</div>
      </slot>
      <slot slot="centre">
        状态
      </slot>
      <slot slot="right">
        搜索
      </slot>
    </c-Header>
    <div class="userData">
      <div class="userImg"><img /></div>
      <div class="userName">用户名称</div>
      <div class="uservl">等级关注粉丝</div>
    </div>
    <div class="userSongList">我喜欢的音乐</div>
    <div class="userSongList">我收藏的歌单</div>
  </div>
</template>

<script>
import cHeader from '@/component/Home/cHeader.vue';
export default {
  components: {
    cHeader,
  },
  methods: {
    routerBack() {
      this.$router.back()
    }
  },
}
</script>

<style lang="less">
.userData {
  width: 100%;
  height: 20%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
  align-content: center;

  .userImg {
    width: 20%;
    height: 50%;
    background-color: antiquewhite;
  }


}

.userSongList {
  width: 100%;
  height: 15%;
  border-radius: 15px;
  background-color: antiquewhite;
}
</style>
