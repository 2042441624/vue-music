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
        palyState: {
            type: Boolean,
            require: true,
            default: true
        }
    },
    computed: {},
    methods: {

        rePlay() {
            this.ToPaly = !this.ToPaly;
            this.$emit('resPlay', this.ToPaly)
        },
        next() {
            this.$emit('nextSong')
        },
        pre() {
            this.$emit('preSong')
        },
        //事件回调
        * loop(list, max = Infinity) {
            for (let i = 0; i < max; i++) {
                //循环索引
                yield list[i % list.length];
            }
        },

        songsList() {

        }
    },
    mounted() {

        // 刚加载的样式
        this.$refs.palyback.classList.contains('palyback') ? '' : this.$refs.palyback.classList.add('palyback')
        if (this.yesOk) {
            if (this.palyState) {
                this.$refs.palyback.classList.remove('zantingMax')
                this.$refs.palyback.classList.add('bofangMax')
            } else {
                this.$refs.palyback.classList.remove('bofangMax')
                this.$refs.palyback.classList.add('zantingMax')
            }
        } else {
            if (this.palyState) {
                this.$refs.palyback.classList.remove('zanting')
                this.$refs.palyback.classList.add('bofang')
            } else {
                this.$refs.palyback.classList.remove('bofang')
                this.$refs.palyback.classList.add('zanting')
            }
        }

    },
    watch: {

        palyState(newPlay) {

            if (this.yesOk) {
                if (newPlay) {
                    this.$refs.palyback.classList.remove('zantingMax')
                    this.$refs.palyback.classList.add('bofangMax')
                    return
                } else {
                    this.$refs.palyback.classList.remove('bofangMax')
                    this.$refs.palyback.classList.add('zantingMax')
                    return
                }
            } else {
                if (newPlay) {
                    this.$refs.palyback.classList.remove('zanting')
                    this.$refs.palyback.classList.add('bofang')
                    return
                } else {
                    this.$refs.palyback.classList.remove('bofang')
                    this.$refs.palyback.classList.add('zanting')
                    return
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
        z-index: 99999;
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