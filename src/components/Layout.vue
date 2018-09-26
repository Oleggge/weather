<template>
    <div class="header">
<router-link class='link' to='/'>Домой</router-link>
<router-link class='link' to='/list'>Список</router-link>
<router-link class='link' to='/blog'>Блог</router-link>
    </div>
</template>

<script>
export default {
    name: 'layout'
}


</script>

<style>
.header{
  background: rgba(9, 230, 126, 0.6);
  padding:10px;
  border-radius:10px;
  

}
.link{
    color:#FFF;
    margin-right:15px;
    background: red;
    padding:5px;
    border-radius: 10px;
    text-decoration: none;
    
    
}


</style>
