<template>
  <div id="home">
    <nav-bar><div slot="center">广场</div></nav-bar>

    <swiper :banner="banner"></swiper>

    <recommend-view :recommend="recommend"></recommend-view>

    <feature-view></feature-view>

    <tab-control class="tab-control" :title="['流行','新款','精选']" @tabClick="tabClick"></tab-control>

    <goods-list :goods="goods[currentType].list"></goods-list>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Swiper from 'components/common/swiper/swiper'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'


import RecommendView from './childcomps/RecommendView'
import FeatureView from './childcomps/FeatureView'

import {getHomeMultidata,getHomeGoods} from 'network/home'

export default {
  name: 'Home',
  data () {
    return {
      banner: [],
      recommend: [],
      goods: {
        'pop':{page: 0,list:[]},
        'new':{page: 0,list:[]},
        'sell':{page: 0,list:[]}
      },
      currentType: 'pop'
    }
  },
  components: {
    NavBar,
    Swiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList
  },
  created() {
    // 请求主页幻灯片的数据
    getHomeMultidata()

    // 请求主页中流行/新款/潮流商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    // 事件监听
    tabClick(index) {
      switch(index) {
        case '流行': this.currentType = 'pop'
        break
        case '新款': this.currentType = 'new'
        break
        case '精选': this.currentType = 'sell'
        break
      }
    },

    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then(res => {
      // console.log(res.data);
      this.banner = res.data.banner,
      this.recommend = res.data.recommend
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        console.log(res)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }
  }
}
</script>

<style >
#home {
  margin: 44px 0px;
}
.tab-control {
  position:sticky;
  top: 44px;
}
</style>
