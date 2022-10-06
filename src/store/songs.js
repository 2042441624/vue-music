
import { song_detail, song_lyric } from '@/api/home';
import { Song } from '@/utils/song';
export default {

    state: {
        //打开的歌单
        playList: [],
        //当前的播放的歌单
        songsList: [],
        //正常播放的歌曲
        nowSong: {},
        nowDur: '',
        nowindex: '',

    },

    actions: {
        addsongs(state, id) {
            song_detail(id).then((res) => {
                if (res.code === 200) {
                    res = res.songs[0]
                    state.commit('Add_SONG', new Song({
                        ...res.al,
                        name: res.name,
                        singer: res.ar[0].name,
                        //获取歌曲路径
                        url: `https://music.163.com/song/media/outer/url?id=${id}.mp3`,
                        //获取歌词
                        lyric: song_lyric(id).then(res => res.lrc.lyric.split('\n'))
                    }))
                }
            })
        },
        addDur(state, str) {
            state.commit('Add_nowDur', str)
        },
        nextSong(state) {
            state.commit('Next_SONG')
        },
        preSong(state) {
            state.commit('Pre_SONG')
        }
    },
    mutations: {
        Next_SONG(state) {
            let nowSongIndex = state.songsList.findIndex((obj) => obj.name == state.nowSong.name);
            nowSongIndex += 1;

            if (nowSongIndex >= state.songsList.length) {
                nowSongIndex = 0
            }
            console.log(nowSongIndex);
            let newobj = state.songsList[nowSongIndex]
            state.nowSong = newobj
            newobj = null
        },
        Pre_SONG(state) {
            let nowSongIndex = state.songsList.findIndex((obj) => obj.name == state.nowSong.name);

            nowSongIndex -= 1;
            if (nowSongIndex < 0) {
                nowSongIndex = state.songsList.length - 1
            }
            state.nowSong = state.songsList[nowSongIndex]
        },
        Add_SONG(state, song) {
            state.nowSong = song
            state.songsList.unshift(state.nowSong)
            let newobj = {};
            state.songsList = state.songsList.reduce((preVal, curVal) => {
                newobj[curVal.id] ? '' : newobj[curVal.id] = preVal.push(curVal);
                return preVal
            }, [])

            localStorage.setItem('songsList', JSON.stringify(state.songsList))
        },
        Add_nowDur(state, Str) {
            state.nowDur = Str
        }
    },
    getters: {

    }
}