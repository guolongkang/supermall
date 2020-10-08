<template>
<div id="home">
  <nav-bar>
    <div slot="center">广场</div>
  </nav-bar>
  <div class="swiper">
    <swiper/>
  </div>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Swiper from 'components/common/swiper/swiper'
import {getHomeMultidata} from 'network/home'

export default {
  name: 'Home',
  data () {
    return {
      banner: [],
      dKeyword: [],
      keywords: [],
      recommend: []
    }
  },
  components: {
    NavBar,
    Swiper
  },
  created() {
    // 请求多个数据
    getHomeMultidata().then(res => {
      // console.log(res);
      this.banner = res.data.banner,
      this.dKeyword = res.data.dKeyword,
      this.keywords = res.data.keywords,
      this.recommend = res.data.recommend
    })
  }
}
</script>

<style >
.swiper {
  /* position:absolute; */
  height: 150px;
}
</style>
