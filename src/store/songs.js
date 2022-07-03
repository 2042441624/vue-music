
import { song_url, song_detail } from '@/api/home';
export default {
    state: {
        //打开的歌单
        playList: [],
        //当前的播放的歌单
        songsList: [],
        //正常播放的歌曲
        nowSong: {
            musicName: '',
            Name: '',
            musicUrl: '',
            musicImg: ''
        }
    },

    mutations: {
        addsongs(state, id) {
            // 变更状态
            song_detail(id).then((res) => {
                let song = res.songs[0]
                state.nowSong.musicImg = song.al.picUrl
                state.nowSong.musicName = song.name;
                state.nowSong.Name = song.name
                song_url(id).then(res => {
                    state.nowSong.musicUrl = res.data[0].url
                })
            })
            //全局添加单条歌曲
            state.songsList.push(state.nowSong)
        }
    }
}