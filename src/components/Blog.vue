<template>
	<div>
		<h1 class="blog">Блог</h1>
		<div v-for="(user , index ) in users" :key='index'>
			<div>
			{{user.first_name}}
			</div>
			<img :src="user.avatar"/>
		</div>
	</div>	
</template>

<script>
export default {
	name: 'blog',
	data() {
		return {
			user: 'https://reqres.in/api/users?page=2',
			users: []
		}
	},
	created() {
		this.getUserInfo()
	},
	methods:{
		getUserInfo () {
			this.$http.get(this.user).then(response => {
				this.users = response.body.data
			},response => {

			});
		}	
	},
	  
}
</script>

<style>
.blog{
	background: url(../assets/img.jpg) no-repeat;
	width: 500px;
	height: 500px;
	margin:0 auto;
	color:white;
	text-align:center;
	padding:50px 50px 50px 50px;
}
</style>
