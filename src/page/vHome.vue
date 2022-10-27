<template>
  <keep-alive>
    <div class="v-home">
      <!-- 头部 -->
      <c-Header class="c-Header">
        <slot slot="left">
          <!-- <svg t="1664773628805" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="4249" width="38" height="38">
            <path
              d="M187.392 70.656q28.672 0 48.64 19.456t19.968 48.128l0 52.224q0 28.672-19.968 48.64t-48.64 19.968l-54.272 0q-27.648 0-47.616-19.968t-19.968-48.64l0-52.224q0-28.672 19.968-48.128t47.616-19.456l54.272 0zM889.856 70.656q27.648 0 47.616 19.456t19.968 48.128l0 52.224q0 28.672-19.968 48.64t-47.616 19.968l-437.248 0q-28.672 0-48.64-19.968t-19.968-48.64l0-52.224q0-28.672 19.968-48.128t48.64-19.456l437.248 0zM187.392 389.12q28.672 0 48.64 19.968t19.968 48.64l0 52.224q0 27.648-19.968 47.616t-48.64 19.968l-54.272 0q-27.648 0-47.616-19.968t-19.968-47.616l0-52.224q0-28.672 19.968-48.64t47.616-19.968l54.272 0zM889.856 389.12q27.648 0 47.616 19.968t19.968 48.64l0 52.224q0 27.648-19.968 47.616t-47.616 19.968l-437.248 0q-28.672 0-48.64-19.968t-19.968-47.616l0-52.224q0-28.672 19.968-48.64t48.64-19.968l437.248 0zM187.392 708.608q28.672 0 48.64 19.968t19.968 47.616l0 52.224q0 28.672-19.968 48.64t-48.64 19.968l-54.272 0q-27.648 0-47.616-19.968t-19.968-48.64l0-52.224q0-27.648 19.968-47.616t47.616-19.968l54.272 0zM889.856 708.608q27.648 0 47.616 19.968t19.968 47.616l0 52.224q0 28.672-19.968 48.64t-47.616 19.968l-437.248 0q-28.672 0-48.64-19.968t-19.968-48.64l0-52.224q0-27.648 19.968-47.616t48.64-19.968l437.248 0z"
              p-id="4250" fill="#F55252"></path>
          </svg> -->
        </slot>
        <slot slot="centre">

          <keep-alive><input type="text" placeholder="请输入您要搜索的内容..." @focus="toSearch()"></keep-alive>

        </slot>
        <slot slot="right">
          <!-- <svg t="1664792648908" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="2806" width="38" height="38">
            <path
              d="M923.7 338.1c-22.6-53.4-54.9-101.3-96.1-142.5-41.2-41.2-89.1-73.5-142.5-96.1-55.3-23.4-114-35.2-174.5-35.2S391.4 76.2 336.1 99.5c-53.4 22.6-101.3 54.9-142.5 96.1-41.2 41.2-73.5 89.1-96.1 142.5-23.4 55.3-35.2 114-35.2 174.5s11.9 119.2 35.2 174.5c22.6 53.4 54.9 101.3 96.1 142.5 41.2 41.2 89.1 73.5 142.5 96.1 55.3 23.4 114 35.2 174.5 35.2s119.2-11.9 174.5-35.2c53.4-22.6 101.3-54.9 142.5-96.1 41.2-41.2 73.5-89.1 96.1-142.5 23.4-55.3 35.2-114 35.2-174.5s-11.8-119.2-35.2-174.5zM510.6 880.9c-203.1 0-368.3-165.2-368.3-368.3 0-203.1 165.2-368.3 368.3-368.3s368.3 165.2 368.3 368.3c0 203.1-165.2 368.3-368.3 368.3z"
              p-id="2807" fill="#F55252"></path>
            <path
              d="M648.3 373.9c-2.3-1.8-4.6-3.6-6.8-5.6-15-13.3-26.5-30.4-32.8-49.9-1-2.9-1.8-5.8-2.5-8.8-2.1-8.5-3.2-17.5-3.2-26.7 0-20.2 5.3-39.2 14.5-55.6-42.4 8.9-76.1 41.3-86.8 83-0.8 3.1-1.5 6.3-2 9.6v261.8c-5.9-1.9-11.9-3.5-18.2-4.7-10.7-2.2-22-3.5-33.7-3.8-13.5-0.4-27.5 0.6-41.8 3.1-30.4 5.2-57.6 16.4-79.6 31.3-24.8 16.8-42.8 38.5-51.1 62-4.8 13.7-6.4 28-3.9 42.3 10.3 60.3 87.4 97.4 172.1 82.9 20.8-3.6 40.1-9.9 57.3-18.4 23.1-11.4 42.3-26.6 56-43.9 12-15.2 19.7-32.1 21.8-49.4 0.4-3.3 0.6-6.7 0.7-10.1 0.2 0 0.4-254.9 0.4-254.9h-0.2 0.2c2.1-0.1 4.3-0.2 6.4-0.2 27.2 0 52.2 9.5 71.8 25.5 15.8 12.8 28 29.7 35.2 49.2-5-19.8-12.5-38.5-22.3-55.9-13.4-24-30.9-45.2-51.5-62.8z"
              p-id="2808" fill="#dbdbdb"></path>
          </svg> -->
        </slot>
      </c-Header>
      <!-- 主体 -->
      <div class="main">
        <!-- 轮播图 -->
        <c-Banner class="c-Banner" :imgList='ImgList'></c-Banner>
        <!-- 推荐歌单 -->
        <c-Resource class="c-Resource" :recommendList="recommendList"></c-Resource>
        <!-- 排行榜 -->
        <c-Toplist class="c-Toplist"></c-Toplist>
      </div>

    </div>
  </keep-alive>


