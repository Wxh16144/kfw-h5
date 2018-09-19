// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-cssnext": {},
    // // //px 转vw
    //   "postcss-px-to-viewport": {
    //       viewportWidth: 750,     // (Number) The width of the viewport.
    //       viewportHeight: 1334,    // (Number) The height of the viewport.
    //       unitPrecision: 3,       // (Number) The decimal numbers to allow the REM units to grow to.
    //       viewportUnit: 'vw',     // (String) Expected units.
    //       selectorBlackList: ['.ignore', '.hairlines'],  // (Array) The selectors to ignore and leave as px.
    //       minPixelValue: 1,       // (Number) Set the minimum pixel value to replace.
    //       mediaQuery: false       // (Boolean) Allow px to be converted in media queries.
    //   }, 
    //   "postcss-viewport-units":{},
    //   "cssnano": {
    //       preset: "advanced",
    //       autoprefixer: false,
    //       "postcss-zindex": false
    //   },

    //  //px 转 rem 
    "postcss-pxtorem": {
      "rootValue": 32,
      "propList": ["*"],
      // 注意：如果有使用第三方UI如VUX，则需要配置下忽略选择器不转换。
      // 规则是class中包含的字符串，如vux中所有的class前缀都是weui-。也可以是正则。
      "selectorBlackList": ["weui-"]
    }
  }
}
