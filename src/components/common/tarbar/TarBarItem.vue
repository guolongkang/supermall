<template>
  <div class="tab-bar-item" @click="itemClicke">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div> 
  </div>
</template>
<script>
  export default{
    name:'TarBarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'black'
      }
    },
    data () {
      return {
        // isActive:true
      }
    },
    computed: {
      isActive () {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClicke() {
        this.$router.push(this.path)
      }
    }
  }
</script>


<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    /* padding: 5px; */
    font-size: 14px;
    margin: 4px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top:3px;
    vertical-align: middle;
    padding-bottom: 2px;
  }
  .active {
    color: red;
  }
</style>