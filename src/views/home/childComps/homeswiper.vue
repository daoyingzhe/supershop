<template>
  <swiper>
    <swiperitem v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
    </swiperitem>
  </swiper>
</template>

<script>
  import {swiper,swiperitem} from '../../../components/common/swiper/index.js'
  export default {
    props: {
      banners: {
        type: Array,
        default () {
          return []
        }
      },
      components: {
        swiper,
        swiperitem
      }
    },
  }
</script>

<style>
</style>
