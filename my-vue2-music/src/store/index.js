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
    changePlayState(state,isPlay){
      // console.log("changePlayState的isPlay",isPlay)
      state.isPlay = isPlay
    },
    // 更新音乐url
    updateMusicId(state,musicId){
      console.log("updateMusicId")
      state.musicId = musicId
    },
    // 更新歌单列表和歌单id
    updateMusicList(state,playload){
      /* 
        playload:是从 musicListDetail 组件中，commit的值
      */
      // console.log('playload的值：',playload)
      // 歌单id变化，重置当前播放音乐索引
      if(playload.musicListId != state.musicListId){
        state.musicListId = playload.musicListId
      }
      /* 
        注意这里需要深拷贝，直接赋值操作是浅拷贝
        vuex中的musicList是动态数据，展示的歌单是固定的数据
      */
      let musicList = playload.musicList.splice(0)
      state.musicList = musicList
    },
  },
  // 异步方法
  actions: {
  },
  // store模块
  modules: {
  }
})
