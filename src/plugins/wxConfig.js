/*
 * @Author: WuXiaohong 
 * @Date: 2018-09-14 10:26:47 
 * @Last Modified by: WuXiaohong_notebook
 * @Last Modified time: 2018-09-19 15:39:53
 */

export default async  function () {  
  // 微信配置文件
  const {
    status,
    param,
    info
  } = await this.$http.post('apiForConfig', {})
  // param.debug = true
  if (status) {
    wx.config(param);
    wx.ready(() => {
      const shareData={
        title: '分享标题', // 分享标题
        desc:'写一封家书，你会收到…', // 分享描述
        link: 'http://game.kfw001.com/2018/yinlian/zq/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: `http://game.kfw001.com${require('../../static/share-icon.png')}`, // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      }
      // 分享到朋友圈
      // eslint-disable-next-line
      wx.onMenuShareTimeline(shareData)
      // 分享给朋友
      // eslint-disable-next-line
      wx.onMenuShareAppMessage(shareData)
      // 分享给到qq
      // eslint-disable-next-line
      wx.onMenuShareQQ(shareData)
    })
  }

}
