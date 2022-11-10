import vue from 'vue';
import vueRouter from 'vue-router';
vue.use(vueRouter)
const router = new vueRouter({
    mode: 'history',
    routes: [
        {
            path: "/", name: '/', component: () => import('@/page/vMain.vue'), redirect: '/home',
            children: [{ path: "/home", name: 'home', query: { songid: '' }, component: () => import('@/page/vHome.vue') },
            { path: "/user", name: 'user', component: () => import('@/page/vUser.vue') },
            {
                // query: { keyword: '' },
                path: "/search", name: 'search', component: () => import('@/page/vSearch.vue'),
            },
            {
                path: "/playlist", name: 'playlist', component: () => import('@/page/vPlayList.vue'),
            },]
        },
        {
            path: "/login", name: 'login', query: { id: '' }, component: () => import('@/page/vLogin.vue'),
        },

        {
            path: "/musicpage", name: 'musicpage', query: { id: '' }, component: () => import('@/component/Home/cMusicPage.vue'),
        },


    ]
})
export default router