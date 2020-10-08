<template>
  <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style >
  #tab-bar{
   display: flex;
   height: 49px;
   background-color: #f6f6f6;
   
   position: fixed;
   left: 0px;
   right: 0px;
   bottom: 0px;

   /* box-shadow: 0px -5px 1px rgba(100, 100, 100, .1); */
  }
</style>
