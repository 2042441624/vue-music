<template>
    <div>
        <audio id="ado" ref="audio"></audio>
        <div class="nowSongs" v-show="song.name && !this.nowMusicPage">
            <div class="mp3Box">
                <!-- 歌曲图片 -->
                <div class="songImg"><img ref='songimg' /></div>
                <!-- 歌名显示 -->
                <div class="songDei" @click="toMusicPage()">
                    <p>{{ song.name }}-{{ song.singer }}</p>
                </div>

                <!-- 控制播放 -->
                <circularProgressBar :circular="parseInt((fStr / 100) * 360)">
                    <slot slot="playback">
                        <play-back :palyState="aState" class="minPlay" @resPlay="fPlay($event)"></play-back>
                    </slot>
                </circularProgressBar>
                <!-- 列表 -->
                <div class="songsListIconf">
                    <svg t="1664773103783" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="3133" width="24" height="24">
                        <path
                            d="M981.333333 917.333333a21.333333 21.333333 0 0 1-21.333333 21.333334H64a21.333333 21.333333 0 0 1 0-42.666667h896a21.333333 21.333333 0 0 1 21.333333 21.333333zM533.333333 170.666667h426.666667a21.333333 21.333333 0 0 0 0-42.666667H533.333333a21.333333 21.333333 0 0 0 0 42.666667z m426.666667 341.333333H533.333333a21.333333 21.333333 0 0 0 0 42.666667h426.666667a21.333333 21.333333 0 0 0 0-42.666667zM62.833333 593.12a37.213333 37.213333 0 0 0 38.713334-2.666667l309.333333-218.633333a37.333333 37.333333 0 0 0 0-60.973333l-309.333333-218.633334A37.333333 37.333333 0 0 0 42.666667 122.7V560a37.2 37.2 0 0 0 20.166666 33.12z"
                            fill="#8a8a8a" p-id="3134"></path>
                    </svg>
                </div>

            </div>

        </div>
        <c-music-page v-show="this.nowMusicPage" @resMusicPage="toMusicPage">
            <slot slot="progressBar">
                <progress-bar :slide="sStr" :fill="fStr"></progress-bar>
            </slot>
            <slot slot="control">
                <play-back :palyState="aState" class="maxPlay" @resPlay="fPlay($event)"></play-back>
            </slot>
        </c-music-page>
    </div>
</template>

