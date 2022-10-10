<template>
    <div id="Generator"></div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    name: "c-Generator",
    methods: {


    },
    computed: {
        ...mapGetters(['countAdd'])
    },
    mounted() {
        let div = document.getElementById('Generator')
        function* loop(list, max = Infinity) {
            for (let i = 0; i < max; i++) {
                //循环索引
                yield list[i % list.length];
            }
        }
        function toggle(...actions) {
            //生成器不能new
            let gen = loop(actions);
            return function (...args) {
                return gen.next().value.apply(this, args);
            }
        }
        //事件
        div.onclick = toggle(
            $event => {
                console.log(this);
                $event.target.innerText = '随机'
            },
            $event => $event.target.innerText = '循环',
            $event => $event.target.innerText = '顺序'
        )
    }



}
</script>

<style>
#Generator {
    width: 50px;
    height: 45px;
    line-height: 45px;
}

.Random {
    background-color: red;
}

.Single {
    background-color: yellow;
}

.order {
    background-color: green;
}
</style>