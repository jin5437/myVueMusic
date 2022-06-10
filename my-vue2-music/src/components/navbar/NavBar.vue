<template>
    <div class="navBar">
      <div 
        class="barItem"
        :class="index == activeNum ? 'active' : ''"
        v-for="(item,index) in navBarItem"
        :key="index"
        @click="clickBarItem(item.path,index)"
      >
        {{item.name}}
      </div>
    </div>
</template>

<script>
export default {
  name:'NavBar',
  data() {
    return {
      activeNum:0,
    }
  },
  props:{
    // 这里为什么写成对象的形式，内容是什么？，为什么这样写？
    // props验证：类型是数组，默认是空数组
    navBarItem: {
      type:Array,
      default(){
        return []
      }
    }
  },
  created() {
    // console.log(this.$route.path)
    // 根据地址判断activNum的值，确定当前是哪个组件
    this.navBarItem.forEach((item, index) => {
      // console.log(item)
      // decodeURI()函数对 encodeURI() 函数编码过的 URI 解码
      if(decodeURI(this.$route.path).search(item.path) !== -1){
        this.activeNum = index
      }
    });
  },
  methods: {
    clickBarItem(path,index){
      console.log(this.activeNum)
      // console.log(path)
      if(this.activeNum == index){
        return
      }
      this.activeNum = index
      // 将数据发送给父组件Discover
      this.$emit("clickBarItem",path)
    }
  },
    
  
}
</script>

<style scoped>
/* .navBarContainer {
  height: 60px;
  width: 100%;
  position: relative;
} */

.navBar {
  height: 60px;
  width: 100%;
  display: flex;
  position: relative;
  left: 0px;
  top: 0;
  background-color: #fff;
  z-index: 100;
  width: 100%;
  color: rgb(49, 49, 49);
  align-items: center;
  box-sizing: border-box;
  padding: 10px 0 20px 20px;
}

.barItem {
  font-size: 16px;
  margin: 0 10px;
  text-align: center;
  cursor: pointer;
}

.active {
  font-size: 18px;
  color: black;
  font-weight: 600;
  padding-bottom: 5px;
  border-bottom: 3px solid #ec4141;
  transform: translateY(4px);
}  
</style>