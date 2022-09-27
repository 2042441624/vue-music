<template>
  <div class="v-home">
    <c-Header class="c-Header">
      <slot slot="centre">
        <div class="search bar7">

          <keep-alive><input type="text" placeholder="请输入您要搜索的内容..." @focus="toSearch()"></keep-alive>


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



    /*搜索框7*/

    .bar7 form {
      height: 40px;
    }

    .bar7 input {
      width: 200px;
      border-radius: 42px;
      border: 1px solid #324B4E;
      background: #F9F0DA;
      transition: .3s linear;
      float: right;
      margin: 0 auto;
    }

    .bar7 input:focus {
      width: 300px;
    }

    .bar7 button {
      background: none;
      top: -2px;
      right: 0;
    }

    .bar7 button:before {
      content: "\f002";
      font-family: FontAwesome;
      color: #324b4e;
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
