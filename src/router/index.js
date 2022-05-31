import vue from 'vue';
import vueRouter from 'vue-router';
vue.use(vueRouter)
const router = new vueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/playlist' },
        {
            path: "/home", name: 'home', component: () => import('@/view/vHome.vue'),

        },
        {
            path: "/playlist", name: 'playlist', component: () => import('@/view/vPlayList.vue'),
        },
    ]
})


export default router