import axios from '@/utils/axios.js';
//banner轮播图的接口请求 type---> 0:pc 1:android 2:iphone 3:ipad
export const banner = () => {
    return axios.request({
        url: `/banner`,
        params: {
            type: 2
        },
        method: 'get'
    })
}


//所以排行榜接口
export const topList = () => {
    return axios.request({
        url: `/toplist/detail`,
        method: 'get'
    })
}

//歌单详情接口(id)params
export const playlist_detail = (id) => {
    return axios.request({
        url: `/playlist/detail?id=${id}`,
        method: 'get'
    })
}



//获取歌曲详情(歌曲id的多个引用)
export const song_detail = (ids) => {

    // const {id} = params;
    return axios.request({
        url: `/song/detail`,
        params: { ids },
        method: 'get'
    })
}

//获取音乐url(audio)
export const song_url = (id) => {
    // const {id} = params;
    return axios.request({
        url: `/song/url?id=${id}`,
        method: 'get'
    })
}

//获取音乐的歌词
export const song_lyric = (id) => {

    return axios.request({
        url: `/lyric?id=${id}`,
        method: 'get'
    }).then(res => {
        /*do something*/
        let obj = res.lrc.lyric.split('\n')
        return obj
    })



}

//搜索的关键字
export const song_cloudsearch = (keywords) => {
    return axios.request({
        url: `/cloudsearch?keywords=${keywords}`,
        method: 'get'
    })
}
