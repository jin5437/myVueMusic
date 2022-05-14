<template>
  <div class="listCard">
    <div
      class="listCardItem"
      
    >
      <div class="image">
        <img
          
          alt="歌单封面"
        />
      </div>
      <div class="title"></div>
    </div>
  </div>
</template>

<script>
export default {
  name:'ListCard',
}
</script>

<style scoped>
.listCard {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
}

.listCardItem {
  width: 18.4%;
  margin: 0 2% 20px 0;
  overflow: hidden;
  cursor: pointer;
}

.listCardItem:nth-child(5n) {
  margin-right: 0;
}

.image {
  width: 100%;
  padding-bottom: 100%;
  height: 0;
  position: relative;
}

.image::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url("../../assets/img/imgLoading.png") no-repeat center;
  background-size: contain;
  border-radius: 10px;
  z-index: -1;
}

.image img {
  width: 100%;
  border-radius: 10px;
}

.title {
  margin-top: 8px;
  padding: 0 2px;
  font-size: 12px;
  color: black;
  line-height: 17px;
  /* 两行溢出 */
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>