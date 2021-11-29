<template>
  <div id="container">
     <div class="mb-5">
      <Header></Header>
    </div>
    <div class="container context">
      <router-view :key="this.$route.fullPath"></router-view>
    </div>
    <div>
      <!-- <Footer></Footer> -->
    </div>
  </div>
</template>

<script>
import Header from '@/components/Layout/Header'
// import Footer from '@/components/Layout/Footer'
export default {
  name: 'App',
  components: { Header },
  created () {
    console.log(this.$route.name)
    console.log(this.$route)
  }
}
</script>
<style lang="less">
#container {
  // font-family: "Source Han Sans CN","Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
  //   "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
  // width: 100%;
  // font-weight: 400;
  // background: #f4f4f4;
  // overflow: hidden;
  // padding: 0px;
  // margin: 0px;
  // padding: 10px;
  // height: 1000px;
}
</style>
