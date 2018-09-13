import Vue from "vue";
import VueRouter from "vue-router";


// compnents
// import index from '@/views/index'

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {
      path: "/",
      name:'index',
      component:  ()=> import('@/views/index')
    }
  ]
})


export default router;