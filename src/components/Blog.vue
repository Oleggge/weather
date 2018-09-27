<template>
    <div>
      <h1 class="blog">Блог</h1>
			<pre>
				{{this.hui}}
			</pre>
		<div class="block">
			BLOCK
		</div>
    </div>
		
</template>
<script>
export default {
		name: 'blog',
		data() {
			return {
				user: 'https://reqres.in/api/users?page=2',
			  hui: {}
			}
		},
		
		
		
		
		
		
	created() {
		this.getUserInfo()
	},

	methods:{
		getUserInfo () {
			this.$http.get(this.user).then(response => {
        this.hui = response.body
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
