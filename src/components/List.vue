<template>
<div>
    <h1>Посмотри</h1>
    <button @click="counter += 3">+3</button>
  <p>Кнопка выше была нажата {{ counter }} раз</p>
  
</div> 

</template>
<script>
export default {
  name: 'List',
  props: {
    msg: String
  },
  data() {
      return {
          counter: 0
          
      }

  }
}  

</script>
<style scoped>
h1{
color: aquamarine;

}

</style>


