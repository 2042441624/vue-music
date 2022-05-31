<template>
    <div>
        <div v-if="showsongsList" class="nowSongs"></div>
        <figure v-if="isSong.musicUrl">
            <h3>{{ isSong.musicName }}——<a>{{ isSong.Name }}</a>
            </h3>
            <div @click="showsongs">
                图标
            </div>
            <audio controls autoplay :src="isSong.musicUrl">
            </audio>
        </figure>
    </div>

</template>

<script>
// import { song_url } from '@/api/home.js';
export default {
    name: 'c-Audio',
    data() {
        return {
            isSong: this.song,
            showsongsList: false
        };
    },
    props: {
        song: {
            musicName: '',
            Name: '',
            musicUrl: '',
            musciImg: ''
        }

    },
    mounted() {
        console.log(this.isSong);
        // song_url(1950825587).then(res => { console.log(res) })
    },

    methods: {
        showsongs() {

            this.showsongsList = !this.showsongsList;
            console.log(this.showsongsList);
        }
    },
};
</script>

<style lang="less" scoped>
.nowSongs {
    width: 100%;
    height: 55vh;
    padding: 0.5rem;
    background-color: antiquewhite;
}

div {
    width: 100%;

    audio {
        width: 390px;
    }
}
</style>