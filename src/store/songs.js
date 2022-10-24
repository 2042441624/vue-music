
import { song_detail } from '@/api/home';
import { Song, resSong_lyric } from '@/utils/song';
// , song_lyric 
import util from '@/utils/util';

export default {

    state: {
        //历史播放
        historySongsList: [],
        //当前的播放的歌单
        songsList: [],
        //打开的歌单
        playList: [],
        //喜欢的歌单
        FavoritePlaylist: [],
        //正在播放的歌曲
        nowSong: {},
        //当前歌曲的进度值
        nowDur: '',
        lyric: [],
        //歌曲模式（顺序,循环，随机）
        songMode: '顺序',
    },

    actions: {
        addPlayList(state, list) {
            state.commit('Add_PALYLIST', list)
        },
        addhistorySongsList(state, list) {
            console.log(list);
            state.commit('Add_HISTORY', list)
        },
        // 切换模式
        switchingMode(state) {

            state.commit('Switching_MODE',)
        },
        //添加单曲
        addsongs(state, id) {

            return song_detail(id).then((res) => {
                if (res.code === 200) {
                    res = res.songs[0]
                    let resSong = new Song({
                        ...res.al,
                        name: res.name,
                        singer: res.ar[0].name,
                        //获取歌曲路径
                        url: `https://music.163.com/song/media/outer/url?id=${id}.mp3`,
                        //获取歌词
                        lyric: resSong_lyric('lyric', id)
                    })
                    state.commit('Add_SONG', resSong)

                    state.commit('Add_LYRIC', resSong_lyric('lyric', id))
                }
            })
        },
        //赋值进度条
        addDur(state, str) {
            state.commit('Add_nowDur', str)
        },
        nextSong(state, obj = {}) {
            console.log(obj);
            obj.name ? state.commit('Next_SONG', obj) : state.commit('Next_SONG')
        },
        preSong(state) {
            state.commit('Pre_SONG')
        },
        removeSong(state, obj) {

            state.commit('Remove_SONG', obj)
        }
    },
    mutations: {
        Add_LYRIC(state, p) {
            state.lyric = p
        },
        Add_HISTORY(state, list) {
            state.historySongsList = list
        },
        Add_PALYLIST(state, list) {
            state.playList = list
        },
        Remove_SONG(state, obj) {
            const nowIndex = state[obj.mode].findIndex(obj => obj.name == state.nowSong.name)
            state[obj.mode] = state[obj.mode].filter(s => s.name !== obj.name)
            // 获取当前歌曲索引
            console.log(state[obj.mode].length, state[obj.mode][nowIndex - 1], nowIndex);
            if (obj.name === state.nowSong.name) {
                // 获取当前歌曲减1后的的歌曲

                let nowAllList = util.allSongsList(state)

                state.nowSong = state[obj.mode][nowIndex] ? state[obj.mode][nowIndex] : nowAllList[0][nowAllList[0].name][0] ? nowAllList[0][nowAllList[0].name][0] : { id: 0, name: '无音乐', singer: '请添加', album: '', picUrl: '', duration: 0, url: '', lyric: [] }
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
        Next_SONG(state, obj = {}) {

            if (obj.name) {
                state.nowSong = state[obj.mode][obj.index]

            } else {
                
                if (state.songMode === '顺序') {
                    console.log(state.songMode);
                    let nowSongIndex = state.songsList.obj.name == state.nowSong.name
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
            state.nowSong = song
            state.songsList.unshift(state.nowSong)
            state.historySongsList.unshift(state.nowSong)
            state.songsList = new util.exclude(state.songsList)
            state.historySongsList = new util.exclude(state.historySongsList)
            //当前会话歌单缓存
            sessionStorage.setItem('songsList', JSON.stringify(state.songsList))
            //历史本地会话歌单缓存
            localStorage.setItem('historySongsList', JSON.stringify(state.historySongsList))
        },
        Add_nowDur(state, Str) {
            state.nowDur = Str
        },

    },
    getters: {

    }
}
