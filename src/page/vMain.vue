<template>
    <keep-alive>
        <div class="v-Mian">
            <v-PlayList v-if="isplaylist" class="v-PlayList"></v-PlayList>
            <keep-alive v-else>
                <router-view class="v"></router-view>
            </keep-alive>
            <c-Footer class="c-Footer" :Showfooter="!isplaylist"></c-Footer>
        </div>
    </keep-alive>

</template>

<script>

import cFooter from '@/component/Home/cFooter.vue';

import vPlayList from './vPlayList.vue';

export default {
    name: 'v-Mian',
    data() {
        return {

        }
    },
    components: {

        cFooter,

        vPlayList
    },
    methods: {

    },
    computed: {

        //获取当前打开的歌单
        isplaylist() {

            return this.$store.state.songs.playList.name

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
        z-index: 9999;
    }

    .v {
        height: 100%;
    }

    .c-Footer {
        position: fixed;
        bottom: 0;
    }

}
</style>