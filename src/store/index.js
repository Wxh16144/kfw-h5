/*
 * @Author: WuXiaohong 
 * @Date: 2018-09-13 14:29:03 
 * @Last Modified by: WuXiaohong_notebook
 * @Last Modified time: 2018-09-19 18:24:38
 */
import Vue from 'vue';
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activityCode: 1525850762556,
    activityStatus: true // 活动状态 默认可以用
  },
  mutations: {

  },
  actions: {
    // 获取活动状态
    async checkActivity(store, self) {
      const myAlert = msg => {
        self.$toast({
          message: msg,
          iconClass: 'iconfont icon-error',
          duration: 1000
        })
      }
      try {
        const response = await self.$http.post('getCache', {
          code: store.state.activityCode
        })
        const {status ,  param = {startdate:0,enddate:1} } = response
        const { startdate  , enddate} = param
        const Datenow = Date.now().toString().substr(0, 10) - 0
        if (status && param) {
          if (Datenow > enddate) {
            store.activityStatus = false
            myAlert('活动已经结束')
          } else if (Datenow < startdate) {
            store.activityStatus = false
            myAlert('活动还未开始')
          }else{
            myAlert('请检查')
          }
        } else {
          store.activityStatus = false
          myAlert('服务器繁忙')
        }
      } catch (e) {
        console.error(e)
      }
    }
  }
})
