<template>
  <el-container>
    <!-- 顶栏 -->
    <el-header>
      <header-bar></header-bar>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="160px">
        <el-menu
          active-text-color="black"
          router
          :default-active="defaultActive"
        >
          <el-menu-item index="/discover">
            <i class="iconfont icon-yinle"></i>
            <span slot="title">发现音乐</span>
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
      <el-main>
        <router-view>

        </router-view>
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

<style>
.is-active {
  background-color: #f6f6f7;
  font-size: 14px;
  font-weight: 600;
}

.iconfont {
  font-size: 14px;
  margin: 5px !important;
}

.routerView {
  padding: 0 15px;
  margin: 0;
  width: 100%;
  height: calc(80vh - 105px);
}

.el-header {
  background-color: #ec4141;
  height: 50px !important;
  padding: 0;
  margin: 0;
  z-index: 100;
}

.el-aside {
  border-right: 1px solid #ccc;
  height: calc(80vh - 105px);
}

.el-menu {
  border: none;
}

.el-menu-item:hover {
  background-color: #f5f5f6 !important;
}

.el-menu-item {
  font-size: 12px;
  padding: 0 0 0 10px !important;
  margin: 5px 0 !important;
  height: 30px;
  line-height: 30px;
}

.el-menu-item-group {
  margin-top: 10px;
}

.el-main {
  padding: 0;
}
</style>