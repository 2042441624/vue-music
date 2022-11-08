import axios from '@/utils/axios';

//手机登录的接口请求
export const cellphone = (pramas) => {
    console.log(pramas);
    const { phone, act_pwd } = pramas
    console.log(phone);
    console.log(act_pwd);
    return axios.request({
        url: `/login/cellphone?phone=${phone}&password=${act_pwd}`,
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

