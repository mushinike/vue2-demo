<template>
	<el-card class="box-card admin-right-session">
		<div slot="header" class="clearfix">
			<span>管理中心</span>
			<span class="floatRight"></el-button>
		</div>
		<div class="admin-right-session-content">{{message}}</div>
	</el-card>
</template>

<script>
export default{
	data:function(){
		return {
			message:"欢迎光临后台管理系统"
		}
	}
}
</script>

<style>
</style>