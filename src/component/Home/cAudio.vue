<template>
    <div v-if="isSong.musicUrl" class="nowSongs">

        <audio controls autoplay :src="isSong.musicUrl"></audio>

        <h3>{{ isSong.musicName }}——<a>{{ isSong.Name }}</a></h3>

    </div>
</template>

<script>

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
    height: 60px;
 
    display: flex;
    flex-direction: column;
    audio {
        width: 100%;

    }
}
</style>