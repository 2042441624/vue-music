<template>
  <div class="c-user">


    <c-Header class="c-Header">
      <slot slot="left">
        <div @click="routerBack">返回</div>
      </slot>
      <slot slot="centre"> 状态 </slot>
      <slot slot="right"> 搜索 </slot>
    </c-Header>
    <div class="userData">
      <div class="userImg"><img ref="userImg" /></div>
      <div class="userName" ref="userName">用户名称</div>
      <div class="uservl" ref="uservl">等级关注粉丝</div>
    </div>


  

      <div class="userSongList animate__animated animate__fadeInLeft">我的历史播放</div>




    <button @click="toggleVisible">transition</button>

  </div>
</template>

<script>
import cHeader from "@/component/Home/cHeader.vue";
//引入用户API

import { mapState } from "vuex";
export default {
  components: {
    cHeader,
  },
  data() {
    return {
      visible: false
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    routerBack() {
      this.$router.back();
    },
    toggleVisible() {
      this.visible = !this.visible
    }
  },
  created() {

  },
  mounted() {

  },
};
</script>

<style lang="less">
h1 {
  width: 100%;
  height: 50px;
  display: block;
}

.userData {
  width: 100%;
  height: 20%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
  align-content: center;

  .userImg {
    width: 100px;
    height: 100px;
    background-color: antiquewhite;

    img {
      width: 100%;
      height: 100%;
    }
  }


}

.userSongList {
  width: 100%;
  height: 15%;
  border-radius: 15px;
  background-color: antiquewhite;
}
</style>
