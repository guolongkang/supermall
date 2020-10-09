<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommend.list" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  data () {
    return {
    };
  },
  props:["recommend"]
}
</script>

<style lang='css' scoped>
.recommend {
  display: flex;
  font-size: 14px;
  justify-content: space-around;
  padding:10px 0px 20px;
  border-bottom: 10px solid #eee;
}
.recommend-item a {
  text-align: center;
  display: inline-block;
  padding: 5px;
}
.recommend-item a p {
  padding-top: 5px;
}
</style>