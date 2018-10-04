<template>
  <div class="">
    <input type="password" class="password" v-model="password" v-if="!showPass">
    <input type="text" class="password" v-model="password" v-if="showPass">
  <button @click="showPass=!showPass">
    <span v-if="!showPass">Показывать пароль</span>
    <span v-if="showPass">Не показывать пароль</span>
  </button>
    
  </div>
</template>

<script>

export default {
  name: 'Entrance',
  props: {
    msg: String
  },
  data() {
    return {
      showPass:false,
      password:null
      }

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	button {
  color:white;
  background-color: black
}

.password {
  color:blueviolet;
}

h3 {
  margin: 40px 0 0;
  color:rgb(180, 243, 32)
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
