<template>
    <!-- 全局歌单 -->
    <div id="view-the-background" ref="songlist">

        <div class="songListContainer">


            <ul>
                <h2>当前播放{{this.$store.state.songs.songsList.length}}</h2>

                <li v-for=" (song,index) in this.$store.state.songs.songsList" :key="song.name" :index="index">
                    <span @click="switchSong(index)" ref="span">{{song.name}}</span><a><svg t="1666187621325"
                            class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            p-id="1944" width="16" height="16">
                            <path d="M704.28672 309.20704l28.95872 28.9792L334.6432 736.78848l-28.95872-28.9792z"
                                fill="#707070" p-id="1945"></path>
                            <path d="M341.03296 315.5968l398.60224 398.60224-28.95872 28.95872-398.60224-398.60224z"
                                fill="#707070" p-id="1946"></path>
                        </svg></a>
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
    z-index: 99999;
}

.songListContainer>ul {
    min-width: 100%;
    margin: 5px;
    height: 50vh;
    padding: 8px;
    background-color: rgb(255, 255, 255);
    border-radius: 15px;

    li {
        width: 100%;
        height: 25px;
        line-height: 25px;

        a {

            height: 25px;
            line-height: 25px;
        }
    }

    h2 {
        margin-bottom: 15px;
    }
}
</style>