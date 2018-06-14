<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    
    <tdItem></tdItem>
  </div>
</template>

<script>
import tdItem from './components/todo-item.vue';

export default {
  components: {
    tdItem
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
