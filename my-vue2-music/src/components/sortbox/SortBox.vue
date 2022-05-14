<template>
  <div class="SortBoxContainer">
    
  </div>
</template>

<script>
export default {
  name:'SortBox'
}
</script>

<style scoped>
.SortBox {
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  cursor: pointer;
  transform: scale(0.9);
}

.SortBox i {
  font-size: 12px;
}

.tips {
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 20px 0;
  color: rgb(145, 145, 145);
}

.sortList {
  display: flex;
  flex-wrap: wrap;
}

.sortItme {
  font-size: 12px;
  width: 25%;
  text-align: center;
  color: rgb(85, 85, 85);
  padding: 5px 0;
  margin: 5px 0;
  cursor: pointer;
  border-radius: 30px;
  transform: scale(0.9);
}

.currentItem {
  color: #eb4f4f;
  background-color: #fcebeb;
}
</style>