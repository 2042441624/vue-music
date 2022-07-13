
import { song_detail } from '@/api/home';
import { Song } from '@/utils/song';
export default {

    state: {
        //打开的歌单
        playList: [],
        //当前的播放的歌单
        songsList: [],
        //正常播放的歌曲
        nowSong: {}
    },

    actions: {
        addsongs(state, id) {
            song_detail(id).then((res) => {
                if (res.code === 200) {
                    res = res.songs[0]
                    console.log(res.name);
                    state.commit('Add_SONG', new Song({ ...res.al, name: res.name, singer: res.ar[0].name, url: `https://music.163.com/song/media/outer/url?id=${id}.mp3` }))
                }
            })

        }
    },
    mutations: {
        Add_SONG(state, song) {
            state.nowSong = song
        }
    },
    getters:{

    }
}