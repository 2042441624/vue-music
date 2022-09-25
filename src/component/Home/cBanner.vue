<template>
    <swiper :options="swiperOption" :not-next-tick="notNextTick"  class="swiper">
        <swiper-slide v-for=" (item) in imgList" :key="item.bannerId">
            <a :href="item.url"><img :src='item.pic'></a>
        </swiper-slide>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
</template>
<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'c-Banner',
    props: {
        imgList: {
            type: Array,
            required: true,
            default:() => ([])
        }   
    },
    data() {
        return {
            notNextTick: true,
            swiperOption: {
                // 自动循环时间
                autoplay: 3000,
                //用户操作后是否停止循环
                autoplayDisableOnInteraction: false,
                autoplayStopOnLast: false,
                // loop: true,
                //配件定位
                // direction: 'vertical',
                grabCursor: true,
                setWrapperSize: true,
                autoHeight: true,
                // pagination: '.swiper-pagination',
                // paginationClickable: true,
                prevButton: '.swiper-button-prev',
                nextButton: '.swiper-button-next',
                scrollbar: '.swiper-scrollbar',
                mousewheelControl: true,
                observeParents: true,
                // if you need use plugins in the swiper, you can config in here like this
                // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                debugger: true,
                // swiper3的回调 ， 动画结束后
                onTransitionEnd(swiper) {
                    this.bannerIndex = swiper.activeIndex
                }
            }
        }
    },
    components: {
        swiper,
        swiperSlide
    }
}

</script>

<style lang="less"  scoped>
.swiper {
    width: 98%;
    height: 10rem;
    border-radius: 20px;
    .swiper-slide {
        img {
            width: 100%;
            height: 10rem;
        }

    }
}
</style>