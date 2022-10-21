<template>
    <!-- 搜索头部 -->
    <div>
        <cHeader :searchlist="sreachList">
            <slot slot="left">
                <div @click="routerBack">

                </div>
            </slot>
            <slot slot="centre">
                <input type="text" placeholder="请输入您要搜索的内容..." v-model="sreachValue" ref="InputSearch"
                    @input="search(sreachValue)" @keyup.enter="search(sreachValue)" />
            </slot>
            <slot slot="right">
                <div @click="search(sreachValue)"></div>
            </slot>
        </cHeader>

    </div>
</template>

<script>
import cHeader from '@/component/Home/cHeader.vue';
import { song_cloudsearch } from '@/api/home';
export default {
    name: 'v-Search',
    components: {
        cHeader
    },
    props: {},
    data() {
        return {
            sreachValue: '',
            sreachList: []
        };
    },
    watch: {},
    computed: {},
    methods: {
        routerBack() {
            this.$router.back()
        },

        search(value) {
            song_cloudsearch(value).then(res => {
                if (value) {
                    console.log(res.result.songs);
                    this.sreachList = res.result.songs
                } else { this.sreachList = [] }
            })
        },
    },
    created() { },
    mounted() {
        if (this.$route.name === 'search') {

            this.$refs.InputSearch.focus()
        } else {
            return
        }
    }
};
</script>
<style lang="less" scoped>
input {
    width: 100%;
    outline: none;
    border: none;
    border-radius: 45px;
    text-align: center;
    height: 40px;

}
</style>