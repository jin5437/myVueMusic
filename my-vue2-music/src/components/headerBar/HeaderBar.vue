<template>
  <div class="headerBar">
    <div class="left">
      <img src="../../assets/img/logo.png" alt="" />
    </div>
    <div class="center">
      <div class="search">
        <el-popover
          placement="bottom"
          width="300"
          v-model="isSearchPopShow"
          popper-class="searchPop"
          trigger="focus"
        >
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            size="mini"
            slot="reference"
            @input="inputSearch"
            @keyup.enter.native="onSubmit"
            v-model="searchInput"
          >
          </el-input>
        </el-popover>
      </div>
    </div>
    <!-- <div class="right">
      <div class="avatar">
        <img src="../../assets/img/test.jpg" alt="" />
      </div>  
    </div> -->
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
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
    };
  },
  methods: {
    inputSearch(e) {},
  },
};
</script>

<style scoped>
@import "./HeaderBar-element.css";
.headerBar {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
  height: 50px;
  position: relative;
  z-index: 30000;
}
.left .center{
  display: flex;
  align-items: center;
  justify-content: center;
}
.left {
  width: 110px;
  margin: 0 50px 0 10px;
}

.left img {
  width: 100%;
}

/* .center {
  display: flex;
  align-items: center;
} */

.buttons {
  color: rgb(235, 235, 235);
  /* display: flex; */
  height: 22px;
}

.buttons i {
  background-color: #e13e3e;
  font-size: 12px;
  transform: scale(0.8);
  padding: 5px;
  height: 22px;
  width: 22px;
  border-radius: 50%;
  margin: 0 3px;
}

/* .right {
  display: flex;
  position: absolute;
  right: 50px;
  top: 0;
  line-height: 50px;
} */

.user {
  display: flex;
  align-items: center;
}

/* .avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 7px;
  cursor: pointer;
  text-align: center;
}

.avatar img {
  width: 100%;
  display: block;
} */

.userName {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
  width: 100px;
}

.loginButton {
  width: 100%;
  text-align: center;
}

.loginButton .el-button {
  width: 200px;
}

.el-form /deep/ .el-form-item__label {
  font-size: 13px !important;
}

.hotSearchTitle {
  font-size: 13px;
  margin: 10px 0 5px 20px;
}

.hotSearchItem {
  display: flex;
  align-items: center;
  padding: 6.5px 15px;
  cursor: pointer;
}

.hotSearchItem:hover {
  background-color: #f2f2f2;
}

.hotSearchIndex {
  margin-right: 15px;
  color: #aaa;
}

.topThree {
  color: #e13e3e;
}

.hotSearchWord {
  font-size: 12px;
  color: rgb(51, 51, 51);
}

.hotSearchWordTopThree {
  font-weight: 600;
  color: black;
}

.hotSearchContent {
  font-size: 12px;
  transform: scale(0.9) translateX(-5%);
}

.searchSuggest {
  font-size: 12px;
}

.searchSuggestItemTitle {
  background-color: #f5f5f7;
  padding: 4px 8px;
}

.searchSuggestItemTitle i {
  font-size: 15px;
}

.searchSuggestItem {
  cursor: pointer;
}

.suggestItemDetail {
  padding: 4px 27px;
  font-size: 12px;
}

.suggestItemDetail:hover {
  background-color: #f2f2f2;
}
</style>