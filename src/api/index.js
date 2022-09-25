import axios from '@/utils/axios'
import { defaultLimit } from '@/config'
import { formatTopSongs } from '@/utils/song'


// 排行榜列表
export const getToplistDetail = () => {
  return axios.request({
    url: '/toplist/detail',
    method: 'get'
  })
}

// 推荐歌单
export const getPersonalized = () => {
  return axios.request({
    url: '/personalized',
    method: 'get'
  })
}

// 歌单详情
export function getPlaylistDetail(id) {
  return new Promise((resolve, reject) => {
    axios.request('/playlist/detail', {
        params: { id }
      })
      .then(({ playlist }) => playlist || {})
      .then(playlist => {
        const { trackIds, tracks } = playlist
        if (!Array.isArray(trackIds)) {
          reject(new Error('获取歌单详情失败'))
          return
        }
        //  过滤完整歌单 如排行榜
        if (tracks.length === trackIds.length) {
          playlist.tracks = formatTopSongs(playlist.tracks)
          resolve(playlist)
          return
        }
        // 限制歌单详情最大 500
        const ids = trackIds.slice(0, 500).map(v => v.id).toString()
        getMusicDetail(ids).then(({ songs }) => {
          playlist.tracks = formatTopSongs(songs)
          resolve(playlist)
        })
      })
  })
}

// 搜索
export function search(keywords, page = 0, limit = defaultLimit) {
  return axios.request('/search', {
    params: {
      offset: page * limit,
      limit: limit,
      keywords
    }
  })
}

// 热搜
export function searchHot() {
  return axios.request('/search/hot')
}

// 获取用户歌单详情
export function getUserPlaylist(uid) {
  return axios.request('/user/playlist', {
    params: {
      uid
    }
  })
}

// 获取歌曲详情
export function getMusicDetail(ids) {
  return axios.request('/song/detail', {
    params: {
      ids
    }
  })
}

// 获取音乐是否可以用
export function getCheckMusic(id) {
  return axios.request('/check/music', {
    params: {
      id
    }
  })
}

// 获取音乐地址
export function getMusicUrl(id) {
  return axios.request('/song/url', {
    params: {
      id
    }
  })
}

// 获取歌词
export function getLyric(id) {
  const url = '/lyric'
  return axios.request(url, {
    params: {
      id
    }
  })
}

// 获取音乐评论
export function getComment(id, page, limit = defaultLimit) {
  return axios.request('/comment/music', {
    params: {
      offset: page * limit,
      limit: limit,
      id
    }
  })
}
