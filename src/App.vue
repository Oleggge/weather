<template>
  <div id="app">
    <Layout />
    <router-view/>
  </div>
</template>

<script>
	import Layout from '@/components/Layout'

	export default {
  name: 'app',
  components: {
    Layout,
    
  }
}
</script>

<style>
* {
	padding: 0 ;
	margin: 0 ;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

	 
}

</style>
