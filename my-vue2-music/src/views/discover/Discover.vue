<template>
  <div>
    <nav-bar @click="clickBarItem" :navBarItem="navBarData"></nav-bar>
    <router-view></router-view>
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
          name: "歌单",
          path: "./discover/musiclist",
        },
        {
          name: "歌手",
          path: "./discover/singer",
        },
        {
          name: "排行榜",
          path: "./discover/rangking",
        }
      ],
    };
  },
  methods: {
    // 接收子组件navbar传过来的点击事件，为什么要接收呢？
    clickBarItem(path){
      
    }
  },
};
</script>

<style scoped>
.discoverContainer {
  overflow: hidden;
  padding: 0 !important;
}

.discover {
  /* max-width: 1000px; */
  margin: auto;
  overflow: scroll;
  height: calc(80vh - 157px);
  padding: 0 15px;
}
</style>