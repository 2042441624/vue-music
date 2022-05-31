<template>
    <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper" class="swiper">
        <!-- slides -->
        <swiper-slide v-for=" (item) in bannerImgList" :key="item.bannerId">
            <a :href="item.url"> <img :src='item.pic'></a>
        </swiper-slide>
        <!--  -->
        <!-- Optional controls -->
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>

</template>


<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { banner } from '@/api/home';
export default {
    name: 'c-Banner',
    data() {
        return {
            bannerImgList: [],
            bannerIndex: 0,
            // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
            // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
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
                // more Swiper configs and callbacks...
                // ...
            }
        }
    },
    methods: {
        Fbanner() {
            banner().then(res => {
                if (res.data.code === 200) {
                    this.bannerImgList = res.data.banners

                }
            })
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    mounted() {
        this.Fbanner()
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