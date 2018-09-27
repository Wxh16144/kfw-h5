<template>
  <div id="app">
    <music></music>
    <phone></phone>
    <h3>活动状态: {{ activityStatus }} </h3>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import music from '@/components/music.vue'
import phone from '@/components/phone.vue'

// 微信api
/* eslint-disable*/
import wxConfig from '@/plugins/wxConfig.js'

/* eslint-disable*/
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: 'App',
  data () {
    return {
      title: this.$store.state.activityCode
    }
  },
  components: {
    music, phone
  },
  computed:{
    ...mapState({
     activityStatus: state => state.activityStatus
    })
  },
  mounted () {
    // 微信配置 包括分享标题 连接 图片
    // wxConfig.call(this)
    // 执行 vuex里面的检查活动是否过期
    // this.$store.dispatch('checkActivity', this)
    // 执行 vuex 里面检查用户是否授权
  }
}
</script>

<style lang="scss">
  // 动画css
  @import url('./assets/css/animate.min.css');

  *{
    margin: 0;
    padding: 0;
  }
  #app{
    background-color: #eee
  }
</style>
