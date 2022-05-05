<template>
  <div class="headerBar">
    <div class="left">
      <img src="../../assets/img/logo.png" alt="" />
    </div>
    <div class="center">
      <div class="search">
        <el-popover placement="bottom" width="300" v-model="isSearchPopShow" popper-class="searchPop" trigger="focus">
          <el-input placeholder="请输入内容" prefix-icon="el-icon-search" size="mini" slot="reference" @input="inputSearch" @keyup.enter.native="onSubmit" v-model="searchInput">
          </el-input>
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