<template>

    <div>
        <cHeader :searchlist="sreachList">
            <slot slot="left">

                <svg t="1664774507872" class="icon" viewBox="0 0 1024 1024" @click="routerBack" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="5669" width="24" height="24">
                    <path
                        d="M929.70745 487.72513 167.942967 487.72513l358.793666-318.918493c12.390191-11.012821 13.505595-29.982872 2.493797-42.37204-11.010775-12.388145-29.979802-13.506619-42.369993-2.492774L74.839499 490.168786c-6.407943 5.695722-10.073426 13.859659-10.073426 22.432918 0 8.573259 3.665483 16.737196 10.073426 22.432918l412.019914 366.227985c5.717212 5.082762 12.83533 7.581676 19.926842 7.581676 8.275477-0.002047 16.515139-3.403516 22.443152-10.07445 11.012821-12.389168 9.897418-31.359218-2.493797-42.37204L179.893136 548.100196l749.814314 0c16.575514 0 30.013571-13.612019 30.013571-30.187533S946.283987 487.72513 929.70745 487.72513z"
                        p-id="5670" fill="#cdcdcd"></path>
                </svg>

            </slot>
            <slot slot="centre">
                <div class="search bar7">
                    <input type="text" placeholder="请输入您要搜索的内容..." v-model="sreachValue" ref="InputSearch"
                        @input="search(sreachValue)" @keyup.enter="search(sreachValue)">
                </div>
            </slot>
            <slot slot="right">
                <div @click="search(sreachValue)">搜索</div>
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
div.search {

    box-sizing: border-box;
    width: 300px;
}

form {
    position: relative;
    width: 200px;
    top: 0;

    left: 100px;

}

input,
button {
    border: none;
    outline: none;

}

input {
    height: 38px;
}

button {
    height: 38px;
    width: 38px;
    cursor: pointer;
    position: absolute;
}
</style>