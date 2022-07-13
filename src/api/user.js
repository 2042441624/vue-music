import axios from '@/utils/axios';

//手机登录的接口请求
export const cellphone = () => {
    // const { phone, password } = pramas
    const phone = '18926730109';
    const password = '2byjrsds';
    return axios.request({
        url: `/login/cellphone?phone=${phone}&password=${password}`,
        method: 'post'
    })
}

//用户歌单的接口请求
export const playlist = () => {
    return axios.request({
        url: `/user/playlist?uid=3363221402`,
        method: 'get'
    })
}

