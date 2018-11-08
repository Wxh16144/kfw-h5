// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// vue-router
import router from './router'
// vuex
import store from './store'
// axios
import '@/plugins'
// rem
import '@/plugins/rem.js'

// iconfont图标css
import '../static/iconfont/iconfont.css'
// mint-ui
import '@/plugins/mintui.js'
import 'mint-ui/lib/style.css'
// vue-photo-preview https://www.npmjs.com/package/vue-photo-preview
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview, {
  fullscreenEl: false // 关闭全屏按钮
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
