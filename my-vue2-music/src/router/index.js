import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('../components/Index.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  }, 
  {
    path: '/index',
    redirect:'/discover',
    component: Index,
    children:[
      {
        path:'/discover',
        component:'Discover'
      },
      {
        path:'/video',
        component:'Video'
      },
      {
        path:'/favorites',
        component:'Favorites'
      },
      {
        path:'/recommendmusic',
        component:'/RecommendMusic'
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
