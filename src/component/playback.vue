<template>
    <div class="palyback" ref="palyback" @click="rePlay">
    </div>
</template>

<script>
export default {
    name: 'play-Back',
    components: {

    },
    props: {
        palyState: {
            type: Boolean,
            require: true,
            default: true
        }
    },
    data() {
        return {
            ToPaly: this.palyState
        };
    },
    computed: {},
    methods: {
        rePlay() {
            this.ToPaly = !this.ToPaly;
            this.$emit('resPlay', this.ToPaly)
        }
    },

    watch: {

        ToPaly(newPlay) {

            if (newPlay) {
                this.$refs.palyback.classList.remove('zanting')
                this.$refs.palyback.classList.add('bofang')
            } else {
                this.$refs.palyback.classList.remove('bofang')
                this.$refs.palyback.classList.add('zanting')
            }
        }
    },
    mounted() {
        this.$refs.palyback.classList.contains('palyback') ? '' : this.$refs.palyback.classList.add('palyback')
        if (this.ToPaly) {
            this.$refs.palyback.classList.remove('zanting')
            this.$refs.palyback.classList.add('bofang')
        } else {
            this.$refs.palyback.classList.remove('bofang')
            this.$refs.palyback.classList.add('zanting')
        }
    }
};

</script>
<style lang="less">
.palyback {
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    z-index: 99999;
}

.bofang {
    background-image: url(../assets/img/bofang.jpg);

}

.zanting {
    background-image: url(../assets/img/zanting.jpg);
}

.zanting,
.bofang {
    width: 29px;
    height:29px;
    transform: scale(1.5);
    background-size: cover;
}
</style>