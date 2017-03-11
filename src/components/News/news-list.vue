<template>
	<el-card class="box-card">
	  	<el-row>
			  <el-col :span="3" ><list-nav></list-nav></el-col>
			  <el-col :span="19" offset="2">
			  	<el-card class="box-card">
			  		<ul>
					  <li v-for="(value,key) in items" class="text item news-lists-item">
					  	<span>{{value.date}}</span>
					  
					  	<router-link :to="routerUrl(value.id)">{{value.title}}</router-link>
					  </li>
					</ul>
					<page :total="total" :page-size="pageSize" :page-sizes="[20,40,60,100]"  @size-change="sizeChange"  @size-change="sizeChange"  @page-change="pageChange"></page>
			  	</el-card>
			  </el-col>
		  
		</el-row>
	</el-card>
</template>
<style>

.news-lists-item{line-height: 30px;border-bottom: 1px dashed #999;list-style-position:inside;}
.news-lists-item span{float: right;}
</style>
<script>
import news from "./news-datas.js";
import nav from "./news-list-nav.vue";
import page from "../Tools/pagination";

export default{
	data:function(){
		return {
			total:0,
			newsType:1,
			pageSize:20,
			items:[]
		}
	},
	components:{
		page,
		"list-nav":nav
	},
	methods:{
		routerUrl:function(id){
			var obj={};
				obj.path="/news/detail/"
				obj.name="detail";
				obj.params={id:id,type:this.newsType};
				return obj;
		},
		pageChange:function(val){
			this.items=news.getPageDatas(this.newsType,val,news.pageNum);
			this.total=news.total;
		},
		sizeChange:function(val){
			this.items=news.getPageDatas(this.newsType,news.pageIndex,val);
			this.total=news.total;
			this.pageSize=val;
		},
		pageInit:function(){
			var params=this.$route.params;
			this.newsType=params.type;
			this.items=news.getPageDatas(this.newsType,1,20);
			this.total=news.total;
		}
	},
	mounted:function(){
		this.pageInit();
	},
	watch:{
		$route:function(){
			this.pageInit();
		}
	}
}
</script>