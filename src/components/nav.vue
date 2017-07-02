<template>
  <div class="nav" >
  	<ul>
  		<li v-text="msg"></li>
  		<li><input type="text" v-model="banner" /><button @click.stop="btn(1,'hello')">跳转</button></li>
  	</ul>
  </div>
</template>

<script type="text/ecmascript-6">
	export default {
		name: 'nav',
		data() {
			return {
				msg:"路由传参",
				banner:'Welcome to Your Vue.js App'
			}
		},
		methods: {
			btn(id,val) {
				this.$router.push({
					path:'/nav/nav1',
					query:{id:id,val:val}
				})
			}
		}
	}
</script>

<style >
</style>