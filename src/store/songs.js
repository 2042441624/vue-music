
import { song_detail } from '@/api/home';
import { Song } from '@/utils/song';
import { song_lyric } from '@/api/home';
import util from '@/utils/util';

export default {

    state: {
        //是否播放
        playStatus: true,
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
        nowListName: '',
        nowDur: 0,
        //歌曲模式（顺序,循环，随机）
        songMode: '顺序',
    },

    actions: {
        switchingPlayStatus(state, boolean) {
            boolean ? state.commit('Switching_PLAYSTATUS', boolean) : state.commit('Switching_PLAYSTATUS')
        },
        nowListName(state, name) {
            state.commit('Add_NOWLISTNAME', name)
        },
        addPlayList(state, list) {
            list = list.map(s => {
                return s = s.id
            })

            state.commit('Add_PALYLIST', list)

        },
        addhistorySongsList(state, list) {

            state.commit('Add_HISTORY', list)
        },
        // 切换模式
        switchingMode(state) {

            state.commit('Switching_MODE',)
        },
        //添加单曲
        addsongs(state, id) {
            function song_lyricFunction(id) {


                return song_lyric(id).then((res) => {
                    return res
                })
            }

            async function returnToSong() {
                const arr = await song_lyricFunction(id)
                console.log(arr);
                const obj = await song_detail(id).then((res) => {
                    if (res.code === 200) {
                        res = res.songs[0]
                        return new Song({
                            ...res.al,
                            name: res.name,
                            singer: res.ar[0].name,
                            //获取歌曲路径
                            url: `https://music.163.com/song/media/outer/url?id=${id}.mp3`,
                            //获取歌词
                            lyric: arr
                        })


                    }
                })
                console.log(obj);
                return state.commit('Add_SONG', obj)
            }
            returnToSong()





        },
        //赋值进度条
        addDur(state, str) {
            state.commit('Add_nowDur', str)
        },
        nextSong(state, obj) {
            console.log(obj.id);
            obj.id ? state.commit('Next_SONG', obj) : state.commit('Next_SONG')
        },
        preSong(state) {
            state.commit('Pre_SONG')
        },
        removeSong(state, obj) {

            state.commit('Remove_SONG', obj)
        }
    },
    mutations: {
        Switching_PLAYSTATUS(state, boolean) {

            boolean ? state.playStatus = Boolean(boolean) : state.playStatus = !state.playStatus


        },
        Add_NOWLISTNAME(state, name) {
            state.nowListName = name
        },
        Add_LYRIC(state, p) {
            state.lyric = p
        },
        Add_HISTORY(state, list) {
            state.historySongsList = list
        },
        Add_PALYLIST(state, list) {
            song_detail(String(list)).then(res => state.playList = res.songs)
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
            //需要手动切换歌曲

            if (obj.id) {
                console.log('需要手动切换歌曲' + obj.name);
                state.nowSong = state[state.nowListName].filter(s => s.id === obj.id && s.name === obj.name)[0]

            } else {
                switch (state.songMode) {
                    case '顺序': {

                        let nowSongIndex = state[state.nowListName].findIndex(s => s.name === state.nowSong.name)
                        console.log('当前歌曲索引:' + nowSongIndex);
                        nowSongIndex += 1;
                        if (nowSongIndex >= state[state.nowListName].length) {
                            nowSongIndex = 0
                        }
                        console.log('下一条歌曲索引:' + nowSongIndex);
                        state.nowSong = {}
                        state.nowSong = state[state.nowListName][nowSongIndex].url ? state[state.nowListName][nowSongIndex] : this.dispatch('addsongs', state[state.nowListName][nowSongIndex].id)
                        console.log('当前歌单: ' + state.nowListName, '播放模式:' + state.songMode, '当前歌曲:' + state.nowSong.name);
                        break;
                    }
                    case '循环': {

                        console.log('当前歌单: ' + state.nowListName, '播放模式:' + state.songMode, '当前歌曲:' + state.nowSong.name);
                        let loop = state.nowSong
                        state.nowSong = {}
                        state.nowSong = loop
                        console.log('获取当前' + state.songMode + '歌曲对象如下');
                        console.log(state.nowSong);
                        break;
                    }
                    case '随机': {
                        console.log('当前歌单: ' + state.nowListName, '播放模式:' + state.songMode, '当前歌曲:' + state.nowSong.name);
                        state.nowSong = state[state.nowListName][util.RandomNum(0, (state[state.nowListName].length - 1))]
                        console.log(state.songMode, state.nowSong);
                        console.log('获取当前' + state.songMode + '歌曲对象如下');
                        console.log(state.nowSong);
                    }

                }
            }

        }

        ,
        //上一首歌曲
        Pre_SONG(state) {
            let nowSongIndex = state[state.nowListName].findIndex((obj) => obj.name == state.nowSong.name);
            nowSongIndex -= 1;
            if (nowSongIndex < 0) {
                nowSongIndex = state[state.nowListName].length - 1
            }
            state.nowSong = state[state.nowListName][nowSongIndex]
        },
        //添加单曲
        Add_SONG(state, song) {

            state.nowSong = song

            state.songsList.push(state.nowSong)
            state.historySongsList.push(state.nowSong)
            state.songsList = new util.exclude(state.songsList)
            state.historySongsList = new util.exclude(state.historySongsList)

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
