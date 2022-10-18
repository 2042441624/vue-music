<template>
    <!-- 全局歌单 -->
    <div id="view-the-background" ref="songlist">

        <div class="songListContainer">

            <ul>
                <h2>当前播放{{this.$store.state.songs.songsList.length}}</h2>
                <li v-for=" (song,index) in this.$store.state.songs.songsList" :key="song.name" :index="index">
                    <span @click="switchSong(index)" ref="span">{{song.name}}</span>
                </li>
            </ul>

        </div>
    </div>
</template>
<script>

export default {
    name: 'song-list',
    methods: {
        songList() {
            this.$emit('songList')
        },
        switchSong(index) {
            console.log(index);
            this.$store.dispatch('nextSong', index)

        }
    },
    computed: {

    },
    mounted() {
        // let aList = 
        const aList = document.getElementsByTagName('li')
        const arr = Array.prototype.slice.call(aList);
        arr.map(e => { console.log(e); })
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
    list-style: none;
}


#view-the-background {
    width: 100vw;
    height: 100vh;
    background-color: rgba(102, 102, 102, 0.3);
    position: fixed;
    top: 0
}

.songListContainer {
    padding: 5px;
    position: relative;
    top: 49%;
    bottom: 0;
    display: flex;
    overflow: scroll;
    flex-direction: row;
    z-index: 999999999999999999;
}

.songListContainer>ul {
    min-width: 100%;
    margin: 5px;
    height: 50vh;
    padding: 8px;
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
}
</style>