</template>

<script>
import cHeader from '@/component/Home/cHeader.vue';
import cBanner from '@/component/Home/cBanner.vue';
import cResource from '@/component/Home/cResource.vue';
import cToplist from '@/component/Home/cToplist.vue';
import { banner } from '@/api/home';
import { getPersonalized } from "@/api/index.js";
import { mapState } from 'vuex';
import { resSong_lyric } from '@/utils/song';
export default {
  name: 'v-home',
  data() {
    return {
      ImgList: [],
      recommendList: []
    }
  },
  mounted() {
  
    banner().then(res => { this.ImgList = res.banners })
    getPersonalized().then(res => this.recommendList = res.result)
    //刚加载页面需要确认所有歌单是否有歌曲

    let historySongsList = JSON.parse(localStorage.getItem('historySongsList')) ? JSON.parse(localStorage.getItem('historySongsList')) : []
    if (historySongsList.length) {
      this.$store.dispatch('addhistorySongsList', historySongsList)

      let obj = { name: historySongsList[0].name, mode: 'historySongsList', index: 0 }
      this.$store.commit('Add_LYRIC', resSong_lyric('lyric', historySongsList[0].id))
      this.$store.dispatch('nextSong', obj)

      this.$store.dispatch('nowListName', 'historySongsList')
    }

  },
  methods: {
    toSearch() {
      this.$router.push({ name: 'search' })
    },


  },
  computed: {
    ...mapState(['songs'])
  },
  components: {
    cHeader,
    cBanner,
    cResource,
    cToplist,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.v-home {
  position: relative;

  .c-Header {
    position: fixed;
    top: 0;


    input {
      width: 100%;
      outline: none;
      border: none;
      border-radius: 45px;
      text-align: center;
      height: 100%;
    }








  }

  .main {
    position: relative;
    top: 42px;
  }

  .c-Banner {
    z-index: 0
  }

  .c-Banner,
  .c-Resource,
  .c-Toplist {
    margin-bottom: 0.5rem;
  }
}
</style>
