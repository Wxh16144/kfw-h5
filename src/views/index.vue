<template>
<div id='index' class="swiper-container">
  <div  class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in 5" :key="item">
        <h1 class="ani animated"
                swiper-animate-effect="swing"
                swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">index page{{ item }}</h1>
        <h2>{{  msg }}</h2>

      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper' // 在app.vue引入
/* eslint-disable*/
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'index',
  data () {
    return {}
  },

  components: {},

  computed: {
    ...mapState({
      msg: state => state.msg
    })
  },

  mounted () {
    /* eslint-disable*/
    new Swiper('.swiper-container', {
      direction: 'vertical', // 垂直
      mousewheel: true, // 开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
      grabCursor: true, // 设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。（根据浏览器形状有所
      on: {
        init: function () {
          swiperAnimateCache(this) // 隐藏动画元素
          swiperAnimate(this) // 初始化完成开始动画
        },
        slideChangeTransitionEnd: function () {
          swiperAnimate(this) // 每个slide切换结束时也运行当前slide动画
        }
      }
    })
  },

  methods: {}
}
</script>
<style lang='scss' scoped>
h1 {
  text-align: center;
  color: red;
}
.swiper-container {
  overflow: hidden;
}
.swiper-wrapper {
  height: 100vh;
}
</style>
