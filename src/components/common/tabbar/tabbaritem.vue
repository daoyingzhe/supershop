<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
    <!-- <div :class="{active:isActive}">
      <slot name="item-text-active"></slot>
    </div> -->
    <!-- <div :style="isActive ? {color: this.color} : {}">
      <slot name="item-text"></slot>
    </div> -->
    <!-- <img src="../../assets/img/tabbar/1.gif" alt="" />
    <div>首页</div> -->
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        // isActive: true
      }
    },
    props: {
      path: String,
      color:{
        type:String,
        default:'red'
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)   !== -1
      },
      activeStyle(){
        console.log(this.isActive ? {color: this.color} : {});
        return this.isActive ? {color: this.color} : {}
      }
    },
    methods: {
      itemClick() {
        console.log(this.path);
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style>
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
  }

  .tab-bar-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
    height: 49px;
    /* line-height: 49px; */
  }

  .active {
    color: red;
  }
</style>
