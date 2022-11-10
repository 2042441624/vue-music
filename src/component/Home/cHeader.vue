<template>
    <div class="c-Header">
        <div class="search">
            <div class="left">
                <slot name="left">
                    <form @submit.prevent="submitFn">
                        <div :class="{ 'search-wrapper': true }">
                            <div class="input-holder">
                                <input type="text" class="search-input" ref="searchInput"
                                    placeholder="Type to search" />
                                <button class="search-icon" @click="Tosearch();" type="submit"><span></span></button>
                            </div>
                            <span class="close" @click="searchToggle();"></span>

                        </div>
                    </form>
                </slot>
            </div>
            <div class="centre">
                <slot name="centre">

                </slot>
            </div>
            <div class="right">
                <slot name="right">
                </slot>
            </div>
        </div>
        <div class="search-content">
            <ul v-if="this.searchlist.length">
                <li v-for="l in this.searchlist.slice(0, 10)" :key="l.id" @click="addSong(l.id)">
                    {{ l.name }}
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
import $ from '../../../node_modules/jquery/dist/jquery.min.js'

export default {
    name: 'c-Header',
    props: {
        searchlist: {
            type: Array,
            default: () => []
        },
        isActive: {
            type: Boolean,
            default: () => false
        }
    },
    updated() {
        this.$route.name === 'search' ? $('.search-wrapper').addClass('active') : $('.search-wrapper').removeClass('active')
    },
    methods: {
        addSong(id) {
            this.$store.dispatch('addsongs', id)
        },
        Tosearch() {

            if (this.$route.name !== 'search') {
                this.$router.push({ name: 'search' })
            }
        },
        searchToggle() {
            if (this.$route.name === 'search') {
                this.$router.back()
                $('.search-wrapper').removeClass('active')
            }

        },

        submitFn(evt) {
            console.log(evt);






        },
    }
};
</script>

<style lang="less" scoped>
.c-Header {
    width: 100%;
    height: 60px;
    padding: 0;
    margin: 0;
    position: relative;
    box-sizing: border-box;

    .centre {}





    .search {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .left {

            flex-wrap: wrap;

            @media screen and (max-width: 375px) {
                .search-wrapper.active .input-holder {
                    width: 200px;
                }
            }

            //搜索容器位置
            .search-wrapper.active {
                width: 100%;
            }

            .search-wrapper {
                position: absolute;




                .close {


                    position: absolute;
                    top: 30%;
                    left: 5%;

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
                    width: 100%;
                    height: 100%;
                    background: rgba(255, 255, 255, 0);
                    border-radius: 6px;
                    position: relative;

                    -webkit-transition: all 0.3s ease-in-out;
                    -moz-transition: all 0.3s ease-in-out;
                    transition: all 0.3s ease-in-out;


                    .search-input {

                        width: 100%;
                        height: 100%;
                        padding: 0px 60px 0 20px;
                        opacity: 0;
                        position: absolute;
                        top: -15%;
                        left: 0;
                        text-align: center;
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
                        width: 60px;
                        height: 60px;
                        border: none;
                        border-radius: 6px;
                        background: #FFF;
                        padding: 0px;
                        outline: none;
                        position: relative;
                        z-index: 1;
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
                width: 100%;
                background: rgb(255, 255, 255);
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
                margin: 5px;
                border-radius: 30px;
                background: rgba(206, 204, 204, 0.5);
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
                background: rgb(206, 204, 204);
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

        }

        .centre,
        .left,
        .right {
            text-align: center;
            height: 60px;
            line-height: 60px;

        }
    }

    .search-content {
        position: absolute;
        height: 0;
    }

}
</style>