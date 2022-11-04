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
            <div @click="switchSong(song.id, song.name, 'playList', index)" class="list">{{ song.name.slice(0, 10) }}
            </div>

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

        switchSong(id, name, mode, index) {
            this.$store.dispatch('addsongs', id)
            console.log('打开歌单的mode：' + mode);
            this.$store.dispatch('nextSong', { name, mode, index })
            this.$store.dispatch('nowListName', mode)
        },
    },
    created() {
        if (this.songs.playList.length === 0) {
            this.$router.back()
        }
        this.$store.dispatch('nowListName', 'playList')
    }
};
</script>

<style lang="less" scoped>
.songList {

    height: 25px;
    line-height: 25px;
    display: flex;
    justify-content: space-between;
    align-self: center;
    font-size: 1.25rem;


}
</style>