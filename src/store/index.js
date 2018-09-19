/*
 * @Author: WuXiaohong 
 * @Date: 2018-09-13 14:29:03 
 * @Last Modified by: WuXiaohong_notebook
 * @Last Modified time: 2018-09-19 16:37:21
 */
import Vue from 'vue';
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activityCode: 10086,
    activityStatus: true // 活动状态 默认可以用
  },
  mutations: {
    myAlert(msg) {
      this.$toast({
        message: msg,
        iconClass: 'iconfont icon-error',
        duration: 1000
      })
    }
  },
  actions: {
    // 获取活动状态
    async checkActivity(store, self) {
      try {
        const response = await self.$http.post('getCache', {
          code: 1537155092345
        })
        const {
          status,
          param: {
            startdate,
            enddate
          }
        } = response
        const Datenow = Date.now().toString().substr(0, 10) - 0
        if (status) {
          if (Datenow > enddate) {
            store.activityStatus = false
            this.myAlert('活动已经结束')
          } else if (Datenow < startdate) {
            store.activityStatus = false
            this.myAlert('活动还未开始')
          }
        } else {
          store.activityStatus = false
          this.myAlert('服务器繁忙')
        }
      } catch (e) {
        console.error(e)
      }
    }
  }
})
