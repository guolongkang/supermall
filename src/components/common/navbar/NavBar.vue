<template>
  <div class="nav-bar home-nav">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
    };
  },
}
</script>

<style lang='css' scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.left, .right{
  width: 60px;
}
.center {
  flex: 1;
}
.home-nav {
  background: var(--color-tint);
  color: #fff;
}
</style>