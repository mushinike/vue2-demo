<template>
	<div>
		<el-card class="box-card">
			<div slot="header" class="clearfix index-about-title">公司简介</div>
			
			<div class="text item">{{aboutContent}}</div>
		</el-card>
	</div>
</template>

<style>
	.index-about-title{font-size: 15px;font-weight: bold;}
	.el-card__header{padding:10px;}
</style>

<script>
import about from "../About/about-content.js";

export default{
	data:function (){
		return {
			//message:"dddd"
			message:""
			}
	},
	created:function(){
		console.log(564)
	},
	mounted:function(){
		if(this.$root.about){
			this.message=this.$root.about;
		}
		else{
			this.$root.about=this.message=about.getAboutData();
		}
	},
	computed:{
		aboutContent:function(){
			if(this.message.length>350){
				return this.message.slice(0,350)+"...";
			}

			return this.message;
		}
	}
}

</script>
