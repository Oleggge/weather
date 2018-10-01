<template>
    <div class='weather'>
			<h1>{{Math.floor(temp - 273.15) }}</h1>
			<h2 :class="{active: font === 'Times'}"  @click="changeFont">{{city}}</h2>
			<input class="input" v-model="currentCity"/>
			<!-- <div class="button" @click="getWeather">
				Отправить		
			</div> -->
			<button @click="getWeather" >Отправить</button>
		</div>
</template>

<script>
export default {
	name: 'home',
	methods: {
	getWeather() {
		return this.$http.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.currentCity}&appid=15bdf9aeed4c92e42b9b118a03740b4e`)
		.then((response) => {
			this.city = response.body.name
			this.temp = response.body.main.temp
		})
	},

	changeFont () {
		if (this.font === '') {
			this.font = 'Times'
		} else {
			this.font = ''
		}
	}
},
	data() {
		return {
		city: '',
		temp: '',
		currentCity: null,
		font: 'Times'
		}
	},
	mounted() {

		this.$getLocation()
		.then(coordinates => {
			console.log(coordinates)
			return coordinates
			}).then(location => {
			const {lat ,lng }=location 
			return this.$http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=15bdf9aeed4c92e42b9b118a03740b4e`)
			} )
		.then((response) => {
			console.log('wefsdg', response)
			this.city = response.body.name
			this.temp = response.body.main.temp
		})

		
	}
}
 
</script>
<style>
.active{
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.button {
	margin-top: 10px;
	text-align: center;
	border-radius: 3px;
	opacity: 0.7;
	width: 100px;
	padding: 5px;
	color:white;
	background-color: blue;
}

.input {
	font-size: 15px;
	padding: 8px;
	width: 150px;
	
}

/* .weather {
	width: 100%;
	max-width: 200px;
	margin: 0 auto;
} */

</style>
