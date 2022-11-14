<template>
  <div class="v-home">
    <!-- 头部 -->
    <c-Header class="c-Header" :isActive="isActive">
      <slot slot="centre"> 杨靓仔(晨依林)有限公司 </slot>
    </c-Header>
    <!-- 缓存主体 -->
    <keep-alive>
      <div class="main">
        <!-- 轮播图 -->
        <c-Banner
          class="c-Banner animate__animated animate__tada"
          :imgList="ImgList"
          style="animation-duration: 1000ms"
        ></c-Banner>
        <!-- 推荐歌单 -->
        <c-Resource
          class="c-Resource animate__animated animate__fadeInLeft"
          :recommendList="recommendList"
        >
        </c-Resource>
        <!-- 排行榜 -->
        <c-Toplist
          class="c-Toplist animate__animated animate__fadeInLeft"
        ></c-Toplist>
      </div>
    </keep-alive>
  </div>
</template>

<script>
import cHeader from "@/component/Home/cHeader.vue";
import cBanner from "@/component/Home/cBanner.vue";
import cResource from "@/component/Home/cResource.vue";
import cToplist from "@/component/Home/cToplist.vue";
import { banner } from "@/api/home";
import { getPersonalized } from "@/api/index.js";
import { mapState } from "vuex";
import $ from "../../node_modules/jquery/dist/jquery.min.js";

export default {
  name: "v-home",
  data() {
    return {
      ImgList: [],
      recommendList: [],
      isActive: "",
    };
  },
  created() {
    //刚加载页面需要确认所有歌单是否有歌曲
  },
  mounted() {
    this.isActive = this.$route.name === "home" ? false : true;
    this.isActive
      ? $(".search-wrapper").addClass("active")
      : $(".search-wrapper").removeClass("active");

    banner().then((res) => {
      this.ImgList = res.banners;
    });
    getPersonalized().then((res) => (this.recommendList = res.result));

    if (!this.$route.query.songid) {
      let nowSongID = this.songs.nowSong.id;
      nowSongID
        ? this.$router.push({ path: `/home?songid=${this.songs.nowSong.id} ` })
        : this.$router.push({ path: `/home?songid=undefind` });
    }
  },
  methods: {},
  computed: {
    ...mapState(["songs"]),
  },
  components: {
    cHeader,
    cBanner,
    cResource,
    cToplist,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@runColor: rgba(239, 236, 236, 0);
@endColot: rgb(244, 40, 40);

.v-home {
  position: relative;

  .c-Header {
    .main {
      position: relative;
    }

    .c-Banner {
      z-index: 0;
    }

    .c-Banner,
    .c-Resource,
    .c-Toplist {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
