<template>

    <div>
        <cHeader>
            <slot slot="centre">
                <div class="search bar7">

                    <input type="text" placeholder="请输入您要搜索的内容..." v-model="sreachValue">


                </div>
            </slot>
            <slot slot="right">
                <div @click="search(sreachValue)">搜索</div>
            </slot>
        </cHeader>
        <div> {{this.sreachList}}</div>

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
            sreachList: null
        };
    },
    watch: {},
    computed: {},
    methods: {
        resSongs() {
            console.log(this.sreachValue);
        },
        search(value) {
            console.log(value);
            song_cloudsearch(value).then(res => {
                this.sreachList = res
                console.log(this.sreachList);
            })
        }


    },
    created() { },
    mounted() {

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



/*搜索框7*/

.bar7 form {
    height: 40px;
}

.bar7 input {
    width: 200px;
    border-radius: 42px;
    border: 1px solid #324B4E;
    background: #F9F0DA;
    transition: .3s linear;
    float: right;
    margin: 0 auto;
}

.bar7 input:focus {
    width: 300px;
}

.bar7 button {
    background: none;
    top: -2px;
    right: 0;
}

.bar7 button:before {
    content: "\f002";
    font-family: FontAwesome;
    color: #324b4e;
}
</style>