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
    <div class="userSongList">
      <div class="animate__animated animate__fadeInLeft">
        <img />
        <span>本地播放</span>
      </div>
      <div
        class="animate__animated animate__fadeInLeft"
        v-for="list in this.userPlayList"
        :key="list.id"
        @click="watchPlayList(list.id)"
      >
        <img :src="list.coverImgUrl" />
        <span>{{ list.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { playlist_detail, song_detail } from "@/api/home";
import cHeader from "@/component/Home/cHeader.vue";
//引入用户API
import { playlist } from "@/api/user";
import { mapState } from "vuex";
export default {
  components: {
    cHeader,
  },
  data() {
    return {
      visible: false,
      userPlayList: [],
      list: [],
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
      this.visible = !this.visible;
    },
    watchPlayList(id) {
      this.$store.dispatch("nowListName", "playList");
      console.log(id);

      playlist_detail(id)
        .then((res) => {
          this.list = res.privileges.map((i) => (i = i.id));
          console.log(this.list);
        })
        .then(() => {
          song_detail(String(this.list)).then((res) => {
            console.log(res.songs);
            this.$store.dispatch("addPlayList", res.songs);

            this.$store.dispatch("addsongs", res.songs[0].id);
            this.$router.push({ name: "playlist" });
          });
        });
    },
  },
  created() {
    console.log(this.user.data.account.id);
  },
  mounted() {
    playlist(this.user.data.account.id).then((res) => {
      if (res.code === 200) {
        console.log(res);
        this.userPlayList = res.playlist;
      }
    });
    this.$refs.userImg.src = this.user.data.profile.avatarUrl;
    this.$refs.userName.innerText = this.user.data.profile.nickname;
    this.$refs.uservl.innerText = `关注${this.user.data.profile.follows} 粉丝${this.user.data.profile.followeds}`;
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
  border-radius: 15px;
  background-color: antiquewhite;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  div {
    width: 25%;

    height: 25%;
    img {
      width: 100%;
      height: 100%;
    }
    span {
      position: absolute;
      display: inline-block;
      width: 100%;
      left: 0;
      bottom: 0;
      color: rgb(255, 255, 255);
      background-color: rgb(180, 181, 182);
      font-size: 0.25rem;
      text-align: center;
    }
  }
}
</style>
