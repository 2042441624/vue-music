<template>
    <div class="c-Header">
        <div class="search">
            <slot name="left">
                <div>左边</div>

            </slot>


            <slot name="centre">
                <div>中间</div>
            </slot>


            <slot name="right">
                <div>右边
                </div>
            </slot>


        </div>
        <div class="search-content">
            <ul v-if="this.searchlist.length">
                <li v-for="l in this.searchlist.slice(0,10)" :key="l.id">
                    <router-link to="">{{l.name}} </router-link>
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
    }
};
</script>

<style lang="less" scoped>
.c-Header {
    width: 100%;
    height: 40px;
    position: relative;

    .search {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        position: relative;
    }

    .search-content {
        position: absolute;
        
    }

    a {
        list-style: none;
        text-decoration: none;
        color: black
    }
}
</style>