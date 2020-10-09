<template>
<div id="home">
  <nav-bar><div slot="center">广场</div></nav-bar>

  <swiper :banner="banner"></swiper>

  <recommend-view :recommend="recommend"></recommend-view>

  <feature-view></feature-view>

  <tab-control class="tab-control" :title="['流行','新款','精选']"></tab-control>


  <ul>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
  </ul>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Swiper from 'components/common/swiper/swiper'
import TabControl from 'components/content/tabControl/TabControl'

import RecommendView from './childcomps/RecommendView'
import FeatureView from './childcomps/FeatureView'

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
    Swiper,
    RecommendView,
    FeatureView,
    TabControl
  },
  created() {
    // 请求多个数据
    getHomeMultidata().then(res => {
      console.log(res);
      this.banner = res.data.banner,
      this.dKeyword = res.data.dKeyword,
      this.keywords = res.data.keywords,
      this.recommend = res.data.recommend
    })
  }
}
</script>

<style >
#home {
  margin-top: 44px 0px;
}
.tab-control {
  position:sticky;
  top: 44px;
}
</style>
