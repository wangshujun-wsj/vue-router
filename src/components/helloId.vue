<template>
  <div class="hello">
    <div>
    	<h2>动态路由</h2>
    	<h3>{{this.$route.params.id}}</h3>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
	.h_search {
		width: 200px;
		height: 30px;
	}
h1, h2 {
  font-weight: normal;
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
