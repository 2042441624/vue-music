<template>
    <address ref="address" class="text">
        <c-header>
            <slot slot="left">
                <div @click="routerBack">回退</div>
            </slot>

        </c-header>
        <div class='lyric'>
            <div class="lyricConter" ref="lyricConter">
                <div class="lyricBox" v-if="this.nowLyric.length" ref="lyricBox">
                    <p v-for="(l, index) of this.nowLyric" :key="index" ref="nowP">
                        {{ l.split(']')[1] }} </p>
                </div>
            </div>
            <div class="Onlyric"></div>
        </div>

        <slot name="progressBar"></slot>
        <slot name="control"></slot>
    </address>
</template>

<script>
import { mapState } from 'vuex'
import cHeader from '@/component/Home/cHeader.vue';
export default {
    name: 'c-Music-Page',
    data() {
        return {
            nowLyric: [],
            nowTimeLyric: [],
            pIndex: 0

        }
    },
    props: {
        slideStr: {
            type: String,
        },
        fillStr: {
            type: String,
        },
    },

    methods: {
        routerBack() {
            this.$emit('resMusicPage')
        },
        getElementPosition(element) {
            let top = element.offsetTop //这是获取元素距父元素顶部的距离
            let left = element.offsetLeft
            var current = element.offsetParent //这是获取父元素
            while (current !== null) {
                //当它上面有元素时就继续执行
                top += current.offsetTop //这是获取父元素距它的父元素顶部的距离累加起来
                left += current.offsetLeft
                current = current.offsetParent //继续找父元素
            }
            return {
                top,
                left,
            }
        }

    },
    mounted() {
        this.$refs.address.style.backgroundImage = `url(` + this.songs.nowSong.picUrl + `)`
        this.songs.nowSong.lyric.then(res => {
            this.nowLyric = res.filter(l => l != '')
            this.nowTimeLyric = this.nowLyric.map(l => l = /(?<=\[).*(?=\])/.exec(l)[0])
            // console.log(Number(this.nowTimeLyric[80].split(':')[0]) > 0 ? Number(this.nowTimeLyric[80].split(':')[0]) * 60 : 0);
        })

    },
    updated() {
        this.songs.nowSong.lyric.then(res => this.nowLyric = res)

    },
    computed: {
        ...mapState(['songs']),

    },
    watch: {
        "songs.nowDur": {
            handler(newD) {
                let resNowTimeLyric = this.nowTimeLyric

                resNowTimeLyric.forEach((t) => {
                    let min = Number(t.split(':')[0]) > 0 ? Number(t.split(':')[0]) * 60 : 0
                    let sec = Number(t.split(':')[1].split('.')[0]) > 0 ? Number(t.split(':')[1].split('.')[0]) : 0

                    if ((min + sec) === Number(String(newD).split('.')[0])) {

                        this.$refs.nowP.filter(p => !this.nowLyric[this.nowTimeLyric.indexOf(t)].includes(p.innerHtml)).map(p => p.style.color = '')
                        this.$refs.nowP[this.nowTimeLyric.indexOf(t)].style.color = 'white'
                        this.pIndex = this.nowTimeLyric.indexOf(t)
                    }

                })

            },
            deep: true,
            immediate: true
        },
        "pIndex": {
            handler(newD, OldD) {

                if (newD != OldD && this.$refs.lyricBox) {
                    this.$refs.lyricConter.scrollTo({
                        top: this.$refs.lyricConter.scrollTop + (this.$refs.nowP[newD].getBoundingClientRect().top - 340),
                        behavior: "smooth"
                    })
                }

            },
            deep: true,
            immediate: true
        }
    },
    components: {
        cHeader,
    },

}
</script>

<style lang="less" scoped>
address {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;


    .lyric {
        position: relative;
    }

    .Onlyric {
        position: absolute;
        width: 100%;
        height: 20px;
        top: 300px;
        background-color: aliceblue;
        opacity: 0.5;
    }

    .lyricConter {
        position: relative;
        overflow: scroll;
        height: 600px;

        .lyricBox {

            position: relative;
            padding: 300px 0;

            p {
                text-align: center;
                height: 20px;
                font-size: 16px;
                line-height: 20px;
            }
        }


    }



    .time {
        font-size: 0.2rem;
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
    }

}

.text {
    background-position: 50% 0;
    background-size: cover;
}

.text::before {

    background-color: rgb(218, 218, 218);
    opacity: 0.5;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    filter: blur(6px);
}
</style>
