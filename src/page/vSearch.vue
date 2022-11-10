<template>

    <form @submit.prevent="submitFn">
        <div class="search-wrapper">
            <div class="input-holder">
                <input type="text" class="search-input" ref="searchInput" placeholder="Type to search" />
                <button class="search-icon" @click="searchToggle($event);" type="submit"><span></span></button>
            </div>
            <span class="close" @click="searchToggle($event);"></span>
            <div class="result-container">
            </div>
        </div>
    </form>
    <!-- <cHeader :searchlist="sreachList">
            <slot slot="left">
                <div @click="routerBack">
                    <svg t="1664774507872" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="5669" width="38" height="38">
                        <path
                            d="M929.70745 487.72513 167.942967 487.72513l358.793666-318.918493c12.390191-11.012821 13.505595-29.982872 2.493797-42.37204-11.010775-12.388145-29.979802-13.506619-42.369993-2.492774L74.839499 490.168786c-6.407943 5.695722-10.073426 13.859659-10.073426 22.432918 0 8.573259 3.665483 16.737196 10.073426 22.432918l412.019914 366.227985c5.717212 5.082762 12.83533 7.581676 19.926842 7.581676 8.275477-0.002047 16.515139-3.403516 22.443152-10.07445 11.012821-12.389168 9.897418-31.359218-2.493797-42.37204L179.893136 548.100196l749.814314 0c16.575514 0 30.013571-13.612019 30.013571-30.187533S946.283987 487.72513 929.70745 487.72513z"
                            p-id="5670" fill="#dbdbdb"></path>
                    </svg>
                </div>
            </slot>
            <slot slot="centre">
                <input type="text" placeholder="请输入您要搜索的内容..." v-model="sreachValue" ref="InputSearch"
                    @input="search(sreachValue)" @enter="search(sreachValue)" />
            </slot>
            <slot slot="right">
                <div @click="search(sreachValue)"><svg t="1664790854782" class="icon" viewBox="0 0 1024 1024"
                        version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2557" width="38" height="38">
                        <path
                            d="M912.072815 946.738335c-4.78498 0-9.56996-1.824555-13.220093-5.475711L650.662083 693.076078c-0.285502-0.285502-0.561795-0.579191-0.827855-0.883113l-6.979972-7.948019c-6.671956-7.594979-6.096858-19.11843 1.297552-26.012444 32.130791-29.958312 57.424874-65.413825 75.181283-105.379049 18.374486-41.35692 27.691689-85.472674 27.691689-131.122363 0-86.355787-33.628912-167.542854-94.691639-228.604558-61.062727-61.062727-142.249795-94.691639-228.604558-94.691639s-167.541831 33.628912-228.604558 94.691639c-61.062727 61.062727-94.691639 142.249795-94.691639 228.604558s33.628912 167.542854 94.691639 228.604558c61.062727 61.062727 142.249795 94.691639 228.604558 94.691639 26.15059 0 52.16508-3.130294 77.326133-9.301853 5.090948-1.353834 73.4038-19.189038 120.842229-14.809287 10.282181 0.948605 17.847483 10.05296 16.899902 20.335141s-10.047844 17.853623-20.335141 16.899902c-41.659819-3.845585-107.272165 13.571087-107.930151 13.747095-0.125867 0.033769-0.251733 0.065492-0.3776 0.097214-28.132734 6.91755-57.20998 10.425444-86.425372 10.425444-48.684816 0-95.922676-9.538237-140.402727-28.352745-42.953278-18.166755-81.523735-44.172035-114.644063-77.290317-33.119305-33.119305-59.123562-71.691809-77.29134-114.644063-18.813484-44.479027-28.352745-91.716888-28.352745-140.401704s9.53926-95.922676 28.352745-140.402727c18.167778-42.953278 44.172035-81.524758 77.29134-114.644063 33.119305-33.119305 71.690786-59.123562 114.644063-77.29134 44.480051-18.813484 91.717911-28.352745 140.402727-28.352745s95.922676 9.53926 140.401704 28.352745c42.953278 18.167778 81.524758 44.173059 114.644063 77.29134 33.118282 33.119305 59.123562 71.690786 77.29134 114.644063 18.813484 44.480051 28.351722 91.717911 28.351722 140.402727 0 50.912553-10.399861 100.136651-30.91101 146.305157-17.285688 38.906102-40.96704 73.973782-70.526263 104.47547l242.313791 242.310721c7.302313 7.30129 7.302313 19.138896 0.001023 26.440186C921.642774 944.912757 916.857794 946.738335 912.072815 946.738335z"
                            p-id="2558" fill="#dbdbdb"></path>
                        <path
                            d="M165.576059 421.887656c-0.696872 0-1.400906-0.038886-2.110057-0.118704-10.260691-1.152243-17.645892-10.404977-16.493649-20.666692 4.838192-43.080168 17.974373-83.934644 39.046295-121.429607 5.058203-9.002025 16.457834-12.19781 25.458835-7.139607 9.002025 5.058203 12.19781 16.45681 7.139607 25.458835-18.605753 33.108049-30.207999 69.202105-34.484396 107.282399C183.060269 414.827867 174.967964 421.887656 165.576059 421.887656z"
                            p-id="2559" fill="#dbdbdb"></path>
                    </svg></div>
            </slot>
        </cHeader> -->


