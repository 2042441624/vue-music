<template>
    <!-- 全局歌单 -->
    <div id="view-the-background" ref="songlist">
        <div class="songListContainer">
            <div>
                <li v-for=" song  in this.$store.state.songs.songsList" :key="song.name">{{song.name}}</li>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: 'song-list',
    methods: {
        songList() {
            this.$emit('songList')
        }
    },
    mounted() {
        this.$refs.songlist.onmouseup = (e) => {

            e.target === this.$el ? this.songList() : ''
        }
    },
    updated() {


    },
};</script>
<style lang="less">
* {
    padding: 0;
    margin: 0;
}


#view-the-background {
    width: 100vw;
    height: 100vh;
    background-color: rgba(102, 102, 102, 0.3);
    position: fixed;
    top: 0
}

.songListContainer {

    position: relative;
    top: 49%;
    bottom: 0;
    display: flex;
    overflow: scroll;
    flex-direction: row;
    z-index: 999999999999999999;
}

.songListContainer>div {
    min-width: 100vw;
    margin: 5px;
    height: 50vh;
    background-color: rgb(191, 108, 108);
    border-radius: 15px;
}
</style>