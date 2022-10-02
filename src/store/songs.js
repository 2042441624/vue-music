
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
        addToSongsList() {

        }
    },
    mutations: {
        Add_SONG(state, song) {
            state.nowSong = song
            state.songsList.push(state.nowSong)

            var obj = {};
            state.songsList = state.songsList.reduce(function (item, next) {
                obj[next.key] ? '' : obj[next.key] = true && item.push(next);
                return item;
            }, []);


            localStorage.setItem('songsList', JSON.stringify(state.songsList))

        },
        Add_nowDur(state, Str) {
            state.nowDur = Str
        }
    },
    getters: {

    }
}