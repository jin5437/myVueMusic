<template>
  <div class="musicListDetail" v-if="musicListDetail">
    <!-- 歌单信息 -->
    <div class="listInfo">
      <!-- 歌单封面 -->
      <div class="listAvatar">
        <img         
          :src="musicListDetail.coverImgUrl" 
          alt="歌单封面" 
        />
      </div>
      <div class="right">
        <!-- 标题 -->
        <div class="title">
          <div class="titleTag">歌单</div>
          <div class="titleContent">{{musicListDetail.name}}</div>
        </div>
        <!-- 用户信息 -->
        <div class="user">
          <div class="userAvatar">
            <img 
              :src="musicListDetail.creator.avatarUrl ? musicListDetail.creator.avatarUrl : ''"
              alt="用户头像" />
          </div>
          <!-- Todo：  点击用户昵称，跳转到用户界面 -->
          <div
            class="userName"
          >
            {{musicListDetail.creator.nickname}}
          </div>
          <div class="createTime">
            {{ musicListDetail.createTime | showDate }}
            创建
          </div>
        </div>
        <!-- 操作按钮 -->
        <div class="buttons">
          <div class="buttonItem playAll" @click="playAll">
            <i class="iconfont el-icon-caret-right playAll"></i>
            <span>播放全部</span>
          </div>
          <div class="buttonItem">
            <i class="iconfont el-icon-star-on"></i>
            <span>收藏</span>
          </div>
          <div class="buttonItem">
            <i class="iconfont el-icon-share"></i>
            <span>分享</span>
          </div>
        </div>
        <!-- 标签 -->
        <div class="tags">
          标签：
          <div
            class="tagItem"
            v-for="(item,key) in musicListDetail.tags"
            :key="key"
          >
            {{ item }}
          </div>
          <!-- <div v-if="musicListDetail.tags.length == 0">暂无标签</div> -->
        </div>
        <!-- 歌曲列表的歌曲数量和播放量 -->
        <div class="otherInfo">
          <div class="musicNum">
            歌曲数量 : {{musicListDetail.trackCount | handleNum}}
          </div>
          <div class="playCount">
            播放量 : {{musicListDetail.playCount | handleNum}}
          </div>
        </div>
        <div class="desc">
          简介 :
          {{musicListDetail.description ? musicListDetail.description : "暂无简介"}}
        </div>
      </div>
    </div>
    <!-- 歌曲列表 -->
    <div class="musicList">
      <el-tabs value="first" @tab-click="clickTab">
        <el-tab-pane label="歌曲列表" name="first">
          <!-- 表格 -->
          <el-table
            :data="musicListDetail.tracks"
            size="mini"
            style="width: 100%"
            @row-dblclick="clickRow"
            @cell-click="clickCell"
            highlight-current-row
            stripe
            lazy
            :row-key="
              (row) => {
                return row.id;
              }
            "
            v-infinite-scroll="this.$store.state.isLogin ? loadMore : ''"
            :infinite-scroll-disabled="scrollLoadDisabled"
            :infinite-scroll-distance="1500"
            :infinite-scroll-immediate="false"
          >
            <el-table-column
              label=""
              width="40"
              type="index"
              :index="handleIndex"
            >
            </el-table-column>
            <el-table-column label="" width="23">
              <!-- 下载按钮 -->
              <i class="iconfont icon-download"></i>
            </el-table-column>
            <el-table-column prop="name" label="音乐标题" min-width="350">
            </el-table-column>
            <el-table-column prop="ar[0].name" label="歌手" min-width="120">
            </el-table-column>
            <el-table-column prop="al.name" label="专辑" min-width="170">
            </el-table-column>
            <el-table-column prop="dt" label="时长" min-width="100">
            </el-table-column>
            <!-- <el-table-column prop="id"></el-table-column> -->
          </el-table>
          <!-- <div class="loadMore" v-if="isMore && !this.$store.state.isLogin">
            登陆后查看更多音乐
          </div>
          <div class="placeholder" v-else></div> -->
          <!-- <div class="placeholder"></div> -->
        </el-tab-pane>
        <el-tab-pane label="评论" name="second">
        </el-tab-pane>
        <el-tab-pane label="收藏" name="third">
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 返回顶部组件 -->
    <!-- <go-top scrollObj=".musicListDetail"></go-top> -->
  </div>
</template>

