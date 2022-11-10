<template>
    <div class="v-Mian">



        <router-view class="v"></router-view>

        <c-Footer class="c-Footer" :Showfooter="isplaylist"></c-Footer>
    </div>


</template>
<script>

import cFooter from '@/component/Home/cFooter.vue';


export default {
    name: 'v-Mian',
    data() {
        return {

        }
    },
    components: {

        cFooter,

    },
    methods: {

    },
    computed: {

        //获取当前打开的歌单
        isplaylist() {

            return this.$store.state.songs.playList.length ? false : true


        }
    },
    watch: {

    }
}
</script>

<style lang="less" scoped>
.v-Mian {
    height: 100vh;
    overflow: scroll;

    .v-PlayList {
        height: 100vh;
        z-index: 9;
    }

    .v {
        z-index: 2;
        height: 100%;
    }

    //ok
    .c-Footer {
        position: fixed;
        bottom: 0;
    }

}
</style>