<template>

    <c-Resource :title='title' class="padding">
        <template slot="componentBottom">
            <div class="topListbox">
                <!-- //五条数据 -->
                <div class="c-Resource" v-for=" (item, index) in topList" :key="item.id">
                    <div class="Resource-top">
                        <h3>{{ item.name }} ></h3>
                        <div>更多</div>
                    </div>
                    <div class="Resource-bottom">
                        <!-- //三条数据      ar.originSongSimpleData() -->
                        <div v-for=" (item, now) in playlist[index]" :key="item.id" @click="addSong(item.id)">
                            <div><img :src="item.al.picUrl"></div>
                            <div class="nameBox" v-if='item.name.length > 14'>
                                <p>{{ item.name }}-<span>{{ item.ar[0].name }} {{ item.originSongSimpleData ? ` | 原唱:
                                                                        ${item.originSongSimpleData.artists[0].name}` : ''
                                }} </span></p>
                            </div>
                            <div class="nameBox" v-else>
                                <p>{{ item.name }}</p>
                                <span>{{ item.ar[0].name }} {{ item.originSongSimpleData ? ` | 原唱:
                                                                    ${item.originSongSimpleData.artists[0].name}` : ''
                                }} </span>
                            </div>
                            <div>
                                <h2>{{ now + 1 }}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </c-Resource>
</template>

<script>
import cResource from './cResource.vue';
import { topList, playlist_detail } from '@/api/home';

// playlist_detail, song_url ,
export default {
    name: 'c-Toplist',
    data() {
        return {
            title: '排行榜',
            //获取排行榜的所有歌单
            topList: [],
            //所有歌单的歌曲
            playlist: [],
            songsId: []
        };
    },
    mounted() {
        topList().then((result) => {
            //获取排行榜的所有歌单
            this.topList = result.list.slice(0, 10)
            // 19723756
            //获取所有歌单的详情
            this.topList.forEach(e => {
                playlist_detail(e.id).then(
                    res => {
                        //当前歌单的前三条
                        this.playlist.push(res.playlist.tracks.slice(0, 3))
                    }
                )
            })
        })


    },
    methods: {
        addSong(id) {
            this.$store.dispatch('addsongs', id)
            this.$store.dispatch('switchingPlayStatus', true)
        }
    },
    components: {
        cResource
    }
};
</script>

<style lang="less" scoped>
div::-webkit-scrollbar {
    display: none;
}

.topListbox::-webkit-scrollbar {
    display: none;
}

.topListbox {
    width: auto;
    display: flex;
    overflow: scroll;
    flex-direction: row;

    .c-Resource {
        width: auto;
        margin-right: 5px;
        border-radius: 10px;
        border: 1px solid #F6F6F6;
        box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 20px 0 #F6F6F6;

        .Resource-top {
            margin-bottom: 0.5rem;

        }

        .Resource-bottom {
            width: 300px;
            display: flex;
            flex-direction: column;

            div {
                width: auto;
                height: 40px;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                line-height: 50px;
                margin: 0.25rem;

                div {
                    min-width: 34px;

                    img {
                        width: 40px;
                        height: 40px;
                    }

                    h2 {
                        font-weight: 500;
                    }
                }

                div.nameBox {
                    width: 200px;
                    flex-shrink: 1;
                    display: flex;
                    flex-direction: column;
                    line-height: 25px;
                    align-items: flex-start;

                    p {
                        width: 100%;
                        font-size: 0.5rem;
                        line-height: 15px;
                        font-weight: 800;
                    }

                    span {
                        font-size: 0.25rem;
                    }
                }
            }



        }
    }
}

.topListbox::-webkit-scrollbar {
    display: none;

}
</style>