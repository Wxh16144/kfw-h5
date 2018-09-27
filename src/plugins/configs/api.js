export default {
  // 接口请求baseUrl
  baseUrl: 'http://mp.kfw001.com/',
  // 接口文档地址
  api: {
    apiForAuth: 'http://api.mp.kfw001.com/auth/wechat/getMember', //获取微信头像信息接口
    // apiForConfig: 'http://game.kfw001.com/game/index.php?s=share/index',
    apiForConfig: 'http://api.mp.kfw001.com/auth/wechat/jssdk', // 获取分享接口
    apiForShare: 'http://game.kfw001.com/game/index.php?s=vote/info',
    addCache: 'http://api.mp.kfw001.com/game/form/addCache', // 查询缓存,调试时使用,
    imgUpload: 'http://api.mp.kfw001.com/game/img/upload', // 图片上传
    cacheStat:'http://api.mp.kfw001.com/game/form/stat', // 保存表单数据(不需要微信授权)
    getCache:'http://api.mp.kfw001.com/game/act/getCache'  // 获取活动信息
  }
}
