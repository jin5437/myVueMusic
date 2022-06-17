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
const MusicListDetail = () => import('../views/musiclistdetail/MusicListDetail.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  }, 
  {
    path: '/index',
    redirect:'/index/discover',
    component: Index,
    children:[
      {
        path:'/index/discover',
        redirect:'/index/discover/musiclist',
        component:Discover,
        children:[
          {
            path:'/index/discover/musiclist',
            component:MusicList
          },
          {
            path:'/index/discover/rangking',
            component:Ranking
          },
          {
            path:'/index/discover/singer',
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
      },
      {
        path:'/musiclistdetail/:id',
        name: 'musicListDetail',
        component:MusicListDetail
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
