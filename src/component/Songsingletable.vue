<template>
    <!-- 全局歌单 -->
    <div id="view-the-background" ref="songlist">

        <div class="songListContainer">
            <div>
                <h2>当前播放{{this.$store.state.songs.historySongsList.length}}</h2>
                <div v-for=" (song,index) in this.$store.state.songs.historySongsList" :key="song.name" :index="index">
                    <div @click="switchSong(index)" class="list">{{song.name}}</div>
                    <div @click="removeSong(song.name,'当前')">
                        <svg t="1666230845553" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="1952" width="25" height="25">
                            <path
                                d="M561.17013333 509.06026667L858.02666667 213.73973333c14.03733333-13.968 14.1088-36.60053333 0.1408-50.63786666-13.99893333-14.06826667-36.592-14.10773333-50.62933334-0.1408L510.6048 458.31466667 216.256 163.06986667c-13.9328-13.96693333-36.59733333-14.03733333-50.63466667-0.07146667-14.00426667 13.96586667-14.03733333 36.63146667-0.0704 50.6688l294.27733334 295.1744-296.71466667 295.14026667c-14.0384 13.968-14.1088 36.59733333-0.14293333 50.63786666a35.7216 35.7216 0 0 0 25.3856 10.56c9.13066667 0 18.26666667-3.4688 25.25013333-10.4192l296.78613333-295.2128L807.4304 857.48266667c6.9824 7.02186667 16.15253333 10.53013333 25.35253333 10.53013333a35.72906667 35.72906667 0 0 0 25.28213334-10.45973333c13.99893333-13.96586667 14.03733333-36.592 0.07146666-50.62933334L561.17013333 509.06026667z m0 0"
                                p-id="1953" fill="#707070">
                            </path>
                        </svg>
                    </div>
                </div>

            </div>

            <div>
                <h2>历史播放{{this.$store.state.songs.songsList.length}}</h2>

                <div v-for=" (song,index) in this.$store.state.songs.songsList" :key="song.name" :index="index">
                    <div @click="switchSong(index)" class="his">{{song.name}}</div>
                    <div @click="removeSong(song.name,'历史')">
                        <svg t="1666230845553" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="1952" width="25" height="25">
                            <path
                                d="M561.17013333 509.06026667L858.02666667 213.73973333c14.03733333-13.968 14.1088-36.60053333 0.1408-50.63786666-13.99893333-14.06826667-36.592-14.10773333-50.62933334-0.1408L510.6048 458.31466667 216.256 163.06986667c-13.9328-13.96693333-36.59733333-14.03733333-50.63466667-0.07146667-14.00426667 13.96586667-14.03733333 36.63146667-0.0704 50.6688l294.27733334 295.1744-296.71466667 295.14026667c-14.0384 13.968-14.1088 36.59733333-0.14293333 50.63786666a35.7216 35.7216 0 0 0 25.3856 10.56c9.13066667 0 18.26666667-3.4688 25.25013333-10.4192l296.78613333-295.2128L807.4304 857.48266667c6.9824 7.02186667 16.15253333 10.53013333 25.35253333 10.53013333a35.72906667 35.72906667 0 0 0 25.28213334-10.45973333c13.99893333-13.96586667 14.03733333-36.592 0.07146666-50.62933334L561.17013333 509.06026667z m0 0"
                                p-id="1953" fill="#707070">
                            </path>
                        </svg>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
<script>

export default {
    name: 'song-list',
    data() {
        return {
            
        }
    },
    methods: {
        songList() {
            this.$emit('songList')
        },
        switchSong(index) {
            console.log(index);
            this.$store.dispatch('nextSong', index)

        },
        removeSong(name, str) {
            console.log(name, str);
            this.$store.dispatch('removeSong', { name, str })
        }
    },
    computed: {

    },
    mounted() {
        const aList = document.getElementsByClassName('list')

        const arr = Array.prototype.slice.call(aList);
        arr.map(e => { e.innerText === this.$store.state.songs.nowSong.name ? e.style.color = 'red' : '' })
        this.$refs.songlist.onmouseup = (e) => {
            e.target === this.$el ? this.songList() : ''
        }
    },
    updated() {
        const aList = document.getElementsByClassName('list')
        const arr = Array.prototype.slice.call(aList);
        arr.map(e => { e.innerText === this.$store.state.songs.nowSong.name ? e.style.color = 'red' : '' })

    },
};</script>
<style lang="less">
* {
    padding: 0;
    margin: 0;
    list-style: none;
}


#view-the-background {
    z-index: 99999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(102, 102, 102, 0.3);
    position: fixed;
    top: 0
}

.songListContainer {
    position: relative;
    top: 48%;
    bottom: 0;
    display: flex;
    overflow: scroll;
    flex-direction: row;

    height: 100%;
}

.songListContainer>div {
    flex-shrink: 0;
    width: 96%;
    margin: 8px;
    padding: 5px;
    height: 50%;
    box-sizing: border-box;
    background-color: rgb(255, 255, 255);
    border-radius: 15px;

    div {

        height: 25px;
        line-height: 25px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-self: center;
        font-size: 1.25rem;


    }

    h2 {
        margin-bottom: 8px;
    }
}
</style>