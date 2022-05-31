<template>
    <div class="v-PlayList">
        <c-Header></c-Header>
        <div class="main">
            <c-Introduce></c-Introduce>
            <c-Music></c-Music>
        </div>

    </div>
</template>

<script>
import cHeader from '@/component/PlayList/cHeader.vue';
import cIntroduce from '@/component/PlayList/cIntroduce.vue';
import cMusic from '@/component/PlayList/cMusic.vue';
export default {
    name: 'v-PlayList',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
    components: {
        cHeader,
        cIntroduce,
        cMusic
    }
};
</script>

<style lang="less" scoped>
.c-Header {
    position: fixed;
    z-index: 9999999;
    top: 0;
}
.main{
    position: relative;
    top: 40px;
}
</style>