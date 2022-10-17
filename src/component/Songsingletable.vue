<template>
    <!-- 全局歌单 -->
    <div class="view-the-background">
        <div class="songListContainer">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'song-list',
    props: {
        searchlist: {
            type: Array,
            default: () => []
        },
    }
};</script>
<style lang="less">
* {
    padding: 0;
    margin: 0;
}

.view-the-background {
    width: 100vw;
    height: 100vh;
    background-color: rgba(102, 102, 102, 0.3);
    position: fixed;

}

.songListContainer {

    position: relative;
    top: 50%;
    display: flex;
    overflow: scroll;
    flex-direction: row;
}

.songListContainer>div {
    min-width: 100vw;
    margin: 5px;
    height: 50vh;
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
}
</style>