<template>
	<el-menu :default-active="newsActiveIndex" class="news-list-nav" router=true >
	  <el-menu-item index="1" route="/news/list/1">公司新闻</el-menu-item>
	  <el-menu-item index="2" route="/news/list/2">行业新闻</el-menu-item>
	</el-menu>
</template>
<style>
	.news-list-nav span{display: inline;}
</style>
<script>
export default{
	data:function(){
		return {
			newsActiveIndex:"1"
		}
	},
	mounted:function(){
		
		var params=this.$route.params;
		this.newsActiveIndex=params.type;
		
	},
	watch:{
		$route:function(){
			var params=this.$route.params;
			this.newsActiveIndex=params.type;
		}
	}
}
</script>
