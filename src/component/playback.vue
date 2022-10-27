<template>
    <div class="Song-Controls">
        <c-gren v-if="yesOk"></c-gren>
        <div v-if="yesOk" @click="pre">上一首</div>
        <div class="palyback" ref="palyback" @click="rePlay"></div>
        <div v-if="yesOk" @click="next">下一首</div>
        <div v-if="yesOk" @click="songsList">歌单</div>
    </div>


</template>

<script>
import cGren from '@/component/cGren.vue';
import { mapState } from 'vuex';
export default {
    name: 'play-Back',
    components: {
        cGren
    },
    props: {
        yesOk: {
            type: Boolean,
            require: true,
            default: false
        },
    },
    computed: {
        ...mapState(['songs'])
    },
    methods: {

        rePlay() {
            this.$emit('resPlay')
        },
        next() {
            this.$emit('nextSong')
        },
        pre() {
            this.$emit('preSong')
        },

        songsList() {
            this.$emit('songsList')
        }
    },
    mounted() {
        if (this.yesOk) {
            if (this.songs.playStatus) {
                this.$refs.palyback.classList.remove('zantingMax')
                this.$refs.palyback.classList.add('bofangMax')
            } else {
                this.$refs.palyback.classList.remove('bofangMax')
                this.$refs.palyback.classList.add('zantingMax')
            }
        } else {
            if (this.songs.playStatus) {
                this.$refs.palyback.classList.remove('zanting')
                this.$refs.palyback.classList.add('bofang')
            } else {
                this.$refs.palyback.classList.remove('bofang')
                this.$refs.palyback.classList.add('zanting')
            }
        }

    },
    watch: {

        'songs.playStatus'(newPlay) {
            if (this.yesOk) {
                if (newPlay) {
                    this.$refs.palyback.classList.remove('zantingMax')
                    this.$refs.palyback.classList.add('bofangMax')
                } else {
                    this.$refs.palyback.classList.remove('bofangMax')
                    this.$refs.palyback.classList.add('zantingMax')
                }
            } else {
                if (newPlay) {
                    this.$refs.palyback.classList.remove('zanting')
                    this.$refs.palyback.classList.add('bofang')
                } else {
                    this.$refs.palyback.classList.remove('bofang')
                    this.$refs.palyback.classList.add('zanting')
                }
            }
        }
    },
}





</script>
<style lang="less">
.Song-Controls {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .palyback {
        border-radius: 50%;
        overflow: hidden;
        position: relative;

    }

    .bofang {
        background-image: url(../assets/img/bofang.png);

    }

    .zanting {
        background-image: url(../assets/img/zanting.png);

    }

    .zanting,
    .bofang {
        width: 29px;
        height: 29px;
        background-size: cover;
    }

    .bofangMax {
        width: 45px;
        height: 45px;
        background-image: url(../assets/img/bofang.png);

        background-color: black;
        background-size: cover;
    }

    .zantingMax {
        width: 45px;
        height: 45px;
        background-image: url(../assets/img/zanting.png);
        background-color: black;
        background-size: cover;
    }
}
</style>