<template>
  <div id='index'
       class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
           v-for="item in 3"
           :key="item">
        <h1 class="ani animated"
            swiper-animate-effect="swing"
            swiper-animate-duration="0.5s"
            swiper-animate-delay="0.3s">测试动画{{ item }}</h1>
        <h2>活动id{{ msg }}</h2>
        <div class="box">
          <p>测试postcss</p>
          <p>px => rem</p>
          <p>px => vw</p>
        </div>
      </div>
    </div>
    <!-- 关注引导 -->
    <follow :show="show"
            @close="off"
            :data="['❤','么么哒']" />
  </div>
</template>

<script>
import Swiper from 'swiper' // 在app.vue引入
import follow from '@/components/follow'
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "index",
  data () {
    return {
      show: false
    };
  },

  components: {
    follow
  },

  computed: {
    ...mapState({
      msg: state => state.activityCode
    })
  },
  methods: {
    off (status) {
      this.show = status
    },
  },
  mounted () {

    // alert(upData.user_other);
    this.$loading.open({
      text: "测试中...",
      spinnerType: "triple-bounce"
      // snake   fading-circle   double-bounce    triple-bounce
    });
    setTimeout(() => {
      this.$loading.close();
      this.$toast({
        message: '测试成功',
        iconClass: 'iconfont icon-success', //'iconfont icon-error',
        duration: 1000
        // ' mintui mintui-more ' 
        // ' mintui mintui-back ' 
        // ' mintui mintui-search ' 
        // ' mintui mintui-field-error ' 
        // ' mintui mintui-field-warning ' 
        // ' mintui mintui-success ' 
        // ' mintui mintui-field-success ' 
      })
      setTimeout(() => {
        this.show = true
      }, 1000)
    }, 1000);

    new Swiper(".swiper-container", {
      direction: "vertical", // 垂直
      mousewheel: true, // 开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
      grabCursor: true, // 设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。（根据浏览器形状有所
      on: {
        init: function () {
          swiperAnimateCache(this); // 隐藏动画元素
          swiperAnimate(this); // 初始化完成开始动画
        },
        slideChangeTransitionEnd: function () {
          swiperAnimate(this); // 每个slide切换结束时也运行当前slide动画
        }
      }
    });
  },


};
</script>
<style lang='scss' scoped>
h1 {
  text-align: center;
  // color: red;
  color: $themeColor;
}
#index{
  height: 100vh;
}
.swiper-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.swiper-wrapper {
  height: 100%;
}
.swiper-slide{
  height: 100%;
}
.box {
  color: white;
  width: 300px;
  height: 200px;
  display: flex;
  // align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: black;
}
</style>
