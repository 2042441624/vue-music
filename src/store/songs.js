
import { song_detail, song_lyric } from '@/api/home';
import { Song } from '@/utils/song';
import util from '@/utils/util';
export default {

    state: {
        //打开的歌单
        playList: [],
        //历史播放
        historySongsList: [],

        //喜欢的歌单
        FavoritePlaylist: [],
        //当前的播放的歌单
        songsList: [],
        //正在播放的歌曲
        nowSong: {},
        //当前歌曲的进度值
        nowDur: '',
        //歌曲模式（顺序,循环，随机）
        songMode: '顺序',
    },

    actions: {
        // 切换模式
        switchingMode(state) {

            state.commit('Switching_MODE',)
        },
        //添加单曲
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
        //赋值进度条
        addDur(state, str) {
            state.commit('Add_nowDur', str)
        },
        nextSong(state, songData = "") {
            songData ? state.commit('Next_SONG', songData) : state.commit('Next_SONG')
        },
        preSong(state) {
            state.commit('Pre_SONG')
        },
        removeSong(state, obj) {

            state.commit('Remove_SONG', obj)
        }
    },
    mutations: {
        Remove_SONG(state, obj) {
            // state.songsList = state.songsList.filter(s => s.name != obj.name) 


            if (obj.name === state.nowSong.name) {
                let nowSongIndex = state.songsList.findIndex((obj) => state.nowSong.name === obj.name);
                nowSongIndex += 1;

                if (nowSongIndex >= state.songsList.length - 1) {
                    nowSongIndex = 0
                }

                state.nowSong = state[obj.mode][nowSongIndex]
                state[obj.mode] = state[obj.mode].filter((s) => s.name !== obj.name)

            } else {
                state[obj.mode] = state[obj.mode].filter((s) => s.name !== obj.name)
            }
        },
        Switching_MODE(state) {
            let ModeList = ['顺序', '循环', '随机']
            console.log(typeof state.songMode)
            let ModeIndex = ModeList.indexOf(state.songMode) + 1
            if (ModeIndex > ModeList.length - 1) {
                ModeIndex = 0
            }
            state.songMode = ModeList[ModeIndex]
        },
        //下一首歌曲
        Next_SONG(state, songData = "") {
            if (songData) {
                state.nowSong = state.songsList[Number(songData)]
            } else {
                if (state.songMode === '顺序') {
                    console.log(state.songMode);
                    let nowSongIndex = state.songsList.findIndex((obj) => obj.name == state.nowSong.name);
                    nowSongIndex += 1;

                    if (nowSongIndex >= state.songsList.length) {
                        nowSongIndex = 0
                    }
                    let newobj = state.songsList[nowSongIndex]
                    state.nowSong = newobj
                    newobj = null
                } else if (state.songMode === '循环') {
                    let loop = state.nowSong
                    state.nowSong = {}
                    state.nowSong = loop

                } else if (state.songMode === '随机') {

                    state.nowSong = state.songsList[util.RandomNum(0, (state.songsList.length - 1))]
                    console.log(state.songMode, state.nowSong);
                }
            }

            return
        },
        //上一首歌曲
        Pre_SONG(state) {
            let nowSongIndex = state.songsList.findIndex((obj) => obj.name == state.nowSong.name);

            nowSongIndex -= 1;
            if (nowSongIndex < 0) {
                nowSongIndex = state.songsList.length - 1
            }
            state.nowSong = state.songsList[nowSongIndex]
        },
        //添加单曲
        Add_SONG(state, song) {
            let str = localStorage.getItem('songsList')

            state.songsList = JSON.parse(str)
            state.nowSong = song
            state.songsList.unshift(state.nowSong)
            state.historySongsList.unshift(state.nowSong)
            let newobj = {};
            state.songsList = state.songsList.reduce((preVal, curVal) => {
                newobj[curVal.id] ? '' : newobj[curVal.id] = preVal.push(curVal);
                return preVal
            }, [])


            sessionStorage.setItem('historySongsList', JSON.stringify(state.historySongsList))
            localStorage.setItem('songsList', JSON.stringify(state.songsList))
        },
        Add_nowDur(state, Str) {
            state.nowDur = Str
        },

    },
    getters: {
    }
}