<script>
import {formatDate, handleNum,  handleMusicTime} from "../../plugins/utils"
export default {
  name:'MusicListDetail',
  data(){
    return{
      musicListDetail:null,
      scrollLoadDisabled:false,
    }
  },
  methods: {
    // 根据传过来的id查询歌单详情
    async getMusicListDetail(){
      // 时间戳
      let timestamp = Date.parse(new Date()) 
      let result = await this.$request("/playlist/detail",{
        id: this.$route.params.id,
        timestamp,
      })
      console.log(result)
      this.musicListDetail = result.data.playlist
    },

    // 点击全部播放的按钮
    playAll(){
      this.$store.commit("updateMusicId",this.musicListDetail.tracks[0].id)
      this.$store.commit("updateMusicList", {
        musicList: this.musicListDetail.tracks,
        musicListId: this.musicListDetail.id
      })
    },
    // 点击切换el-tab-pane
    clickTab(e){
      console.log(e.index)
    },
    // 双击table的某一行，播放歌曲
    clickRow(row){
      // row是当前行的数据
      console.log(row)
      // 将musicId提交到Vuex中，供bottomControl查询歌曲url和其他操作
      this.$store.commit("updateMusicId",row.id)
      // 如果歌单变化，则提交歌单到Vuex
      if(this.musicListDetail.id != this.$store.state.musicListDetail){
        this.$store.commit("updateMusicList",{
          musicList:this.musicListDetail.tracks,
          musicListId:this.musicListDetail.id
        })
      }
    },
    // 判断点击的是否是下载按钮  ---- Todo
    clickCell(row){
      console.log(row)
    },
    // 设置了 type=index，可以通过传递 index 属性来自定义table的索引
    handleIndex(index){
      // console.log(index)
      index += 1
      if(index < 10) return '0' + index
      else return index
    }
  },
  watch:{
  },
  // 过滤器，控制列表展示的歌曲数量
  filters:{
    showDate(value){
      let date = new Date(value)
      return formatDate(date)
      // return formatDate(date,"yyyy-MM-dd")
    },
    handleNum,
  },
  mounted() {
    // 这里暂不考虑异步的问题
    this.getMusicListDetail()
    
    // let test = "/api/login/cellphone?phone=15675205437&password=zjl123456"
    // this.$axios.get(test).then(res =>{
    //   console.log(res)
    // })
  },
}
</script>

<style scoped>
.musicListDetail {
  overflow-y: scroll;
}

.listInfo {
  display: flex;
  padding: 25px 15px;
  align-items: center;
}

.listAvatar {
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 10px;
  margin-right: 15px;
  position: relative;
}

.listAvatar::after {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background: url("../../assets/img/imgLoading.png") no-repeat;
  background-size: contain;
  z-index: -1;
}

.listAvatar img {
  width: 100%;
}

.right {
  width: calc(100% - 200px);
}

.title {
  display: flex;
  align-items: center;
}

.titleTag {
  font-size: 12px;
  color: #ec4141;
  border: 1px solid #ec4141;
  padding: 1px 2px;
  border-radius: 2px;
  margin-right: 5px;
  transform: scale(0.8);
}

.titleContent {
  font-size: 20px;
  font-weight: 600;
  color: #373737;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 90%;
}

.user {
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-size: 12px;
}

.userAvatar {
  height: 25px;
  width: 25px;
  margin-right: 8px;
}

.userAvatar img {
  width: 100%;
  border-radius: 50%;
}

.userName {
  color: #6191c2;
  margin-right: 8px;
  cursor: pointer;
}

.createTime {
  transform: scale(0.9);
}

.buttons {
  margin: 8px 0 0 -5px;
  display: flex;
}

.buttonItem {
  font-size: 12px;
  padding: 8px 15px;
  border: 1px solid #ddd;
  border-radius: 20px;
  transform: scale(0.9);
  cursor: pointer;
}

.buttonItem i {
  font-size: 12px;
  margin-right: 3px;
  transform: scale(0.9);
}

.playAll {
  background-color: #ec4141;
  color: white;
}

.tags {
  margin: 8px 0 0 -30px;
  display: flex;
  font-size: 12px;
  transform: scale(0.9);
}

.tagItem {
  color: #6191c2;
  margin-right: 5px;
}

.otherInfo {
  margin: 5px 0 0 -30px;
  display: flex;
  font-size: 12px;
  transform: scale(0.9);
}

.musicNum {
  margin-right: 13px;
}

.desc {
  margin: 5px 0 0 -30px;
  font-size: 12px;
  transform: scale(0.9);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.musicList {
  margin: -15px 15px 0;
}

.page {
  width: 100%;
  text-align: center;
  padding-bottom: 20px;
}

.placeholder {
  width: 100%;
  height: 50px;
}

.loadMore {
  width: 100%;
  height: 50px;
  font-size: 12px;
  color: #aaa;
  text-align: center;
  line-height: 50px;
  transform: scale(0.9);
}

.red {
  color: #ec4141;
}

.commentList /deep/ .el-loading-spinner {
  top: 40px;
}

.tips {
  font-size: 14px;
  margin: 30px 0;
  text-align: center;
}
</style>