<template>
  <el-container class="container">
    <!-- 顶栏 -->
    <el-header>
      <header-bar></header-bar>
    </el-header>
    <el-container style="height: cal(100%-50px);">
      <!-- 侧边栏 -->
      <el-aside width="160px">
        <el-menu
          active-text-color="black"
          router
          :default-active="defaultActive"
        >
          <el-menu-item index="/discover">
            <i class="iconfont el-icon-headset"></i>
            <span slot="title">发现音乐</span>
          </el-menu-item>
          <el-menu-item index="/video">
            <i class="iconfont el-icon-video-camera"></i>
            <span slot="title">发现视频</span>
          </el-menu-item>
          <el-menu-item index="/favorites">
            <i class="iconfont el-icon-star-on"></i>
            <span slot="title">收藏喜欢</span>
          </el-menu-item>
          <el-menu-item index="/recommends">
            <i class="iconfont el-icon-medal"></i>
            <span slot="title">每日推荐</span>
          </el-menu-item>
          <el-menu-item-group v-if="createdMusicList.length != 0">
            <template slot="title" class="groupTitle">创建的歌单</template>
            <el-menu-item
              v-for="(item, index) in createdMusicList"
              :key="index"
              :index="'/musiclistdetail/' + item.id"
            >
              <i class="iconfont icon-gedan"></i>{{ item.name }}</el-menu-item
            >
          </el-menu-item-group>
        </el-menu>
      </el-aside>
      <!-- 主体内容 -->
      <el-main class="routerView">
        <router-view></router-view>
      </el-main>
    </el-container>
    <bottom-control></bottom-control>
    <music-detail-card class="musicDetailCard"></music-detail-card>
  </el-container>
</template>

<script>
import HeaderBar from "./headerBar/HeaderBar";
import BottomControl from "./BottomControl";
import MusicDetailCard from "../views/musicDetailCard/MusicDetailCard.vue"
export default {
  name: "Index",
  components: {
    HeaderBar,
    BottomControl,
    MusicDetailCard
  },
  data() {
    return {
      defaultActive: "",
      createdMusicList: "", //创建的歌单
    };
  },
};
</script>

<style scoped>

.container{
  width: 100%;
}
.is-active {
  background-color: #f6f6f7;
  font-size: 16px;
  font-weight: 600;
}

.iconfont {
  font-size: 16px;
  margin: 5px !important;
}

.routerView {
  margin-left: 20px;
  height: 100%;
  overflow: auto;
}

.el-header {
  box-sizing: border-box;
  /* position: fixed; */
  background-color: #ec4141;
  width: 100%;
  z-index: 1000;
}

.el-aside {
  border-right: 1px solid #ccc;
  height: calc(90vh - 30px);
  /* position: fixed; */
  padding-top: 20px;
  z-index: 99;
}

.el-menu {
  border: none;
}

.el-menu-item:hover {
  background-color: #f5f5f6 !important;
}

.el-menu-item {
  font-size: 16px;
  padding: 0 0 0 10px !important;
  margin: 5px 0 !important;
  height: 50px;
  line-height: 50px;
}

.el-menu-item-group {
  margin-top: 10px;
}

.el-main {
  margin-top: 20px;
  padding: 0;
}
</style>