<script>
import progressBar from '@/component/progressBar.vue';
import cMusicPage from '@/component/Home/cMusicPage.vue';
import playBack from '@/component/playback.vue';
import circularProgressBar from '@/component/circularProgressBar.vue';
export default {
    name: 'c-Audio',
    data() {
        return {
            nowMusicPage: false,
            nowLyric: [],
            sStr: 0,
            fStr: 0,
            aState: true
        }
    },
    components: {
        progressBar,
        cMusicPage,
        playBack,
        circularProgressBar

    },
    created() {
        this.song.lyric.then(res => this.nowLyric = res)
    },
    computed: {
        song() {
            return this.$store.state.songs.nowSong
        },
    },
    watch: {
        "song.name": {
            handler(newD, oldD) {
                if (newD !== oldD) {
                    this.cDom()
                }
            },
            deep: true,
            immediate: true
        }
    },
    methods: {
        toMusicPage() {
            this.nowMusicPage = !this.nowMusicPage
        },
        fPlay(isPlay) {
            this.aState = isPlay
            var audio = document.querySelector("#ado");
            if (this.aState) {
                audio.play()
            } else {
                audio.pause()
            }
        },
        cDom() {
            this.$nextTick(() => {

                var audio = document.querySelector("#ado");
                audio.src = this.song.url
                audio.controls = false;
                audio.loop = true;
                audio.volume = 0.3;
                // var voice = document.querySelector(".voice");
                // voice.addEventListener("click", function () {
                //     if (audio.muted) {
                //         audio.muted = false;
                //         console.log('打开音量');
                //     } else {
                //         audio.muted = true;
                //         console.log('关闭音量');
                //     }
                // });

                audio.addEventListener("canplay", () => {
                    audio.loading = false;
                    this.$refs.songimg.src = this.song.picUrl
                    if (this.aState) {
                        audio.play()
                    }
                });
                function transTime(time) {
                    let duration = parseInt(time);
                    let minute = parseInt(duration / 60);
                    let sec = (duration % 60) + "";
                    let isM0 = ":";
                    if (minute == 0) {
                        minute = "00";
                    } else if (minute < 10) {
                        minute = "0" + minute;
                    }
                    if (sec.length == 1) {
                        sec = "0" + sec;
                    }
                    return minute + isM0 + sec;
                }
                //   获取音频总时长
                if (audio) {
                    audio.load();
                    audio.oncanplay = function () {
                        var duraTime = document.querySelector(".duraTime");
                        duraTime.innerHTML = transTime(audio.duration);
                    }
                }
                //进度条的时长百分比
                var progress = document.querySelector(".progress");
                var slide = document.querySelector(".slide");
                let _this = this
                audio.ontimeupdate = function () {
                    var l = (audio.currentTime / audio.duration) * 100;
                    _this.sStr = l
                    _this.fStr = l
                    _this.$store.dispatch('addDur', audio.currentTime)
                    var currentTime = document.querySelector(".currentTime");
                    var duraTime = document.querySelector(".duraTime");
                    _this.$nextTick(() => {
                        currentTime.innerHTML = transTime(parseInt(audio.currentTime));
                        duraTime.innerHTML = transTime(audio.duration);
                    })

                };
                progress.onmousedown = function (e) {
                    var rate = (e.clientX - progress.offsetLeft) / this.clientWidth * audio.duration
                    audio.currentTime = rate - (progress.clientWidth * 0.005)
                };
                slide.addEventListener('mousedown', function (e) {
                    var x = e.clientX - this.offsetLeft; //240
                    document.onmousemove = function (e) {
                        let cx = e.clientX
                        var jlx = ((cx - x) / progress.clientWidth) * 100;
                        if (jlx <= 100 && jlx >= 0) {
                            slide.style.left = jlx + "%";
                        }
                        audio.currentTime = (jlx / 100) * audio.duration;
                    };
                    document.onmouseup = function () {
                        document.onmousemove = null;
                        document.onmouseup = null;
                    };
                })
                slide.ontouchstart = function (e) {
                    var x = e.targetTouches[0].clientX - this.offsetLeft; //240
                    document.ontouchmove = function (e) {
                        var jlx = ((e.targetTouches[0].clientX - x) / progress.clientWidth) * 100;
                        if (jlx <= 100 && jlx >= 0) {
                            slide.style.left = jlx + "%";
                        }
                        audio.currentTime = (jlx / 100) * audio.duration;
                    };
                    document.ontouchend = function () {
                        document.ontouchmove = null;
                        document.ontouchend = null;
                    };

                }
            })

        }

    }
};

</script>

<style lang="less" scoped>
.nowSongs {
    width: 100%;
    display: flex;
    flex-direction: column;

    .mp3Box {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 30px;
        padding: 0 0.4rem;
        margin: 2px 0;

        .songsListIconf {
            width: 24px;
            height: 24px;
        }

        .songImg {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            overflow: hidden;

            img {
                height: 100%;
            }
        }

    }


    .songDei {
        min-width: 200px;

        p {
            font-size: 0.5rem;
        }
    }

    .minPlay {
        width: 18px;
        height: 18px;
        margin: 0;
    }


    /* 音量操作按钮 */
    // .voice {
    //     width: 0.5rem;
    //     height: 0.5rem;
    //     border-radius: 50%;
    //     background: url(../../assets/img/voiceon.jpg) no-repeat center center;
    //     background-size: 0.5rem 0.5rem;
    // }

    #yinliang {
        display: none;
        position: relative;
        top: 0.2rem;
        left: -2.14rem;
    }

    /* 歌曲的时间 */
    .time {
        font-size: 0.2rem;
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
    }

}
</style>