</template>

<script>
// import cHeader from '@/component/Home/cHeader.vue';
import { song_cloudsearch } from '@/api/home';
import $ from '../../node_modules/jquery/dist/jquery.min.js';
export default {
    name: 'v-Search',
    components: {
        // cHeader
    },
    props: {},
    data() {
        return {
            sreachValue: '',
            sreachList: []
        };
    },
    watch: {},
    computed: {},
    methods: {
        searchToggle(evt) {
            const container = $(evt.target).closest('.search-wrapper');
            if (!container.hasClass('active')) {
                container.addClass('active');
            }
            else if (container.hasClass('active') && $(evt.target).closest('.input-holder').length == 0) {
                console.log($(evt.target).closest('.input-holder').length == 0);
                container.removeClass('active');
                // clear input
                container.find('.search-input').val('');
                // clear and hide result container when we press close
                container.find('.result-container').fadeOut(100, function () { $(this).empty(); });
            }
        },

        submitFn(evt) {
            console.log('ss');
            const value = $(evt.target).find('.search-input').val().trim();

            let _html = "Yup yup! Your search text sounds like this: ";
            if (!value.length) {
                _html = "Yup yup! Add some text friend :D";
            }
            else {
                _html += "<b>" + value + "</b>";
            }

            $(evt.target).find('.result-container').html('<span>' + _html + '</span>');
            $(evt.target).find('.result-container').fadeIn(100);


        },
        routerBack() {
            this.$router.back()
        },
        search(value) {
            song_cloudsearch(value).then(res => {
                if (value) {
                    console.log(res.result.songs);
                    this.sreachList = res.result.songs
                } else { this.sreachList = [] }
            })
        },
    },
    created() { },
    mounted() {
        // if (this.$route.name === 'search') {

        //     this.$refs.searchInput.focus()
        // } else {
        //     return
        // }
    }
};
</script>
<style lang="less" scoped>
@media screen and (max-width: 560px) {
    .search-wrapper.active .input-holder {
        width: 200px;
    }
}

