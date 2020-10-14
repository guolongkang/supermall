<template>
    <div class="goods">
      <goods-list-item class="goods-list" v-for="(item,index) in goods" :key="index" :goodsItem="item"></goods-list-item>
    </div>
</template>

<script>
  import GoodsListItem from '../goods/GoodsListItem'

  // import BScroll from '@better-scroll/core'

  export default {
    name:'GoodsList',
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data () {
      return {
        // scroll: null
      }
    },
    methods() {
      // let scroll = new BScroll('.goods', {
      //   movable: true,
      //   zoom: true
      // })
    }
    
  }
</script>

<style lang='css' scoped>
    .goods {
      display: flex;
      /* height: ; */
      padding: 2px;
    }
    .goods-list {
      width: 50%;
    }
</style>