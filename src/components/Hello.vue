<template>
	<div class="hello">
		<div>
			<h2>Ecosystem</h2>
			<ul>
				<li>
					<router-link to="/hello/1">Go to hello1</router-link>
				</li>
				<li>
					<router-link to="/hello/2">Go to hello2</router-link>
				</li>
				<li>
					<router-link to="/hello/3">Go to hello3</router-link>
				</li>
				<li>
					<router-link to="/hello/4">Go to hello4</router-link>
				</li>
			</ul>
			<router-view></router-view>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.active {
		color: rgb(240, 20, 20)
	}
	
	.h_search {
		width: 200px;
		height: 30px;
	}
	
	h1,
	h2 {
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