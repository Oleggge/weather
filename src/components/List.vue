<template>
<div >
    <h1>{{counter}}</h1>
		
    <button @click="up">Увеличить</button>
		<button @click="down">Уменьшить</button>
  <div>
		<input type="text" v-model="firstName">
		<h1>{{firstName}}</h1>
	</div>
</div> 

</template>
<script>
export default {
	props:{
		firstName:null
	} ,
	name: 'list' ,
  
  data() {
    return {
      counter: 0
			
		}
		
		
	},
	methods: {
		up() {
			this.counter++
		},
		down() {
			if (this.counter === 0) {
				this.counter = 0
			} else {
				this.counter--
			}
		}
	} 
}  

</script>

<style scoped>
h1 {
	color: aquamarine;
}

button {
	background-color: rgba(9, 230, 126, 0.6);
	width: 100px;
	height:50px;
	border-radius: 8px;
}
.block {
	border: 2px solid black;
	padding: 10px;
}
</style>


