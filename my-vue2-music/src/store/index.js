import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 存放数据
  state: {
    // 音乐的url
    musicId:'',
    // 音乐播放状态
    isPlay:false,
    // 音乐详情卡片的显示与隐藏
    isMusicDetailCardShow:false
  },
  // 计算属性
  getters: {
  },
  // 修改state中的数据
  mutations: {
    // 切换到音乐详情卡片页面
    changeMusicDetailCardState(state){
      state.isMusicDetailCardShow = !state.isMusicDetailCardShow
    },
    changeState(state){
      state.isPlay = !state.isPlay
    }
  },
  // 异步方法
  actions: {
  },
  // store模块
  modules: {
  }
})
