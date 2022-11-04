<template>

    <div class="v-PlayList">
        <c-Header class="c-Header">
            <slot slot="left">
                <div @click="routerBack">返回</div>
            </slot>
            <slot slot="centre">
                歌单
            </slot>
            <slot slot="right">
                更多
            </slot>
        </c-Header>

        <div v-for=" (song, index) in this.songs.playList" :key="song.id" :index="index" class="songList">
            <div @click="addSong(song.id,)" class="list">{{ song.name }}</div>

        </div>
    </div>





</template>
<script>

import { mapState } from 'vuex'
import cHeader from '@/component/Home/cHeader.vue';
export default {
    name: 'v-PlayList',
    components: {
        cHeader,
    },
    data() {
        return {
            playList: []
        }
    },
    computed: {
        ...mapState(['songs']),

    },
    watch: {
        'songs.playList.length': {
            handler(n) {
                console.log(n);

                if (n.length === 0) {
                    this.$router.back()
                }
            }
        }
    },
    methods: {
        routerBack() {
            this.$router.back()
        },
        songList() {
            this.$emit('songList')
        },
        addSong(id) {
            //点击播放
            this.$store.dispatch('addsongs', id)

        },
        switchSong(name, mode, index) {
            console.log({ name, mode, index });
            this.$store.dispatch('nextSong', { name, mode, index })
        },
    },
    mounted() {
        if (this.songs.playList.length === 0) {
            this.$router.back()
        }

    }
};
</script>

<style lang="less" scoped>
.v-PlayList {}

.songList {

    height: 25px;
    line-height: 25px;
    display: flex;
    justify-content: space-between;
    align-self: center;
    font-size: 1.25rem;


}
</style>