//搜索容器位置
.search-wrapper {
    position: absolute;

    .result-container {
        width: 100%;
        position: absolute;
        top: 80px;
        left: 0px;
        text-align: center;
        font-family: "Open Sans", Arial, Verdana;
        font-size: 14px;
        display: none;
        color: #B7B7B7;
    }

    .close {
        position: absolute;
        z-index: 1;
        top: 24px;
        right: 20px;
        width: 25px;
        height: 25px;
        cursor: pointer;
        -webkit-transform: rotate(-180deg);
        -moz-transform: rotate(-180deg);
        transform: rotate(-180deg);
        -webkit-transition: all .3s cubic-bezier(0.285, -0.450, 0.935, 0.110);
        -moz-transition: all .3s cubic-bezier(0.285, -0.450, 0.935, 0.110);
        transition: all .3s cubic-bezier(0.285, -0.450, 0.935, 0.110);
        -webkit-transition-delay: 0.2s;
        -moz-transition-delay: 0.2s;
        transition-delay: 0.2s;
    }

    //input以及按钮位置
    .input-holder {
        overflow: hidden;
        height: 70px;
        background: rgba(255, 255, 255, 0);
        border-radius: 6px;
        position: relative;
        width: 70px;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;

        .search-input {
            width: 100%;
            height: 50px;
            padding: 0px 70px 0 20px;
            opacity: 0;
            position: absolute;
            top: 0px;
            left: 0px;
            background: transparent;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            border: none;
            outline: none;
            font-family: "Open Sans", Arial, Verdana;
            font-size: 16px;
            font-weight: 400;
            line-height: 20px;
            color: #FFF;
            -webkit-transform: translate(0, 60px);
            -moz-transform: translate(0, 60px);
            transform: translate(0, 60px);
            -webkit-transition: all .3s cubic-bezier(0.000, 0.105, 0.035, 1.570);
            -moz-transition: all .3s cubic-bezier(0.000, 0.105, 0.035, 1.570);
            transition: all .3s cubic-bezier(0.000, 0.105, 0.035, 1.570);
            -webkit-transition-delay: 0.3s;
            -moz-transition-delay: 0.3s;
            transition-delay: 0.3s;
        }

        .search-icon {
            width: 70px;
            height: 70px;
            border: none;
            border-radius: 6px;
            background: #FFF;
            padding: 0px;
            outline: none;
            position: relative;
            z-index: 2;
            float: right;
            cursor: pointer;
            -webkit-transition: all 0.3s ease-in-out;
            -moz-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;

            span {
                width: 22px;
                height: 22px;
                display: inline-block;
                vertical-align: middle;
                position: relative;
                -webkit-transform: rotate(45deg);
                -moz-transform: rotate(45deg);
                transform: rotate(45deg);
                -webkit-transition: all .4s cubic-bezier(0.650, -0.600, 0.240, 1.650);
                -moz-transition: all .4s cubic-bezier(0.650, -0.600, 0.240, 1.650);
                transition: all .4s cubic-bezier(0.650, -0.600, 0.240, 1.650);

            }
        }



    }


}

//搜索容器选中
.search-wrapper.active .input-holder {
    border-radius: 50px;
    width: 450px;
    background: rgba(0, 0, 0, 0.5);
    -webkit-transition: all .5s cubic-bezier(0.000, 0.105, 0.035, 1.570);
    -moz-transition: all .5s cubic-bezier(0.000, 0.105, 0.035, 1.570);
    transition: all .5s cubic-bezier(0.000, 0.105, 0.035, 1.570);
}

.search-wrapper.active .input-holder .search-input {
    opacity: 1;
    -webkit-transform: translate(0, 10px);
    -moz-transform: translate(0, 10px);
    transform: translate(0, 10px);
}

.search-wrapper.active .input-holder .search-icon {
    width: 50px;
    height: 50px;
    margin: 10px;
    border-radius: 30px;
}

.search-wrapper.active .input-holder .search-icon span {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

.search-wrapper .input-holder .search-icon span::before,
.search-wrapper .input-holder .search-icon span::after {
    position: absolute;
    content: '';
}

.search-wrapper .input-holder .search-icon span::before {
    width: 4px;
    height: 11px;
    left: 9px;
    top: 18px;
    border-radius: 2px;
    background: #974BE0;
}

.search-wrapper .input-holder .search-icon span::after {
    width: 14px;
    height: 14px;
    left: 0px;
    top: 0px;
    border-radius: 16px;
    border: 4px solid #974BE0;
}

.search-wrapper.active .close {
    right: -50px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: all .6s cubic-bezier(0.000, 0.105, 0.035, 1.570);
    -moz-transition: all .6s cubic-bezier(0.000, 0.105, 0.035, 1.570);
    transition: all .6s cubic-bezier(0.000, 0.105, 0.035, 1.570);
    -webkit-transition-delay: 0.5s;
    -moz-transition-delay: 0.5s;
    transition-delay: 0.5s;
}

.search-wrapper .close::before,
.search-wrapper .close::after {
    position: absolute;
    content: '';
    background: #FFF;
    border-radius: 2px;
}

.search-wrapper .close::before {
    width: 5px;
    height: 25px;
    left: 10px;
    top: 0px;
}

.search-wrapper .close::after {
    width: 25px;
    height: 5px;
    left: 0px;
    top: 10px;
}
</style>