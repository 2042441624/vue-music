<template>
    <div class="c-Header">


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
</template>

<script>
export default {
    name: 'c-Header',
};
</script>

<style lang="less" scoped>
.c-Header {
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
}
</style>