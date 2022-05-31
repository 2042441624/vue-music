
import { song_url, song_detail } from '@/api/home';
export default {
    state: {
        //打开的歌单
        playList:[],
        //当前的播放的歌单
        songsList: [],
        //正常播放的歌曲
        nowSong: {
            musicName: '',
            Name: '',
            musicUrl: '',
            musciImg: ''
        }
    },

    mutations: {
        addsongs(state, id) {
            // 变更状态
            song_detail(id).then((res) => {
                state.nowSong.musicName = res.data.songs[0].name;
                state.nowSong.Name = res.data.songs[0].ar[0].name
                song_url(id).then(res => {
                    state.nowSong.musicUrl = res.data.data[0].url
                })
            })
            //全局添加单条歌曲
            state.songsList.push(state.nowSong)
            console.log(state.songsList);
        }
    }
}