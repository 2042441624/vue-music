import { toHttps } from './util'
import { song_lyric } from '@/api/home';
function filterSinger(singers) {
    let arr = []
    singers.forEach(item => {
        arr.push(item.name)
    })
    return arr.join('/')
}
//创建一个歌曲类
export class Song {
    // 初始化歌曲ID，歌曲名字，歌手名字，音乐图片，歌曲详情，以及歌曲的audio的路径
    constructor({ id, name, singer, album, picUrl, duration, url, lyric }) {
        this.id = id
        this.name = name
        this.singer = singer
        this.album = album
        this.picUrl = picUrl
        this.duration = duration
        this.url = url
        this.lyric = lyric
        this.time = new Date()
    }
}

//引用歌曲类(传参数)
export function createPlayList(music) {
    return new Song({
        id: music.id,
        name: music.name,
        singer: music.artists.length > 0 && filterSinger(music.artists),
        album: music.album.name,
        image: toHttps(music.album.picUrl) || null,
        duration: music.duration / 1000,
        //官方问你以ID来获取的歌曲路径
        url: `https://music.163.com/song/media/outer/url?id=${music.id}.mp3`
    })
}

export function createTopList(music) {
    return new Song({
        id: music.id,
        name: music.name,
        singer: music.ar.length > 0 && filterSinger(music.ar),
        album: music.al.name,
        image: toHttps(music.al.picUrl),
        duration: music.dt / 1000,
        url: `https://music.163.com/song/media/outer/url?id=${music.id}.mp3`
    })
}
//添加歌单(歌曲数据格式化)---放回一个数据需要暂存起来
const formatSongs = function formatPlayList(list) {
    //面向对象编程
    let Songs = []
    list.forEach(item => {
        const musicData = item
        if (musicData.id) {
            Songs.push(createPlayList(musicData))
        }
    })
    return Songs
}

export default { formatSongs, resSong_lyric }

export const resSong_lyric = function resSong_lyric(key, id) {
    function requestMethod(id) {
        return new Promise(resolve => {
            song_lyric(id).then(res => {
                /*do something*/
                resolve(res)
            })
        })
    }
    let getData = function (key, id) {

        let p = localStorage.getItem(key);
        let parse = JSON.parse(p);

        //当localStorage中有数据，且在有效期内时，直接返回当中的数据
        if (p !== null) {
            return new Promise(resolve => {
                resolve(parse);
            });
        }
    
        return new Promise(resolve => {
            requestMethod(id).then(res => {
                if (res === null) {
                    alert("数据请求失败");
                }
                let obj = { l: res.lrc.lyric.split('\n') }
                localStorage.setItem(key, JSON.stringify(res.lrc.lyric.split('\n')));
                resolve(obj);
            });
        })
    }

    return getData(key, id)
}

export const formatTopSongs = function formatTopList(list) {
    let Songs = []
    list.forEach(item => {
        const musicData = item
        if (musicData.id) {
            Songs.push(createTopList(musicData))
        }
    })
    return Songs
}