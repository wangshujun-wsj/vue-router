<template>
  <div class="nav1" >
  	<h2>路由传参</h2>
  	id:	{{this.$route.query.id}}<br />
  	
  	val:	{{this.$route.query.val}}
  </div>
</template>

<script type="text/ecmascript-6">
	export default {
		name: 'nav1',
		data() {
			return {
				
			}
		},
		methods: {
		}
	}
</script>

<style >
</style>