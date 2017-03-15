<template>
	<el-card class="box-card">
	  <div slot="header" class="clearfix">
	    <span>{{typeStr}}</span>
	    <span style="float: right;" >首页>新闻中心</span>
	  </div>
	  <article class="text item news-content">
	  	<h3>{{data.title}}</h3>
	  	<section>
	  		<p>{{data.content}}</p>
	  		<p><img :src="data.src" /></p>
	  	</section>
	  </article>
	</el-card>
</template>
<style>
	.news-content{margin:0 auto;text-align: center;line-height: 28px;}
</style>
<script>
import news from "./news-datas.js";

export default{
	data:function(){
		return {
			data:{},
			typeStr:"1"
		}
	},
	beforeRouteEnter:function(to,from,next){
		var obj=news.getOne(to.params.id);
		next(function(vm){
			vm.$data.data=obj;
			vm.$data.typeStr=obj.type==1?"公司新闻":"行业新闻";
		});
	},
	mounted:function(){
		
	}
}
</script>