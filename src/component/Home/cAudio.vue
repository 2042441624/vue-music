<template>
    <div class="nowSongs" v-if="song.name">

        <div class="mp3Box">
            <div class="songImg"><img ref='songimg' /></div>
            <!-- 播放开关 -->
            <img class="radioBox" />
            <audio id="ado"></audio>

            <div class="songDei">
                <p>{{ song.name }}</p><span>{{ song.singer }}</span>
            </div>
            <!-- 时间 -->
            <div class="time">
                <span class="currentTime">00:00</span> /
                <span class="duraTime">00:00</span>
            </div>
        </div>

        <div class="voice"></div>
        <!-- 进度条盒子 -->
        <div class="progress">
            <div class="slide"></div>
            <div class="fill"></div>
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'c-Audio',
    computed: {
        song() {
            return this.$store.state.songs.nowSong
        },
        ...mapState([
            "nowSong"
        ]),

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
        cDom() {

            this.$nextTick(() => {

                var audio = document.querySelector("#ado");
                audio.src = this.song.url
                audio.controls = false;
                audio.loop = true;
                audio.volume = 0.3;
                var rBox = document.querySelector(".radioBox");
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
                    this.$refs.songimg.src = this.song.picUrl
                    audio.play()
                    audio.loading = false;
                });
                var radioBox = document.querySelector(".radioBox");
                radioBox.addEventListener("click", function bofan() {
                    if (audio.paused) {
                        audio.play();
                        rBox.className = "radioBox";
                    } else {
                        audio.pause();
                        rBox.className = "zanting";
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
                var progress = document.querySelector(".progress");
                var slide = document.querySelector(".slide");
                var fill = document.querySelector(".fill");
                audio.ontimeupdate = function () {
                    var l = (audio.currentTime / audio.duration) * 100;
                    slide.style.left = l + "%";
                    fill.style.width = l + "%";
                    if (audio.currentTime == 0) {
                        slide.style.left = "0%";
                    }
                    var currentTime = document.querySelector(".currentTime");
                    currentTime.innerHTML = transTime(parseInt(audio.currentTime));
                    var duraTime = document.querySelector(".duraTime");
                    duraTime.innerHTML = transTime(audio.duration);
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

    },
    updated() {


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
        justify-content: space-between;
        align-items: center;
        height: 60px;
        padding: 0 0.4rem;

        .songImg {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            overflow: hidden;

            img {
                height: 100%;
            }
        }

    }

    /* 操作按钮 */
    .radioBox,
    .zanting {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1.5px black solid;
        background: no-repeat center center;
    }

    .radioBox {
        background-image: url(../../assets/img/bofang.jpg);
        background-size: cover
    }

    .zanting {
        background-image: url(../../assets/img/zanting.jpg);
        background-size: cover
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

    /* 进度条盒子 */
    .progress {
        position: relative;
        width: 100%;
        height: 0.08rem;
        background-color: rgb(237, 235, 235);
    }

    /* 进度条操作点 */
    .slide {
        position: absolute;
        top: -0.1rem;
        width: 0.3rem;
        height: 0.3rem;
        border-radius: 50%;
        z-index: 9;
    }

    /* 进度条盒子 */
    .fill {
        position: absolute;
        top: 0x;
        height: 0.08rem;
        background-color: rgb(178, 178, 178);

    }
}
</style>