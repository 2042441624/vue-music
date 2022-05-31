<template>
    <div class="c-Header">
        <div @click="isplaylist()">
            返回
        </div>
        <div>歌单</div>
        <div><svg t="1653988496119" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="7589" width="32" height="32">
                <path
                    d="M799.5 432c0-49.5-9.7-97.6-28.9-142.9-18.5-43.7-44.9-83-78.6-116.6s-72.9-60.2-116.6-78.6C530.1 74.7 482.1 65 432.5 65s-97.6 9.7-142.9 28.9c-43.7 18.5-83 44.9-116.6 78.6-33.7 33.7-60.2 72.9-78.6 116.6-19.2 45.3-28.9 93.3-28.9 142.9s9.7 97.6 28.9 142.9c18.5 43.7 44.9 83 78.6 116.6s72.9 60.2 116.6 78.6C334.9 789.3 383 799 432.5 799s97.6-9.7 142.9-28.9c43.7-18.5 83-44.9 116.6-78.6s60.2-72.9 78.6-116.6c19.2-45.3 28.9-93.4 28.9-142.9z m-367 303c-167.1 0-303-135.9-303-303s135.9-303 303-303 303 135.9 303 303-135.9 303-303 303zM949.1 904.4l-173.9-174c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l173.9 173.9c12.5 12.5 32.8 12.5 45.3 0 12.5-12.4 12.5-32.7 0-45.2z"
                    p-id="7590" fill="#ffffff"></path>
            </svg></div>
    </div>
</template>

<script>
export default {
    name: 'c-Header',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {
        isplaylist() {
            this.$store.state.songs.playList = {}
        }
    },
};
</script>

<style lang="less" scoped>
.c-Header {
    width: 100%;
    height: 2.5rem;
    padding: 4px 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;


    div {
        width: 70px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        svg {
            margin: 0px 0.5rem;
        }
    }
}
</style>