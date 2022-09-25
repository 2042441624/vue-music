<template>
    <div class="progressBox">
        <span class="currentTime">00:00</span>
        <div class="progress">
            <div class="slide" ref="slide"></div>
            <div class="fill" ref="fill"></div>
        </div>
        <span class="duraTime">00:00</span>
    </div>

</template>

<script>
export default {
    name: 'progress-Bar',
    props: {
        slide: Number,
        fill: Number
    },

    watch: {
        slide(newValue) {

            if (newValue) {

                this.$refs.slide.style.left = (newValue + '%')
            }

        },
        fill(newValue) {
            if (newValue) {
                this.$refs.fill.style.width = (newValue + '%')
            }
        },

    },



}
</script>

<style lang="less" scoped>
.progressBox {
    position: relative;
    display: flex;
    flex-direction: row;
    height: 10px;
    justify-content: center;
    align-items: center;
}

span {
    font-size: 00.5rem;
    margin: 0 5px;
}

slot {
    width: 5%;
}

/* 进度条盒子 */
.progress {
    position: relative;
    width: 100%;
    height: 0.16rem;
    background-color: rgb(237, 235, 235);
}



/* 进度条操作点 */
.slide {
    position: absolute;
    top: -0.1rem;
    width: 0.3rem;
    height: 0.6rem;
    border-radius: 50%;
    z-index: 9;
}

/* 进度条盒子 */
.fill {
    position: absolute;
    top: 0;
    height: 0.16rem;
    background-color: rgb(0, 0, 0);

}
</style>