import vue from 'vue';
import vueRouter from 'vue-router';
vue.use(vueRouter)
const router = new vueRouter({
    mode: 'history',
    routes: [
        {
            path: "/", name: '/', component: () => import('@/page/vMain.vue'), redirect: '/home',
            children: [{ path: "/home", name: 'home', component: () => import('@/page/vHome.vue') },
            { path: "/user", name: 'user', component: () => import('@/page/vUser.vue') }]
        },
        {
            path: "/playlist", name: 'playlist', component: () => import('@/page/vPlayList.vue'),
        },
    ]
})
export default router