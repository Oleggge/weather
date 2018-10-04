<template>
	<div>
		<div class="button1" @click="getUserInfo">Список пользователей</div>
			<div class="wrapper">
		<div v-for="(user , index ) in users" :key='index'>
			<div>
			{{user.first_name}}
			</div>
			<img :src="user.avatar"/>
		</div>
			</div>
		<div class="auth-form">
			<div class="auth-form_register">
				Отправить запрос
				</div>
			<div class="auth-form_name">
				Имя
				<input  type="text" class="auth-form_input" v-model="name">
				</div>	
			<div class="auth-form_job">
				Работа 
				<input class="auth-form_input" v-model="job">
				</div>	
			<div>
				<button class="auth-form_button" @click="submit" >Отправить</button>
				</div>	
		</div>	
		<div class="blog">Блог</div>
		<div class="blog1" v-for="(list , index) in lists" :key='index'>
			{{list.age}}
			{{list.firstName}}
			{{list.lastName}}
		</div>	
	</div>	
</template>

<script>
export default {
	name: 'blog',
	data() {
		return {
			job: null,
			name: null,
			user: 'https://reqres.in/api/users?page=2',
			users: [],
			lists :[
				{ age : '4444444'},
				{ firstName :'Oleg'},
				{lastName :'Ololo'}
			],
			
		}
	},

	methods:{
		getUserInfo () {
			this.$http.get(this.user).then(response => {
				this.users = response.body.data
			},response => {

			});
		},

		submit () {
			const userData = {
				name: this.name,
				job: this.job
			}
			// console.log("3233232321312",userData)
			this.$http.post('https://reqres.in/api/users', userData ).then(response => {
				this.users = response.body
				console.log("233323122", this.users)
			},response => {
			});
		}	
	},
	  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Pacifico');
.blog {
	background: url(../assets/img.jpg) no-repeat;
	width: 500px;
	height: 500px;
	margin:0 auto;
	color:white;
	text-align:center;
	padding:50px 50px 50px 50px;
}
.blog1 {
font-family: 'Pacifico', cursive;
}
.button1 {
	background: rgba(9, 230, 126, 0.6);
  padding: 10px 10px 10px 50px;
  border-radius:3px;
  display: flex;
  position: relative;
	cursor: pointer;
	height:50px;
	width: 150px;
	margin:100px 500px;
	font-family: 'Pacifico', cursive;
}
.wrapper {
	display: flex;
}
.auth-form {
	border: 5px solid #e3d1c7;
	border-radius: 8px;
  padding: 41px 50px 50px;
  width: 430px;
  margin: 0 auto;
	margin-bottom: 100px;
	font-family: 'Pacifico', cursive;
}
.auth-form_register {
	text-align: center;
}
.auth-form_input {
width: 150px;
height: 20px;
font-size: 20px;
}
.auth-form_button {
	font-family: 'Pacifico', cursive;
}


</style>
