<template>

  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="less">
@runColor: rgba(239, 236, 236, 0);
@endColot: rgb(244, 40, 40);

.pcolor {
  color: @endColot;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  //设置视觉界面的容器
  #app {
    width: 100%;
    height: 100vh;
    font-size: 1rem;
    background-color: #F6F6F6;
    padding: 0px;
    margin: 0px;
    background: url(./assets/background/image.jpg);
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }
}
</style>
