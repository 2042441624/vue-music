<template>
    <div class="c-Header">
        <div class="search">
            <div class="left">
                <slot name="left">

                </slot>
            </div>
            <div class="centre">
                <slot name="centre">
                    <keep-alive><input type="text" placeholder="请输入您要搜索的内容..." @focus="toSearch()"></keep-alive>
                </slot>
            </div>
            <div class="right">
                <slot name="right">
                </slot>
            </div>
        </div>
        <div class="search-content">
            <ul v-if="this.searchlist.length">
                <li v-for="l in this.searchlist.slice(0, 10)" :key="l.id" @click="addSong(l.id)">
                    {{ l.name }}
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
export default {
    name: 'c-Header',
    props: {
        searchlist: {
            type: Array,
            default: () => []
        },
    },
    methods: {
        addSong(id) {
            this.$store.dispatch('addsongs', id)
        }
    }
};
</script>

<style lang="less" scoped>




.c-Header {
    width: 100%;
    height: 40px;
    position: relative;
    padding: 0 3px;
    background-color: rgb(244, 40, 40);

    .search {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .centre {
            min-width: 200px;
            max-width: 100%;
            flex: 1;
            padding: 0 3px;

        }

        .centre,
        .left,
        .right {
            text-align: center;
            height: 40px;
            line-height: 40px;

        }
    }

    .search-content {
        position: absolute;
    }

}
</style>