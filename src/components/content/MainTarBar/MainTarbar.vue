<template>
  <tar-bar>
      <tar-bar-item path="/home" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tar-bar-item>
      <tar-bar-item path="/category" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tar-bar-item>
      <tar-bar-item path="/profile" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">个人</div>
      </tar-bar-item>
      <tar-bar-item path="/cart" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tar-bar-item>
    </tar-bar>
</template>

<script>
import TarBar from "../../common/tarbar/tarbar"
import TarBarItem from "../../common/tarbar/TarBarItem"
export default {
  name: 'MainTarBar',
  components: {
    TarBar,
    TarBarItem
  }
}
</script>

<style >
</style>
