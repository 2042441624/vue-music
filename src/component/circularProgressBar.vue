<template>
    <!-- 播放按钮圆形滚动 -->
    <div class="circularProgressBar">
        <div class="ring-bg">
            <slot name="playback"></slot>
        </div>
        <div class="rec-left">
            <div class="half-round" ref="circularleft"></div>
        </div>
        <div class="rec-right">
            <div class="half-round" ref="circularright"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'circularProgressBar',
    components: {},
    props: {
        circular: Number,
    },
    data() {
        return {

        }
    },
    watch: {
        circular(newPercentage) {

            if (newPercentage <= 180) {
                this.$refs.circularleft.style.transform = `rotate(45deg)`;
                this.$refs.circularright.style.transform = `rotate(${newPercentage + 45}deg)`;


            } else {
                this.$refs.circularright.style.transform = `rotate(225deg)`;
                this.$refs.circularleft.style.transform = `rotate(${newPercentage - 180 + 45}deg)`;
            }
        }
    },
    computed: {

    },
    methods: {},
    created() {

    },
};
</script>
<style lang="less" scoped>
span {
    font-size: 0.25rem;

}

.circularProgressBar {
    position: relative;
    width: 30px;
    height: 30px;

    .ring-bg {

        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: transparent;
        border-radius: 50%;
        box-sizing: border-box;
        /*很重要*/
    }

    .rec-left,
    .rec-right {
        position: absolute;
        width: 50%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
}



.circularProgressBar .rec-left {
    left: 0;
}

.circularProgressBar .rec-right {
    right: 0;
}

.half-round {
    position: absolute;
    width: 30px;
    height: 30px;
    border: 2px solid transparent;
    border-radius: 50%;
    box-sizing: border-box;
    /*很重要*/
}

.circularProgressBar>.rec-left>.half-round {
    left: 1px;
    border-top: 2px solid rgb(245, 82, 82);
    ;
    border-right: 2px solid rgb(245, 82, 82);
    transform: rotate(45deg);
}

.circularProgressBar>.rec-right>.half-round {
    right: 1px;
    border-bottom: 2px solid rgb(245, 82, 82);
    border-left: 2px solid rgb(245, 82, 82);
    transform: rotate(45deg);
}
</style>