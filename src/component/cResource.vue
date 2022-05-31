<template>
    <div class="c-Resource" :boxTitle='boxTitle' :recommendList="recommendList">
        <div class="Resource-top">
            <h3>{{ this.boxTitle }}</h3>
            <div>更多</div>
        </div>

        <slot name="componentBottom">
            <div class="Resource-bottom">
                <div v-for=" (item) in recommendList" :key="item.id">
                    <div><img :src='item.picUrl'></div>
                    <p>{{ item.name.slice(0, 14) }}...</p>
                </div>
            </div>

        </slot>

    </div>
</template>

<script>
import { recommend_Resource } from '@/api/home';
export default {
    name: 'c-Resource',
    mounted() {
        recommend_Resource().then((result) => {
            this.recommendList = result.data.recommend
        })
    },
    props: {
        boxTitle: {
            type: String,
            // 与对象或数组的默认值不同，这不是一个工厂函数——这是一个用作默认值的函数
            default: '推荐歌单',

        },
        componentTop: {
            type: Object
        }

    },
    data() {
        return {
            recommendList: [],

        }
    },
    computed: {

    },
    methods: {

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

        div {
            width: auto;
            display: flex;
            flex-direction: column;
            justify-items: center;

            div {
                width: 100px;
                flex-shrink: 0;
                align-items: center;
                border-radius: 5%;
                overflow: hidden;
                margin-right: 0.5rem;

                img {
                    height: 100px;

                }
            }

            p {
                width: 100px;
                font-size: 8px;
            }
        }

    }
}
</style>