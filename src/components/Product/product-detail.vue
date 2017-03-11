<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
   			<span >产品明细</span>
   			<span style="float:right">首页>产品展示</span>
  		</div>
		<div class="product-detail-content">
			<div >
				<div class="product-detail-image"><img :src="item.src" /></div>
				<div class="product-detail-title">
					<h3>{{item.title}}</h3>
					<br />
					<p>{{item.date}}</p>
				</div>
			</div>
			
			<div class="product-detail-body clearfix">
				<el-tabs active-name="second" type="card">
			    	<el-tab-pane label="产品内容" name="first">{{item.content}}</el-tab-pane>
			    	<el-tab-pane label="图片展示" name="second">
			    		<div v-for="img in item.images"><img  :src="img" /></div>
			    		
			    	</el-tab-pane>
				</el-tabs>
			</div>
		</div>
	</el-card>
</template>

<style>
.product-detail-image{float: left;display: inline;margin-left:100px;margin-bottom: 50px;margin-right: 50px;}
.product-detail-title{float: left;}
.product-detail-body{margin-bottom: 50px;}
</style>

<script>
import datas from "./product-datas";

export default{
	data:function(){
		return {item:{}}
	},
	beforeRouteEnter:function(to,from,next){
		var item=datas.getOneData(to.params.id);
		next(function(vm){
			vm.item=item;
		});
	},
	mounted:function(){
		
	}
}
	
</script>