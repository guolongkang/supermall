<template>
    <div class="tab-control">
      <div 
      v-for="(item,index) in title" 
      :key="index" 
      :class="{active: index === currentIndex}"
      @click="itemClick(index)"
      class="control-item">
        <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
  export default {
    name:'TabControl',
    props: {
      title: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index

        this.$emit('tabClick',this.title[index])
      }
    }
  }
</script>

<style lang='css' scoped>
    .tab-control {
      display: flex;
      text-align: center;
      font-size: 14px;
      background-color: #fff;
    }
    .control-item {
      flex: 1;
      height: 40px;
      line-height: 40px;
    }
    .active {
      color: var(--color-high-text);
      border-bottom: 3px solid var(--color-tint);
    }
</style>