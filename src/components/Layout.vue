<template>
	<div class="header">
		<div class='logo'></div>
		<div class='logo1'></div>
		<router-link class='link' to='/'>Домой</router-link>
		<router-link class='link' to='/entrance'>Вход</router-link>
		<router-link class='link' to='/list'>Список</router-link>
		<router-link class='link' to='/blog'>Блог</router-link>
	</div>
</template>

<script>
export default {
    name: 'layout'
}


</script>

<style lang="scss" scoped>

.header {
  background: rgba(9, 230, 126, 0.6);
  padding: 10px 10px 10px 50px;
  border-radius:3px;
  display: flex;
  position: fixed;
	top: 0 ;
	width: 100%;
}

.link {
	color:#FFF;
	margin-right:15px;
	background: red;
	padding:5px;
	width: 70px;
	text-align: center;
	border-radius: 3px;
	text-decoration: none; 
	&:hover{
		color: black;
	}     
}

.logo {
	position: absolute;
	background-image:url('../assets/logo.svg');
	background-position: center;
	background-repeat: no-repeat;
	background-size:contain ;
	width: 30px;
	height: 30px;
	top: 10px;
	left: 10px;
}

.logo1 {
	position: absolute;
	top: 10px;
	right: 10px;
	background:url('../assets/logo.svg') center no-repeat/contain;
	width: 30px;
	height: 30px;
}

</style>
