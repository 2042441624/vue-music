<template>
  <div class="v-home">
    <c-Header class="c-Header">
      <slot slot="left">
        <div> <svg t="1664773628805" class="icon" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="4249" width="30" height="30">
            <path
              d="M187.392 70.656q28.672 0 48.64 19.456t19.968 48.128l0 52.224q0 28.672-19.968 48.64t-48.64 19.968l-54.272 0q-27.648 0-47.616-19.968t-19.968-48.64l0-52.224q0-28.672 19.968-48.128t47.616-19.456l54.272 0zM889.856 70.656q27.648 0 47.616 19.456t19.968 48.128l0 52.224q0 28.672-19.968 48.64t-47.616 19.968l-437.248 0q-28.672 0-48.64-19.968t-19.968-48.64l0-52.224q0-28.672 19.968-48.128t48.64-19.456l437.248 0zM187.392 389.12q28.672 0 48.64 19.968t19.968 48.64l0 52.224q0 27.648-19.968 47.616t-48.64 19.968l-54.272 0q-27.648 0-47.616-19.968t-19.968-47.616l0-52.224q0-28.672 19.968-48.64t47.616-19.968l54.272 0zM889.856 389.12q27.648 0 47.616 19.968t19.968 48.64l0 52.224q0 27.648-19.968 47.616t-47.616 19.968l-437.248 0q-28.672 0-48.64-19.968t-19.968-47.616l0-52.224q0-28.672 19.968-48.64t48.64-19.968l437.248 0zM187.392 708.608q28.672 0 48.64 19.968t19.968 47.616l0 52.224q0 28.672-19.968 48.64t-48.64 19.968l-54.272 0q-27.648 0-47.616-19.968t-19.968-48.64l0-52.224q0-27.648 19.968-47.616t47.616-19.968l54.272 0zM889.856 708.608q27.648 0 47.616 19.968t19.968 47.616l0 52.224q0 28.672-19.968 48.64t-47.616 19.968l-437.248 0q-28.672 0-48.64-19.968t-19.968-48.64l0-52.224q0-27.648 19.968-47.616t48.64-19.968l437.248 0z"
              p-id="4250"></path>
          </svg></div>
      </slot>
      <slot slot="centre">
        <div class="search bar7">
          <keep-alive><input type="text" placeholder="请输入您要搜索的内容..." @focus="toSearch()"></keep-alive>
        </div>
      </slot>
      <slot slot="right">
        <div>
          <svg t="1664773628805" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="4645" width="30" height="38">
            <path
              d="M337.92 163.84c9.9328 0 18.78016 4.72064 24.39168 12.04224 67.08224 22.0672 115.5072 72.84736 145.23392 152.34048a30.73024 30.73024 0 0 1 24.8832 28.3648L532.48 358.4v61.44c0 69.9392 55.86944 126.83264 125.40928 128.49152l3.1232 0.04096h9.17504c69.9392 0 126.83264-55.86944 128.49152-125.40928L798.72 419.84v-60.79488a30.72 30.72 0 0 1 61.3888-1.81248l0.0512 1.81248V419.84c0 96.27648-71.6288 175.8208-164.49536 188.27264 0.43008 2.01728 0.65536 4.12672 0.65536 6.28736v138.24h46.08a30.72 30.72 0 0 1 30.72 30.72v10.24a30.72 30.72 0 0 1-30.72 30.72h-143.36a30.72 30.72 0 0 1-30.72-30.72v-10.24a30.72 30.72 0 0 1 30.72-30.72H634.88V614.4c0-2.1504 0.22528-4.27008 0.64512-6.2976-91.7504-12.288-162.7648-90.09152-164.4544-184.81152L471.04 419.84v-61.44c0-8.02816 3.072-15.32928 8.11008-20.79744-35.21536-31.488-83.47648-70.49216-110.51008-67.30752v448.19456c1.61792 47.90272-47.49312 95.20128-115.48672 108.72832-72.86784 14.47936-139.8272-15.3088-149.56544-66.56-9.728-51.24096 41.44128-104.51968 114.29888-119.00928 32.4608-6.4512 63.744-4.11648 89.32352 4.98688L307.2 194.56a30.72 30.72 0 0 1 30.72-30.72z m337.92 40.96a92.16 92.16 0 0 1 92.16 92.16v122.88a92.16 92.16 0 0 1-92.16 92.16h-20.48a92.16 92.16 0 0 1-92.16-92.16V296.96a92.16 92.16 0 0 1 92.16-92.16h20.48z"
              fill="#bfbfbf" p-id="4646"></path>
          </svg>
        </div>
      </slot>
    </c-Header>
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
    toSearch() {
      this.$router.push({ name: 'search' })
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

    div.search {

      box-sizing: border-box;
      width: 300px;
    }

    form {
      position: relative;
      width: 200px;
      top: 0;

      left: 100px;

    }

    input,
    button {
      border: none;
      outline: none;

    }

    input {
      height: 38px;
    }

    button {
      height: 38px;
      width: 38px;
      cursor: pointer;
      position: absolute;
    }








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
