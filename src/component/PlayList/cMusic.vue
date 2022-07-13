<template>
    <div class="c-Music">
        <ul>
            <li v-for=" (item, index) in this.$store.state.songs.playList.tracks" :key="item.id"
                @click="addSong(item.id)">
                <p>{{ index + 1 }}</p>
                <div>
                    <div class="nameBox" v-if='item.name.length > 14'>
                        <span>{{ item.name }}-{{ item.ar[0].name }} {{ item.originSongSimpleData ? ` | 原唱:
                                                    ${item.originSongSimpleData.artists[0].name}` : ''
                        }}</span>
                    </div>
                    <div class="nameBox" v-else>
                        <p>{{ item.name }}</p>
                        <span>{{ item.ar[0].name }} {{ item.originSongSimpleData ? ` | 原唱:
                                                    ${item.originSongSimpleData.artists[0].name}` : ''
                        }} </span>
                    </div>
                </div>
                <div>
                    <div>mv</div>
                    <div>歌曲详情页</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { getPlaylistDetail } from "@/api/home";
export default {
    name: 'c-Music',
    created() {
        console.log(this.$store.state.songs.playList.tracks);
    },
    data() {
        return {

        };
    },

    mounted() {
        getPlaylistDetail()
    },

    methods: {
        addSong(id) {
            this.$store.commit('addsongs', id)
        }

    },
};
</script>

<style lang="less" scoped>
.c-Music>ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 0.5rem;

    li {
        width: 100%;
        display: flex;
        flex-direction: row;
        height: 52px;
        flex-shrink: 0;
        justify-content: space-between;
        align-items: center;
    }



    div:first-of-type {
        width: 200px;

        p {
            width: 200px;
        }

        span {
            font-size: 6px;
            width: 200px;
            display: inline-block;
        }
    }

    div:last-of-type {
        width: 100px;
    }

}
</style>