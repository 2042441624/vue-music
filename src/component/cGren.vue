<template>
    <div id="Generator" @click="switchingMode($event)"></div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    name: "c-Generator",
    methods: {
        switchingMode(e) {
            console.log(e.toElement.innerText);
            this.$store.dispatch('switchingMode', e.toElement.innerText)
        }

    },
    computed: {
        ...mapGetters(['countAdd'])
    },
    mounted() {
        let div = document.getElementById('Generator')
        div.innerText = this.$store.state.songs.songMode
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
            $event => $event.target.innerText = '顺序',
            $event => $event.target.innerText = '循环',
            $event => $event.target.innerText = '随机'
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