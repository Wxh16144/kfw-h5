export const checkActivity = async (context, self) => {
  const myAlert = msg => {
    context.commit('update_activityStatus', false)
    self.$toast({
      message: msg,
      iconClass: 'iconfont icon-error',
      duration: 1000
    })
  }
  try {
    const response = await self.$http.post('getCache', {
      code: context.state.activityCode
    })
    const {
      status,
      param = {
        startdate: 0,
        enddate: 0
      }
    } = response
    // 获取活动开始时间戳和结束时间戳
    const { startdate, enddate } = param
    // 获取现在的时间戳
    const Datenow =
      Date.now()
        .toString()
        .substr(0, 10) - 0

    if (Datenow > enddate) {
      myAlert('活动已经结束')
    } else if (Datenow < startdate) {
      myAlert('活动还未开始')
    } else {
      myAlert('活动异常')
    }
  } catch (e) {
    console.error(e)
  }
}
