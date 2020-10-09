<template>
  <el-carousel :interval="4000" arrow="naver">
    <el-carousel-item v-for="(item,index) in banner.list" :key="index">
      <a :href="item.link"><img :src="item.image" alt=""></a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'Swiper',
  props: ['banner']
}
</script>

<style>
  /* .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #c5d1df;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #c5d1df;
  } */
  a img {
    width: 100%;
    height: 100%;
  }
</style>
