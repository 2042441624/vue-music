<template>
    <div>
        <div class="c-Resource">
            <div class="Resource-top">
                <h3>{{ this.title }}</h3>
                <a>更多</a>
            </div>
            <slot name="componentBottom">
                <div class="Resource-bottom  animate__animated animate__flipInX" style="animation-duration: 1500ms">
                    <div v-for=" (item, index) in recommendList" :key="item.id"
                        @click="watchPlayList(recommendList[index])">
                        <div><img :src='item.picUrl'></div>
                        <p>{{ item.name.slice(0, 12) }}...</p>
                    </div>
                </div>

            </slot>

        </div>
        <songsingletable v-if="table" @songList="() => { this.table = false }"></songsingletable>
    </div>

</template>

<script>
import songsingletable from '@/component/Songsingletable.vue';
import { playlist_detail } from '@/api/home'


export default {
    name: 'c-Resource',
    data() {
        return {
            table: false,
            playlist: []
        }
    },
    components: {
        songsingletable
    },
    props: {
        title: {
            type: String,
            // 与对象或数组的默认值不同，这不是一个工厂函数——这是一个用作默认值的函数
            default: '推荐歌单',
        },
        recommendList: {
            type: Array,
            default: null
        }
    },
    computed: {

    },
    methods: {
        watchPlayList(index) {
            this.$store.dispatch('nowListName', 'playList')
            playlist_detail(index.id).then((data) => {
                //引入工具类进行歌曲列表初始化
                this.playlist = data.playlist.trackIds
            }).then(() => {

                this.$store.dispatch('addPlayList', this.playlist)

                this.$store.dispatch('addsongs', this.playlist[0].id)
                this.$router.push({ name: 'playlist' })
            })
        }
    },
};
</script>

<style lang="less" scoped>
.c-Resource {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #fff;
    padding: 0.3rem 0.5rem;

    .Resource-top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .Resource-bottom::-webkit-scrollbar {
        display: none;
    }

    .Resource-bottom {
        width: 100%;
        display: flex;
        flex-direction: row;
        overflow: scroll;
        justify-content: space-between;
        animate-duration: 2s;
        animate-delay: 1s;

        div {
            width: auto;
            display: flex;
            flex-direction: column;
            justify-items: center;

            div {
                width: 85px;
                flex-shrink: 0;
                align-items: center;
                border-radius: 5%;
                overflow: hidden;
                margin-right: 0.5rem;

                img {
                    height: 85px;

                }
            }

            p {
                width: 100%;
                font-size: 8px;
            }
        }

    }
}
</style>