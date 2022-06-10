<template>
  <div class="musicListIndex">
    <!-- 精选歌单入口展示 -->
    <div class="highqualityEntry">
      <img
        :src="theFirstOfHighquality.coverImgUrl"
        alt="精品歌单背景封面"
        class="backgroundImg"
      />
      <div class="cover">
        <img  
          :src="theFirstOfHighquality.coverImgUrl"
          alt="精品歌单背景封面" 
        />
      </div>
      <div class="EntryInfo">
        <div class="tag"><i class="iconfont el-icon-thumb"></i> 精品歌单</div>
        <div class="name">{{theFirstOfHighquality.name}}</div>
        <div class="desc">{{theFirstOfHighquality.copywriter}}</div>
      </div>
    </div>
    <!-- 歌单列表 -->
    <!-- <div class="musicListNavBar">
      <div class="left">
        <sort-box></sort-box>
      </div>
      <div class="right">
        <second-nav-bar></second-nav-bar>
      </div>
    </div> -->
    <!-- 展示歌单列表 -->
    <list-card
      :listCardData = "musicList.playlists"
      @clickListCardItem="clickListCardItem"
    >
    </list-card>
    <!-- 分页 -->
    <div class="page" v-if="musicList.playlists">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="musicList.total"
        :page-size="50"
        small
        :current-page="currentPage"
        @current-change="pageChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import ListCard from '@/components/listcard/ListCard.vue'
export default {
  name:'MusicList',
  components:{
    ListCard,
  },
  data(){
    return{  
      musicList:{},
      theFirstOfHighquality:{},
      hotTags:[],
      currentTag:{},
      currentPage:1,
    }
  },
  methods:{
    // 获取精品歌单的第一条数据
    async getTheFirstOfHighquality(){
      // limit: 取出歌单数量 , 默认为 20
      let result = await this.$request("/top/playlist/highquality",{
        limit:1,
      })
      // console.log(result)
      this.theFirstOfHighquality = result.data.playlists[0]
      // console.log(this.theFirstOfHighquality)
    },

    // todo---获取热门歌单的tag数据，拿tag用来做什么呢？
    async getHotTag(){
      let result = await this.$request("/playlist/hot")
      console.log(result)
      this.hotTags = result.data.tags
      this.currentTag = result.data.tags[0]
    },

    // 根据歌单标签tag请求歌单列表
    async getMusicList(){
      this.musicList = {}
      let result = await this.$request("/top/playlist",{
        cat:this.currentTag.name,
      })
      // console.log(result)
      this.musicList = result.data
    },
    // 点击歌单，id是歌单id，进入歌单详细列表页面 MusicListDetail.vue
    clickListCardItem(id){
      this.$router.push({name: 'musicListDetail',params:{id}})
      console.log("进入歌单详细列表页面 MusicListDetail.vue")
    },
    // 页面发生变化
    pageChange(){

    }
  },
  mounted() {
    this.getTheFirstOfHighquality()
    this.getMusicList()

    // let url2 = '/api/top/playlist/highquality'
    // this.$axios.get(url2).then(res => {
    //   console.log(res)
    //   console.log(res.data.playlists[0])
    // })

    // let url5 = '/api/top/playlist'
    // let url5 = '/api/playlist/hot'
    // this.$axios.get(url5).then(res => {
    //   console.log(res)
    // })
  },
}
</script>

<style scoped>
/* 居中 */
.musicListIndex{
  width: 90%;
  margin: auto;
}
.highqualityEntry {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding: 10px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
}
.backgroundImg {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  transform: translateY(-80px);
  filter: blur(30px) brightness(70%);
}

.cover {
  width: 180px;
  height: 180px;
  margin: 10px;
}

.cover img {
  border-radius: 10px;
  width: 100%;
}

.tag {
  color: #d59e54;
  border: 1px solid #d59e54;
  padding: 5px 10px;
  width: 88px;
  font-size: 12px;
  margin: 20px 10px 15px;
  border-radius: 15px;
}

.tag i {
  font-size: 14px;
}

.name {
  color: white;
  font-size: 14px;
  margin: 10px 0;
}

.desc {
  color: rgba(255, 255, 255, 0.5);
  /* 字体直接写小于12没有效果 */
  font-size: 12px;
  transform: scale(0.9, 0.9);
}

.musicListNavBar {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}

.page {
  width: 100%;
  text-align: center;
  padding-bottom: 20px;
}
</style>