//user用户的全局状态
// import { cellphone } from '@/api/user';
export default {
    state: {
 
        data: JSON.parse(localStorage.getItem('data'))
    },
    actions: {
        addUser(state, res) {
            state.commit('ADD_USER', res)
        },
    },
    mutations: {
        ADD_USER(state, res) {
            state.data = res
        }
    },
    getters: {}
}