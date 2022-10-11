<template>
    <div id="Generator" @click="switchingMode()">{{this.$store.state.songs.songMode}}</div>
</template>

<script>


export default {
    name: "c-Generator",
    methods: {
        switchingMode() {
            this.$store.dispatch('switchingMode')

        }

    },
    computed: {

    },
    mounted() {

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