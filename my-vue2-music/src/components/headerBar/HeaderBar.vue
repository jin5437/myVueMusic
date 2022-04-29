<template>
  <div class="headerBar">
    <div class="left">
      <img src="../../assets/img/logo.png" alt="" />
    </div>
    <div class="center">
      <div class="buttons">
        <i class="iconfont icon-arrow-left-bold back" @click="$router.go(-1)"></i>
        <i class="iconfont icon-arrow-right-bold forward" @click="$router.go(1)"></i>
      </div>
      <div class="search">
        <el-popover placement="bottom" width="300" v-model="isSearchPopShow" popper-class="searchPop" trigger="focus">
          <el-input placeholder="请输入内容" prefix-icon="el-icon-search" size="mini" slot="reference" @input="inputSearch" @keyup.enter.native="onSubmit" v-model="searchInput">
          </el-input>
          <!-- 搜索历史存到localstorage中 todo-->
          
          <!-- 搜索建议 -->
          <div class="searchSuggest">
            <div class="hotSearchTitle" v-if="searchSuggestList.songs">
              搜索建议
            </div>
            <!-- 单曲 -->
            <div class="searchSuggestItem" v-if="
                searchSuggestList.songs && searchSuggestList.songs.length != 0
              ">
              <div class="searchSuggestItemTitle">
                <i class="iconfont icon-yinle"></i> 单曲
              </div>
              <div class="suggestItemDetail" v-for="(item, index) in searchSuggestList.songs" :key="index" @click="clickSuggestSong(item.id)">
                {{ item.name + " - " + item.artists[0].name }}
              </div>
            </div>
            <!-- 歌手 -->
            <div class="searchSuggestItem" v-if="
                searchSuggestList.artists &&
                searchSuggestList.artists.length != 0
              ">
              <div class="searchSuggestItemTitle">
                <i class="iconfont icon-mic"></i> 歌手
              </div>
              <div class="suggestItemDetail" v-for="(item, index) in searchSuggestList.artists" :key="index" @click="clickSuggestSinger(item.id)">
                {{ item.name }}
              </div>
            </div>
            <!-- 专辑 -->
            <div class="searchSuggestItem" v-if="
                searchSuggestList.albums && searchSuggestList.albums.length != 0
              ">
              <div class="searchSuggestItemTitle">
                <i class="iconfont icon-more"></i> 专辑
              </div>
              <div class="suggestItemDetail" v-for="(item, index) in searchSuggestList.albums" :key="index" @click="clickSuggestAlbum(item.id)">
                {{ item.name + " - " + item.artist.name }}
              </div>
            </div>
            <!-- 歌单 -->
            <div class="searchSuggestItem" v-if="
                searchSuggestList.playlists &&
                searchSuggestList.playlists.length != 0
              ">
              <div class="searchSuggestItemTitle">
                <i class="iconfont icon-gedan"></i> 歌单
              </div>
              <div class="suggestItemDetail" v-for="(item, index) in searchSuggestList.playlists" :key="index" @click="clickSuggestMusicList(item.id)">
                {{ item.name }}
              </div>
            </div>
          </div>
          <!-- <img src="~assets/img/searh.png" alt="" /> -->
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'HeaderBar',
  data() {
    return {
      // 是否显示searchPop
      isSearchPopShow: false,
      // 需要搜索的内容
      searchInput: "",
      // 搜索建议列表
      searchSuggestList: {},
      // 是否显示注册框
      isRegisteredShow: false,
    }
  },
  methods: {
    inputSearch(e){

    }
  },
}
</script>

<style>

</style>