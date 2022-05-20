<template>
  <div class="lyrics">
    <!-- 占位:歌手信息与歌词之间，设置空白占位 -->
    <div class="placeholder"></div>
    <!-- 展示歌词 -->
    <div class="lyricsItem">

    </div>
    <!-- 占位：歌词结束之后，设置空白占位 -->
    <div class="placeholder"></div>
  </div>
</template>

<script>
export default {
  name:'LyricsScroll',
  data() {
    return {
      
    }
  },
  methods: {
    
  },
}
</script>

<style scoped>
.lyrics{
  width: 100%;
  height: 275px;
  font-size: 12px;
  text-align: center;
  overflow-y: scroll;
}
/* 
设置滚动条整体部分的样式,仅仅在支持WebKit的浏览器 
滚动条的伪元素固定写法，让滚动条不显示出来，同时有滚动效果
*/
.lyrics::-webkit-scrollbar{
  display: none;
}
.lyricsItem{
  font-size: 12px;
  margin: 25px 20px;
  transition: all 0.5s;
}
.currentLyrics{
  font-size: 14px;
  /* font-weight 属性设置文本的粗细 */
  font-weight: 600;
  color: black;
}
.placeholder{
  width: 100%;
  height: 40%;
}
</style>