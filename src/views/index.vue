<template>
<div id='index' class="swiper-container">
  <div  class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in 5" :key="item">
        <h1 class="ani animated"
                swiper-animate-effect="swing"
                swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">index page{{ item }}</h1>
        <h2>活动id{{  msg }}</h2>
        <div class="box">
          <p>测试postcss</p>
          <p>px => rem</p>
          <p>px => vw</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Swiper from 'swiper' // 在app.vue引入
/* eslint-disable*/
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "index",
  data() {
    return {};
  },

  components: {},

  computed: {
    ...mapState({
      msg: state => state.activityCode
    })
  },

  mounted() {
    // alert(upData.user_other);
    this.$loading.open({
      text: "测试中...",
      spinnerType: "triple-bounce"
      // snake   fading-circle   double-bounce    triple-bounce
    });
    setTimeout(() => {
      this.$loading.close();
      this.$toast({
        message: '测试失败',
        iconClass: 'iconfont icon-error',
        duration: 1000
      })
    }, 1000);

    /* eslint-disable*/
    new Swiper(".swiper-container", {
      direction: "vertical", // 垂直
      mousewheel: true, // 开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
      grabCursor: true, // 设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。（根据浏览器形状有所
      on: {
        init: function() {
          swiperAnimateCache(this); // 隐藏动画元素
          swiperAnimate(this); // 初始化完成开始动画
        },
        slideChangeTransitionEnd: function() {
          swiperAnimate(this); // 每个slide切换结束时也运行当前slide动画
        }
      }
    });
  },

  methods: {}
};
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
  height: 100%;
}
.box {
  color: white;
  width: 300px;
  height: 200px;
  display: flex;
  // align-items: center;
  justify-content: center;
  flex-direction:column;
  background-color: black;
}
</style>
