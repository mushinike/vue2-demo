<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
   			<span >产品列表</span>
   			<span style="float:right">首页>产品展示</span>
  		</div>
		<div class="product-content">
			<ul class="clearfix product-content-ul">
				<li v-for="(item,key,index) in items" :class="{marginRight0:(key+1)%4==0}">
					<el-card :body-style="{ padding: '5px' }">
						<img src="../../images/hamburger.png"  class="image">
						<div >
							
							<span>{{item.title}}</span>
							<div class="bottom clearfix">
							  <span class="time">{{item.date}}</span>
							  <router-link :to="{path:'/product/detail/',name:'product-detail',params:{id:item.id}}">查看详情</router-link>
							</div>
						</div>
				    </el-card>
				</li>
			</ul>
			<page class="page-center" :total="total" :page-size="pageSize" :page-sizes="[8,16,24,50]"  @size-change="sizeChange"  @page-change="pageChange"></page>
		</div>
	</el-card>
</template>
<style>
.product-content{overflow: hidden;}
.product-content-ul li{float:left;margin-right:36px;margin-bottom: 30px;}
.product-content-ul li img{vertical-align: top;width:220px}
.product-content-ul li.marginRight0{margin-right: 0;}
.page-center{margin: 0 auto;text-align: center;}
	
</style>

<script>
import datas from "./product-datas";
import page from "../Tools/pagination";

export default{
	data:function (){
		return {
			items:[],
			total:0,
			pageSize:8
		}
		
	},
	beforeRouteEnter:function(to,from,next){
		var items=datas.getPageDatas(1,8);
		
		next(function(vm){
			vm.items=items;
			vm.total=datas.total;
		});
		
	},
	methods:{
		pageChange:function(val){
			this.items=datas.getPageDatas(val,datas.pageNum);
			this.total=datas.total;
		},
		sizeChange:function(val){
			this.items=datas.getPageDatas(datas.pageIndex,val);
			this.total=datas.total;
			this.pageSize=val;
		},
		pageInit:function(){
			this.items=datas.getPageDatas(1,8);
			this.total=datas.total;
		}
	},
	mounted:function(){

		//this.pageInit();
	},
	components:{
		page
	},
}
	
</script>