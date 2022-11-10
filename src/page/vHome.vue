<template>
  <keep-alive>
    <div class="v-home">
      <!-- 头部 -->
      <c-Header class="c-Header">



        <slot slot="centre">
          杨靓仔(尘游麟)有限公司
        </slot>
      </c-Header>
      <!-- 缓存主体 -->

      <div class="main">
        <!-- 轮播图 -->
        <c-Banner class="c-Banner  animate__animated animate__tada" :imgList='ImgList'
          style="animation-duration: 1000ms"></c-Banner>
        <!-- 推荐歌单 -->
        <c-Resource class="c-Resource animate__animated animate__fadeInLeft" :recommendList="recommendList">
        </c-Resource>
        <!-- 排行榜 -->
        <c-Toplist class="c-Toplist animate__animated animate__fadeInLeft"></c-Toplist>
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

export default {
  name: 'v-home',
  data() {
    return {
      ImgList: [],
      recommendList: []
    }
  },
  created() {
    //刚加载页面需要确认所有歌单是否有歌曲
    this.$store.dispatch('nowListName', 'historySongsList')
    let historySongsList = JSON.parse(localStorage.getItem('historySongsList')) ? JSON.parse(localStorage.getItem('historySongsList')) : []
    if (historySongsList.length) {
      this.$store.dispatch('addhistorySongsList', historySongsList)

      this.$store.dispatch('nextSong', {})
    }
  },
  mounted() {

    banner().then(res => { this.ImgList = res.banners })
    getPersonalized().then(res => this.recommendList = res.result)




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
@runColor: rgba(239, 236, 236, 0);
@endColot: rgb(244, 40, 40);

.v-home {
  position: relative;

  .c-Header {





    .d2 {

      background: #DABB52;
      display: flex;
      flex-direction: row;

      input,
      buyy {
        border: none;
        outline: none;
        border-radius: 3px;
        overflow: hidden;
      }

      input {
        width: 100%;

        background: #F9F0DA;
        text-align: center;
        box-sizing: border-box;

        buyy {


          background: #F15B42;
          cursor: pointer;
        }
      }
    }



  }

  .main {
    position: relative;

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
