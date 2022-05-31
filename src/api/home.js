import axios from '@/axios/index';

//banner轮播图的接口请求 type---> 0:pc 1:android 2:iphone 3:ipad
export const banner = () => {
    return axios.request({
        url: `/banner`,
        params: {
            type: 1
        },
        method: 'get'
    })
}

//推荐的歌曲(需要登陆)
export const recommend_Resource = () => {
    return axios.request({
        url: `recommend/resource`,
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
        url:`/playlist/detail?id=${id}`,
        method:'get'
    })
}

//获取音乐url(audio)
export const song_url = (id) => {
    // const {id} = params;
    return axios.request({
        url:`/song/url?id=${id}`,
        method:'get'
    })
}

//获取歌曲详情
export const song_detail = (id) => {
    // const {id} = params;
    return axios.request({
        url:`/song/detail?ids=${id}`,
        method:'get'
    })
}