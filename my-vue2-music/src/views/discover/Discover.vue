<template>
  <div class="discoverContainer">
    <nav-bar @clickBarItem="clickBarItem" :navBarItem="navBarData"></nav-bar>
    <router-view class="discover"></router-view>
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";
export default {
  name: "Discover",
  components: { NavBar },
  data() {
    return {
      navBarData: [
        {
          name: "精品歌单",
          path: "/index/discover/musiclist",
        },
        {
          name: "歌手",
          path: "/index/discover/singer",
        }, 
        {
          name: "排行榜",
          path: "/index/discover/rangking",
        }
      ],
    };
  },
  methods: {
    // 接收子组件navbar传过来的点击事件，实现跳转到对应的路由组件
    clickBarItem(path){
      console.log(path)
      this.$router.push(path)
    }
  },
};
</script>

<style scoped>
/* .discoverContainer {
  overflow: hidden;
  padding: 0 !important;
} */

.discover {
  box-sizing: border-box;
  margin: auto;
  overflow-y: scroll;
  height: calc(80vh);
  padding: 0 15px;
}
</style>