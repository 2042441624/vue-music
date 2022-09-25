<template>
  <div class="v-home">
    <c-Header class="c-Header"></c-Header>
    <div class="main">
      <c-Banner class="c-Banner" :imgList='ImgList'></c-Banner>
      <c-Resource class="c-Resource" :recommendList="recommendList"></c-Resource>
      <c-Toplist class="c-Toplist"></c-Toplist>
    </div>

  </div>

</template>

<script>
import cHeader from '@/component/Home/cHeader.vue';
import cBanner from '@/component/Home/cBanner.vue';
import cResource from '@/component/Home/cResource.vue';
import cToplist from '@/component/Home/cToplist.vue';
import { banner } from '@/api/home';
import { getPersonalized } from "@/api/index.js";
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
  },
  methods: {
    resultImgList() {

    }
  },
  computed: {
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
  }

  .main {
    position: relative;
    top: 40px;
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
