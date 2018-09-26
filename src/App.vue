<template>
  <div id="app">
    <router-view/>
    <img alt="Vue logo" src="./assets/batman.png">
    <HelloWorld msg="Привет"/>
    <List msg="AAAASSSSSSAA" />
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import List from './components/List.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    List
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
