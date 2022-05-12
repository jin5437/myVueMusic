import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('../components/Index.vue')
const Discover = () => import('../views/discover/Discover.vue')
const Video = () => import('../views/video/Video.vue')
const Favorites = () => import('../views/favorites/Favorites.vue')
const RecommendMusic = () => import('../views/recommendMusic/RecommendMusic.vue')
const MusicList = () => import('../views/discover/discoverChildren/MusicList.vue')
const Ranking = () => import('../views/discover/discoverChildren/Ranking.vue')
const Singer = () => import('../views/discover/discoverChildren/Singer.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  }, 
  {
    path: '/index',
    // redirect:'/discover',
    component: Index,
    children:[
      {
        path:'/discover',
        component:Discover,
        children:[
          {
            path:'/discover/musiclist',
            component:MusicList
          },
          {
            path:'/discover/rangking',
            component:Ranking
          },
          {
            path:'/discover/singer',
            component:Singer
          }
        ]
      },
      {
        path:'/video',
        component:Video
      },
      {
        path:'/favorites',
        component:Favorites
      },
      {
        path:'/recommendmusic',
        component:RecommendMusic
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
