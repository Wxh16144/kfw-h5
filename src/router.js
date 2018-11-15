import Vue from 'vue'
import VueRouter from 'vue-router'
import QS from 'query-string'
// compnents
// import index from '@/views/index'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/index')
    },
    {
      path: '/token/:name/:token',
      name: 'token',
      component: () => import('@/components/token')
    },
    {
      path: '/test',
      name: 'test',
      meta: {
        requiresAuth: true,
        desc: '需要授权'
      }
    },
    {
      path: '*',
      redirect: {
        name: 'index'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  return next()
  const _time = window.localStorage.getItem('token_timestamp') || 0
  if (
    (window.localStorage.getItem('auth') === null && to.name !== 'token') ||
    Date.now() - _time > 3600000
  ) {
    const baseURL = 'http://api.mp.kfw001.com/auth/wechat/web'
    const { name } = to
    const { protocol, host, pathname } = window.location
    console.warn(protocol, host, pathname)
    const urlParams = QS.stringify({
      response_type: 'auth',
      appid: 'test',
      scope: 'snsapi_base', // snsapi_userinfo
      // 在地址后面添加时间戳,防止后端重定向不刷新页面,微信缓存机制  Date.now()
      redirect_uri: `${protocol}//${host}${pathname}?${Date.now()}#/token/${name}/{auth}`
    })
    window.localStorage.setItem('token_timestamp', new Date().getTime())
    window.location.href = `${baseURL}?${urlParams}`
  } else if (to.matched.some(record => record.meta.requiresAuth)) {
    alert(to['meta']['desc'] || '地址无效')
    next({ path: '/' }) // 回到首页
  } else {
    next()
  }
})

export default router
