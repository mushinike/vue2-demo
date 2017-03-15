<template>
<el-card class="box-card">
	<el-row>
	  <el-col :span="5"><left-nav></left-nav></el-col>
	  <el-col :span="19"><router-view>123456</router-view></el-col>
	</el-row>
</el-card>
</template>

<script>
import leftNav from "./index-left-nav";
export default{
	data:function(){
		return {
			
		}
	},
	components:{
		leftNav
	},
	created:function(){
		if(sessionStorage["loginName"]){
			this.$router.push({path:"/admin/index/content"});
		}else{
			this.$router.push({path:"/login"});
		}
	}
}
</script>

<style>
	.admin-right-session{margin-left:20px;}
</style>