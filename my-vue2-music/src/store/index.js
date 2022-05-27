import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 存放数据
  state: {  
    musicId:'',   // 音乐的url
    isPlay:false,   // 音乐播放状态
    isMusicDetailCardShow:false,  // 音乐详情卡片的显示与隐藏
    musicListId:'',   //当前播放的歌单id
    musicList:[],     //当前播放的歌单
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
    // 切换播放状态
    changeState(state){
      state.isPlay = !state.isPlay
    },
    updateMusicId(state,musicId){
      console.log("updateMusicId")
      state.musicId = musicId
    },
    // 更新歌单列表和歌单id
    updateMusicList(state,playload){
      // 歌单id变化
      if(playload.musicListId != state.musicListId){
        state.musicListId = playload.musicListId
      }
      
    },
  },
  // 异步方法
  actions: {
  },
  // store模块
  modules: {
  }
})
