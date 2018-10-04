<template>
<div>
    <h1>Посмотри</h1>
    <button @click="counter += 3">+3</button>
  <p>Кнопка выше была нажата {{ counter }} раз</p>
  
</div> 

</template>
<script>
export default {
  name: 'list',
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
h1 {
	color: aquamarine;
}
button{
	background-color: rgba(9, 230, 126, 0.6);
	width: 100px;
	height:50px;
	border-radius: 8px;
}

</style>


