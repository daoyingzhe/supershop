<template>
  <div>
    <tabbar>
      <tabbaritem path="/home" color="blue">
        <img slot="item-icon" src="../../../assets/img/tabbar/1.gif" alt="" />
        <img slot="item-icon-active" src="../../../assets/img/tabbar/5.gif" alt="" />
        <div slot="item-text">我的</div>
      </tabbaritem>
      <tabbaritem path="/categroy" color="blue">
        <img slot="item-icon" src="../../../assets/img/tabbar/2.gif" alt="" />
        <img slot="item-icon-active" src="../../../assets/img/tabbar/6.gif" alt="" />
        <div slot="item-text">分类</div>
      </tabbaritem>
      <tabbaritem path="/cart" color="blue">
        <img slot="item-icon" src="../../../assets/img/tabbar/3.gif" alt="" />
        <img slot="item-icon-active" src="../../../assets/img/tabbar/7.gif" alt="" />
        <div slot="item-text">购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile" color="blue">
        <img slot="item-icon" src="../../../assets/img/tabbar/4.gif" alt="" />
        <img slot="item-icon-active" src="../../../assets/img/tabbar/8.gif" alt="" />
        <div slot="item-text">我的</div>
      </tabbaritem>
    </tabbar>
  </div>

  <template />
  <script>
    import tabbaritem from '../../common/tabbar/tabbaritem.vue'
    import tabbar from '../../common/tabbar/tabbar.vue'
    export default {
      name: 'maintabbar',
      components: {
        tabbar,
        tabbaritem
      }
    }
  </script>

  <style>
  </style>
