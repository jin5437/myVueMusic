<template>
  <div class="singerContainer">
    <div class="singer">
      <div class="selectors">
        <div class="selectorItem">
          <div class="title">语种：</div>
          <second-nav-bar></second-nav-bar>
        </div>
      </div>
      <div class="selectors">
        <div class="selectorItem">
          <div class="title">分类：</div>
          <second-nav-bar></second-nav-bar>
        </div>
      </div>
      <div class="selectors">
        <div class="selectorItem">
          <div class="title">筛选：</div>
          <second-nav-bar></second-nav-bar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SecondNavBar from "../../../components/secondnavbar/SecondNavBar.vue";
export default {
  name: "Singer",
  components: {
    SecondNavBar,
  },
};
</script>

<style scoped>
.singerContainer {
  display: flex;
  justify-content: center;
}

.singer {
  max-width: 1000px;
  padding: 0 10px;
}

.selectorItem {
  display: flex;
}

.title {
  font-size: 16px;
  width: 50px;
  line-height: 33px;
}

.secondNavBar {
  width: calc(100% - 60px);
}

.page {
  width: 100%;
  text-align: center;
  padding-bottom: 20px;
}

.listCardContainer {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>