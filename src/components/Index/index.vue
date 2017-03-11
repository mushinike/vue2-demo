<template>
	<section>
		<carousel></carousel>
		<about></about>
		<div class="clearfix" style="height:20px;"></div>
		
		<el-card class="box-card">
			<el-row class="card-title">
			  <el-col :span="18">产品展示</el-col>
			  <el-col :span="6">新闻中心</el-col>
			</el-row>
		  	<el-row>
			  <el-col :span="18" class="borderRight"><product></about></el-col>
			  <el-col :span="6"><news></news></el-col>
			</el-row>
		</el-card>
	</section>
</template>
<style>
	.borderRight{border-right:1px solid #999;}
	.card-title{height:40px;line-height: 30px;font-size: 15px;font-weight: bold;padding-bottom:10px;}
	footer{margin:0 auto;text-align: center;height: 30px;line-height: 30px;}
</style>

<script>
import about from "./index-about.vue";
import product from "./index-product.vue";
import news from "./index-news.vue";
import carousel from "./index-carousel.vue";

export default{
	data:function (){
		return {
			
		}
	},
	methods:{
		handleClick:function(tab,e){

		}
	},
	components:{
		carousel,
		about,
		product,
		news
	}
}
	
</script>