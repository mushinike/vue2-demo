<template>
	
	<el-card class="box-card">
		<div slot="header" class="clearfix">
   			<span >关于我们</span>
   			<span style="float:right">首页>关于我们</span>
  		</div>
		<div class="about-content">
			<p>{{message}}</p>
			<p><img :src="image" /></p>
		
		</div>
	</el-card>
</template>

<style>
	.about-content{overflow: hidden;}
</style>

<script>
import about from "./about-content.js";

export default{
	data:function(){
		return {
			message:"",
			image:""
		}
	},
	mounted:function(){
		if(this.$root.about){
			this.message=this.$root.about;
		}else{
			this.$root.about=this.message=about.getAboutData();
		}
		
		this.image=require("../../images/about.jpg");
	}
}
</script>