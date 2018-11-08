<template>
  <div id="follow"
       class="swiper-no-swiping">
    <div v-if="show"
         class="attention "
         :class=" show ? 'animated pulse' : null">
      <img src="../../static/QR_code.jpg"
           alt="">
      <!--  -->
      <p v-for="(item, index) in data"
         :key="index">{{ item }}</p>
      <!-- 关闭按钮 -->
      <i class=" close iconfont icon-error"
         @click="closeAttention"></i>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "follow",
  props: {
    show: {
      type: Boolean,
      default () {
        return true
      }
    },
    data: {
      type: Array,
      default () {
        return [
          '谢谢你的关注',
          '获取更多活动信息'
        ]
      }
    }
  },
  data () {
    return {

    }
  },
  methods: {
    // 关闭引导关注
    closeAttention () {
      this.$emit('close', false)
    },
  }
}
</script>
<style lang="scss" scoped>
#follow {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 996;
}
.attention {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  // background: rgba($color: $themeColor, $alpha: 0.1);
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: myfont;
  transition: transform 0.1s ease-out;
  img {
    width: 35%;
    margin-bottom: 45px;
  }
  p {
    font-size: 0.8rem;
    font-weight: 300;
    margin: 10px 0;
    color: darken($themeColor, 10);
  }
  .close {
    margin-top: 120px;
    font-size: 1.6rem;
    color: rgba(200, 200, 200, 0.7);
  }
}
</style>
