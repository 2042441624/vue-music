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
    <div class="userSongList">我收藏的歌单</div>
    <div class="userSongList">我的历史播放</div>


    <transition name="fade">

      <div class="userSongList">我喜欢的音乐</div>


    </transition>


  </div>
</template>

<script>
import cHeader from "@/component/Home/cHeader.vue";
//引入用户API
import { cellphone } from "@/api/user";
import { mapState } from "vuex";
export default {
  components: {
    cHeader,
  },
  data() {
    return {
      userData: "text",
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    routerBack() {
      this.$router.back();
    },
  },
  created() {
    cellphone().then((res) => {
      if (res.code === 200) {
        //设置跟踪user数据
        this.$store.state.user.state = res;
        // 设置cookieF
        localStorage.setItem("cookie", res.cookie);
        console.log(this.$store.state.user.state);
        this.$refs.userImg.src = this.user.state.profile.avatarUrl;
        this.$refs.userName.innerText = this.user.state.profile.nickname;
        this.$refs.uservl.innerText = `关注${this.user.state.profile.follows} 粉丝${this.user.state.profile.followeds}`;
      }
    });
  },
  mounted() {
    const selector = document.querySelector('.userSongList')
    selector.classList.add('magictime', 'puffIn')
  },
};
</script>

<style lang="less">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
