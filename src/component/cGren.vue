<template>
    <div id="Generator">模式</div>
</template>

<script>

export default {
    name: "c-Generator",
    methods: {

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
            //回调函数

            return function (...args) {
                return gen.next().value.apply(this, args);
            }
        }
        //事件
        div.onclick = () => {
            console.log(this);
            toggle(
                $event => $event.target.className = 'Random',
                $event => $event.target.className = 'Single',
                $event => $event.target.className = 'order'
            )
        }
    }
}
</script>

<style>
#Generator {
    width: 50;

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