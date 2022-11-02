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
            <div @click="addSong(song.id)" class="list">{{ song.name }}</div>
        
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
        ...mapState(['songs'])
    },

    methods: {
        routerBack() {
            this.$router.back()
        },
        songList() {
            this.$emit('songList')
        },
        addSong(id) {
            this.$store.dispatch('addsongs', id)
            this.$store.dispatch('switchingPlayStatus', true)
        },
        removeSong(name, mode) {
            this.$store.dispatch('removeSong', { name, mode })
        }
    },
    mounted() {


    }
};
</script>

<style lang="less" scoped>
.v-PlayList {

  

}

.songList {

    height: 25px;
    line-height: 25px;
    display: flex;
    justify-content: space-between;
    align-self: center;
    font-size: 1.25rem;


}
</style>