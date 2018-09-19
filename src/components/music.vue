<template>
  <div id="music">
    <div  class="player iconfont"
          :class="play ? '' : 'pause'"
          @click="handlePlay">
          &#xe62f;
    </div>
    <audio  id="bgmusic"
            autoplay
            controls
            preload
            loop
            src="./static/music.mp3"
            style="display: none;">
    </audio>
  </div>
</template>

<script>
export default {
  name: 'Landscape',
  props: {
  },
  data () {
    return {
      play: true
    }
  },
  methods: {
    handlePlay () {
      if (this.play) {
        document.getElementById('bgmusic').pause()
      } else {
        document.getElementById('bgmusic').play()
      }
      this.play = !this.play
    },
    forceSafariPlayAudio () {
      this.audioEl.load()
      this.audioEl.play()
    }
  },
  mounted () {
    let that = this
    this.$nextTick(() => {
      this.audioEl = document.getElementById('bgmusic')
      document.addEventListener(
        'WeixinJSBridgeReady',
        that.forceSafariPlayAudio,
        false
      )

      this.audioEl.addEventListener(
        'play',
        function () {
          window.removeEventListener(
            'touchstart',
            that.forceSafariPlayAudio,
            false
          )
        },
        false
      )
      window.addEventListener('touchstart', that.forceSafariPlayAudio, false)

      this.audioEl.src = './static/music.mp3'
    })
  }
}
</script>

<style scoped lang='scss'>
#music{
  position: fixed;
  z-index:1002;
}
.player {
  position: absolute;
  top: 20px;
  left:20px;
  z-index: 998;
  font-size: 2.8em;
  text-align: center;
  animation: rotatePlay 2s infinite linear;
  color: white;
  content: normal!important;
}

.player.pause {
  animation-play-state: paused ;
  &::before{
    content: '' !important;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(70deg);
    width: 3px;
    height: 82%;
    background: white;
  }
}

@keyframes rotatePlay {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
