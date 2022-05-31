<template>
  <div class="v-home">
    <c-Header class="c-Header"></c-Header>
    <c-Banner class="c-Banner"></c-Banner>
    <c-Resource class="c-Resource"></c-Resource>
    <c-Toplist class="c-Toplist"></c-Toplist>
    <c-Audio class="c-Audio" :song="Fsong"></c-Audio>
    <c-Footer class="c-Footer"></c-Footer>
  </div>
</template>

<script>
import cAudio from '@/component/cAudio.vue';
import cBanner from '@/component/cBanner.vue';
import cFooter from '@/component/cFooter.vue';
import cHeader from '@/component/cHeader.vue';
import cResource from '@/component/cResource.vue';
import cToplist from '@/component/cToplist.vue';

// import cAudio from '@/component/cAudio.vue';

// import { mapState } from 'vuex';
export default {
  name: 'v-home',
  data() {
    return {
    }
  },
  mounted() {

  },
  computed: {
    Fsong() {
      return this.$store.state.songs.nowSong
    }
  },
  components: {
    cHeader,
    cBanner,
    cResource,
    cToplist,
    cAudio,
    cFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.v-home {
  .c-Header {
    position: relative;
    min-height: 40px;
    top: 0;
  }

  .c-Banner,
  .c-Resource,
  .c-Toplist {
    margin-bottom: 0.5rem;
  }

  .c-Audio {
    position: fixed;
    bottom: 60px;
  }

  .c-Footer {
    width: 100%;
    position: fixed;
    min-height: 60px;
    bottom: 0;
  }
}
</style>
