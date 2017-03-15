<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
   			<span >联系我们</span>
   			<span style="float:right">首页>联系我们</span>
  		</div>
		<div class="contact-content">
			<p v-html="message"></p>
		</div>
	</el-card>
</template>
<style>
	.contact-content{text-align: left;line-height: 28px;}
</style>
<script>
import data from "./Admin/Other/contact-datas";
export default{
	data:function (){
		return {message:""}
	},
	beforeRouteEnter:function(to,from,next){
		var str=data.getOne();
			next(function(vm){
				if(str){
					vm.message=str;
				}
			});
	}
}
	
</script>