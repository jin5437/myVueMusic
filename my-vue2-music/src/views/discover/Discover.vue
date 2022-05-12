<template>
  <div>
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '../../components/navbar/NavBar.vue'
export default {
  name:'Discover',
  components:[
    NavBar
  ]

}
</script>

<style>

</style>