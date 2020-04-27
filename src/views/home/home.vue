<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
    <swiper>
      <swiperitem v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiperitem>
    </swiper>
    <!-- <homeswiper :banners="banners"></homeswiper> -->
    <recommendview :recommends="recommends"></recommendview>
    <featureview></featureview>
    <tabcon-trol :recommends="recommends"></tabcon-trol>
    <!-- <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul> -->
  </div>
</template>

<script>
  import navbar from '../../components/common/navbar/navbar.vue'
  import tabcontrol from './childComps/tabcontrol.vue'

  import {getHomeMultidata} from '../../network/home.js'

  // import homeswiper from './childComps/homeswiper.vue'
  import recommendview from './childComps/recommendview.vue'
  import featureview from './childComps/featureview.vue'
  import {swiper,swiperitem} from '../../components/common/swiper'

  export default {
    name: "home",
    components: {
      navbar,
      swiper,
      swiperitem,
      // homeswiper,
      recommendview,
      featureview,
      tabcontrol
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      //1.请求多个数据
      getHomeMultidata().then(res => {
        console.log(res);
        var $this = this
        $this.banners = res.data.banner.list;
        console.log($this.banners);
        $this.recommends = res.data.recommend.list;
        console.log($this.recommends);
      })
    }
  }
</script>

<style>
  #home{
    padding-top: 44px;
    }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
</style>
