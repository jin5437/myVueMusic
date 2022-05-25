<template>
  <div class="musicListDetail">
    <!-- 歌单信息 -->
    <div class="listInfo">
      <!-- 歌单封面 -->
      <div class="listAvatar">
        <img         
          :src="theFirstOfHighquality.coverImgUrl" 
          alt="歌单封面" 
          class="backgroundImg"
        />
        
      </div>
      <div class="right">
        <!-- 标题 -->
        <div class="title">
          <div class="titleTag">歌单</div>
          <div class="titleContent"></div>
        </div>
        <!-- 用户信息 -->
        <div class="user">
          <div class="userAvatar">
            <img alt="用户信息" />
          </div>
          <div
            class="userName"
          >
            
          </div>
          <div class="createTime">
            创建
          </div>
        </div>
        <!-- 操作按钮 -->
        <div class="buttons">
          <div class="buttonItem playAll" >
            <i class="iconfont el-icon-caret-right playAll"></i>
            <span>播放全部</span>
          </div>
          <div class="buttonItem">
            <i class="iconfont el-icon-star-on"></i>
            <span></span>
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
            
          >
            {{ item }}
          </div>
          <div>暂无标签</div>
        </div>
        <!-- 歌曲列表的歌曲数量和播放量 -->
        <div class="otherInfo">
          <div class="musicNum">
            歌曲 : 
          </div>
          <div class="playCount">
            播放 : 
          </div>
        </div>
        <div class="desc">
          简介 :
          
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
              <!-- <i class="iconfont icon-download"></i> -->
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
        <!-- <el-tab-pane label="评论" name="second">
          <div
            class="commentList"
            v-if="comments.comments"
            v-loading="isCommentLoading"
          >
            精彩评论
            <comment
              :commentType="'musicList'"
              :comments="comments.hotComments"
              :commentId="musicListDetail.id + ''"
              @getComment="getMusicListComment"
              @scrollToComment="scrollToComment"
              v-if="comments.hotComments"
              ref="hotComments"
              ><div slot="title">精彩评论</div></comment
            >
            最新评论
            <comment
              :comments="comments.comments"
              :commentType="'musicList'"
              :commentId="musicListDetail.id + ''"
              :isHotComment="comments.hotComments ? false : true"
              @getComment="getMusicListComment"
              @scrollToComment="scrollToComment"
              @transToHotComment="
                (info) =>
                  $refs.hotComments.floorComment(info.commentId, info.nickName)
              "
              ><div slot="title">热门评论</div></comment
            >
          </div>
          分页
          <div
            class="page"
            v-show="comments.comments && comments.comments.length != 0"
          >
            <el-pagination
              background
              layout="prev, pager, next"
              :total="comments.total"
              small
              :page-size="50"
              :current-page="currentCommentPage"
              @current-change="commentPageChange"
            >
            </el-pagination>
          </div>
        </el-tab-pane> -->
        
      </el-tabs>
    </div>

    <!-- 返回顶部组件 -->
    <!-- <go-top scrollObj=".musicListDetail"></go-top> -->
  </div>
</template>

<script>
export default {
  name:'MusicListDetail',
  data(){
    return{
      theFirstOfHighquality:{},
    }
  },
  methods: {
    // 获取精品歌单的第一条数据
    async getTheFirstOfHighquality(){
      // limit: 取出歌单数量 , 默认为 20
      let result = await this.$request("/top/playlist/highquality",{
        limit:1,
      })
      console.log(result)
      this.theFirstOfHighquality = result.data.playlist
      console.log(this.theFirstOfHighquality)
    },
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