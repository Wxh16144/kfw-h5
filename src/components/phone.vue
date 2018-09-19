<template>
<div id="tip" v-if="screen">
  <i class="iconPhone"></i>
  <p>为了更好的体验，请使用竖屏浏览</p >
</div>
</template>

<script>
export default {
  name: 'Landscape',
  props: {},
  data () {
    return {
      screen: false
    }
  },
  methods: {
    // 判断手机横竖屏
    screenStatus () {
      const status =
        'onorientationchange' in window ? 'orientationchange' : 'resize'
      window.addEventListener(status, e => {
        if (window.orientation === 180 || window.orientation === 0) {
          this.screen = false
        }
        if (window.orientation === 90 || window.orientation === -90) {
          this.screen = true
        }
      })
    }
  },
  mounted () {
    this.screenStatus()
  }
}
</script>

<style scoped lang='scss'>
#tip {
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 1);
  .iconPhone {
    display: inline-block;
    width: 67px;
    height: 109px;
    background-image: url("../../static/phone.png");
    transform: rotate(90deg);
    animation: rotation infinite 1.5s ease-in-out;
    background-size: 67px 109px;
    margin-bottom: 2em;
  }
  @keyframes rotation {
    10% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(0);
    }
    60% {
      transform: rotate(0);
    }
    90% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(90deg);
    }
  }
  p {
    color: white;
    font-size: 1.2em;
  }
}
</style>
