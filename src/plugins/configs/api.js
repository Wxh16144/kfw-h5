export default {
  // 接口请求baseUrl
  baseUrl: 'http://mp.kfw001.com/',
  // 接口文档地址
  api: {
    // 获取微信头像信息接口
    apiForAuth: 'http://api.mp.kfw001.com/auth/wechat/getMember',
    // 获取分享接口
    apiForConfig: 'http://api.mp.kfw001.com/auth/wechat/jssdk',
    // 查询缓存,调试时使用,
    addCache: 'http://api.mp.kfw001.com/game/form/addCache',
    // 图片上传
    imgUpload: 'http://api.mp.kfw001.com/game/img/upload',
    // 保存表单数据(不需要微信授权)
    cacheStat: 'http://api.mp.kfw001.com/game/form/stat',
    // 获取活动信息
    getCache: 'http://api.mp.kfw001.com/game/act/getCache'
  }
}
