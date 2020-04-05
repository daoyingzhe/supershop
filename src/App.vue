<template>
  <div id="app">
    <tabbar>
      <tabbaritem path="/home">
        <img slot="item-icon" src="./assets/img/tabbar/1.gif" alt="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/5.gif" alt="" />
        <div slot="item-text">我的</div>
      </tabbaritem>
      <tabbaritem path="/categroy">
        <img slot="item-icon" src="./assets/img/tabbar/2.gif" alt="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/6.gif" alt="" />
        <div slot="item-text">分类</div>
      </tabbaritem>
      <tabbaritem path="/cart">
        <img slot="item-icon" src="./assets/img/tabbar/3.gif" alt="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/7.gif" alt="" />
        <div slot="item-text">购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile">
        <img slot="item-icon" src="./assets/img/tabbar/4.gif" alt="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/8.gif" alt="" />
        <div slot="item-text">我的</div>
      </tabbaritem>
    </tabbar>
    <router-view/>
  </div>
</template>

<script>
import tabbaritem from './components/common/tabbar/tabbaritem.vue'
import tabbar from './components/common/tabbar/tabbar.vue'
export default {
  name: 'App',
  components:{
    tabbar,
    tabbaritem
  }
}
</script>

<style>
@import url("./assets/css/base.css");
</style>
