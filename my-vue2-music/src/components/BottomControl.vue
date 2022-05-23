<template>
  <div class="bottomControl">
    <!-- 
      @play:音频或视频文件已经就绪可以开始播放时触发 
      @pause:音频或视频文件暂停时触发
      @ended:音频或视频文件播放完毕后触发
      @timeupdate:播放位置改变时触发
    -->
    <audio
    :src="musicUrl"
    ref="audioPlayer"
    autoplay
    
    @ended="changeMusic('next')"
    @timeupdate="timeupdate"
    ></audio>
    <div class="left">
      <div class="avatar" @click="$store.commit('changeMusicDetailCardState')">
        <!-- Todo ：播放音乐时，切换到专辑封面 -->
        <!-- <img  alt="专辑封面"  
        /> -->
        <img src="../assets/img/test.jpg" alt="" />
      </div>
      <div class="musicInfo">
        <!-- 展示歌曲名称 -->
        <div class="musicName">
          
        </div>
        <!-- 展示歌手名称 -->
        <div
          class="singer"
          
        >
          
        </div>
      </div>
      <div class="downloadContainer" >
        <!-- <i class="iconfont icon-download" ></i> -->
      </div>
    </div>
    <!-- 中间 -->
    <div class="center">
      <div class="buttons">
        <span 
          ><i class="iconfont el-icon-refresh-right" ></i
          >
          <!-- Todo：随机播放 -->
          <!-- <i class="iconfont icon-suiji1" ></i> -->
        </span>
        <span 
          ><i class="iconfont el-icon-arrow-left"></i
        ></span>
        <!-- <span @click="musicList.length !=0 ? changePlayState() :''"> -->
          <span @click="changePlayState()">
          <i
            class="iconfont el-icon-video-play"
            v-show="!$store.state.isPlay"

          ></i>
          <i class="iconfont el-icon-video-pause" v-show="$store.state.isPlay"></i>
        </span>
        <span 
          ><i class="iconfont el-icon-arrow-right"></i
        ></span>
        <span
          ><i
            class="iconfont el-icon-star-off"  
          ></i
        ></span>
      </div>
      <!-- 进度条 -->
      <div class="progressBar">
        <span class="currentTime"></span>
        <!-- :value 是单向的  要实现双向要v-model -->
        <el-slider
          class="progressSlider"
          :show-tooltip="false"
        ></el-slider>
        <span class="totalTime"></span>
      </div>
    </div>
    <!-- 右边 -->
    <div class="right">
      <div class="volumeControl">
        <i class="iconfont el-icon-headset"></i>
        <el-slider
          class="volumeSlider"
          :show-tooltip="false"
        ></el-slider>
      </div>
      <div class="playList" >
        <i class="iconfont el-icon-s-operation"></i>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomControl',
  data() {
    return {
      musicUrl:"",
      musicDetail:{},
      // 播放类型：顺序播放order、随机播放random
      playType:"order",
      musicList:[]
    }
  },
  methods: {
    test(){
      this.$refs['audioPlayer'].play()
    },
    // 切换播放状态
    changePlayState(){
      this.$store.commit('changeState')
      this.test()
    },
    timeupdate(){

    },
    // 获取歌曲url
    async getMusicUrl(id){
      let result = await this.$request("/song/url",{id})
      if(result.data.data[0].url == null){
        this.$message.error('当前歌曲无版权，即将为您播放下一首')
      }
      console.log(result)
      this.musicUrl = result.data.data[0].url
    },
    // 获取精品歌单
    getHighQualityList(){
      let result = this.$request("/top/playlist/highquality")
      console.log(result)
    }
  },
  mounted() {
    // let url = '/api/artist/list?type=2&area=7&initial=b'
    // this.$axios.get(url).then(res => {
    //   console.log(res)
    // })
    let url2 = '/api/top/playlist/highquality'
    this.$axios.get(url2).then(res => {

    })
    let url3 = '/api/playlist/detail?id=514947114'
    this.$axios.get(url3).then(res=>{

    })
    let url4 = '/api/song/url?id=202369'
    this.$axios.get(url4).then(res =>{
      // console.log(res)
      this.musicUrl = res.data.data[0].url
      //this.test()
    })
  },
}
</script>

<style scoped>
.bottomControl {
  /* background-color: pink; */
  border-top: 1px solid #ddd;
  width: 100%;
  height: 55px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 6px 10px;
  z-index: 10000;
  background-color: #fff;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 5px;
  overflow: hidden;
  margin-right: 10px;
  cursor: pointer;
}

.avatar img {
  width: 100%;
}

.left {
  display: flex;
  align-items: center;
  width: 123px;
}

.musicInfo {
  color: rgb(37, 37, 37);
  font-size: 12px;
  width: 70px;
}

.musicName {
  margin-bottom: 4px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.singer {
  transform: scale(0.9);
  margin-left: -3px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}

.center {
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.buttons {
  display: flex;
  align-items: center;
  height: 13px;
}

.buttons i {
  font-size: 20px;
  color: #313131;
}

.buttons span:nth-child(3) i {
  font-size: 25px;
}

.center .el-icon-refresh-right {
  font-size: 17px;
}
.center .icon-xihuan {
  font-size: 15px;
}

.right {
  display: flex;
  align-items: center;
  position: relative;
}

.volumeControl {
  display: flex;
  align-items: center;
  margin-right: 15px;
}

.el-icon-headset {
  font-size: 18px;
  margin-right: 15px;
}

.volumeSlider {
  width: 55px;
}

.el-icon-s-operation {
  font-size: 18px;
  margin-right: 20px;
}

.progressSlider {
  width: 300px;
}

.buttons span {
  display: inline-block;
  width: 50px;
  box-sizing: border-box;
  text-align: center;
}

.el-icon-video-pause {
  font-size: 35px !important;
}

.drawerHeader {
  font-size: 12px;
  transform: scale(0.9);
  color: #aaa;
  padding: 15px 0;
}

.progressBar {
  display: flex;
  align-items: center;
}

.currentTime,
.totalTime {
  font-size: 12px;
  transform: scale(0.85);
  color: #aaa;
  margin: 0 5px;
  width: 30px;
  text-align: center;
}

.progressBar {
  height: 10px;
  margin-top: 12px;
  overflow: hidden;
}

.like {
  color: #ec4141 !important;
}

.downloadContainer {
  height: 100%;
  position: relative;
}

.downloadContainer i {
  position: absolute;
  bottom: 5px;
}

.recondInfo {
  position: absolute;
  font-size: 12px;
  transform: scale(0.8);
  width: 140px;
  right: -5px;
  bottom: -5px;
}

.center .icon-suiji1 {
  font-size: 15px;
}
</style>
