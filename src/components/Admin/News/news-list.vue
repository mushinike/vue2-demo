<template>
	<el-card class="box-card admin-right-session">
		<div slot="header" class="clearfix">
			<span>新闻列表</span>
			<span class="floatRight">管理中心>新闻中心</el-button>
		</div>
		<div class="admin-right-session-content">
			<el-button type="primary"  @click="handleDelete()">选中删除</el-button>
			<el-table :data="items" border
			style="width: 100%"
			@selection-change="handleSelectionChange">
				<el-table-column
				  type="selection"
				  width="45">
				</el-table-column>
				<el-table-column
				  prop="id"
				  label="ID"
				  width="60">
				</el-table-column>
				<el-table-column
				  prop="title"
				  label="姓名"
				  width="180">
				</el-table-column>
				<el-table-column
				  prop="content"
				  label="内容"
				  >
				</el-table-column>
				
				<el-table-column label="日期" width="130">
				  <template scope="scope">{{ scope.row.date }}</template>
				</el-table-column>
				
				<el-table-column label="操作" width="140">
					  <template scope="scope">
				        <el-button
				          size="small"
				          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
				        <el-button
				          size="small"
				          type="danger"
				          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				      </template>
				</el-table-column>
			</el-table>
			<br />
			<page :total="total" :page-size="pageSize" :page-sizes="[10,20,40,60]"  @size-change="sizeChange"  @size-change="sizeChange"  @page-change="pageChange"></page>
		</div>
			  	
	</el-card>
</template>

<script>
import page from "../../Tools/pagination";
import news from "../../News/news-datas.js";
export default{
	data:function(){
		return {
			items:[],
			selectItems:[],
			total:0,
			pageSize:10,
			newsType:0
		}
	},
	components:{
		page
	},
	methods:{
		handleEdit:function(index, row){
			this.$router.push({name:"news-edit",path:"/admin/news/edit",params:{id:row.id}});
		},
		handleDelete:function(index, row){
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	       }).then(() => {
	          if(row){
	          	mydata.deleted(row.name);
	          }
	          else if(this.selectItems.length>0)
	          {
	          	for(var i=0,ii=this.selectItems.length;i<ii;i++){
	          		mydata.deleted(this.selectItems[i].name);
	          	}
	          }
	          else{
	          	return true;
	          }
	          
	          this.pageInit(mydata.pageIndex,mydata.pageNum);
	        });
			
			/**/
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
			this.items=news.getPageDatas(this.newsType,1,10);
			this.total=news.total;
		},
		handleSelectionChange:function(selectItems){
			this.selectItems=selectItems;
			
		},
		handleDelete:function(index, row){
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	       }).then(() => {
	       		console.log(row.id)
	          if(row){
	          	news.deleted(row.id);
	          }
	          else if(this.selectItems.length>0)
	          {
	          	for(var i=0,ii=this.selectItems.length;i<ii;i++){
	          		news.deleted(this.selectItems[i].id);
	          	}
	          }
	          else{
	          	return true;
	          }
	          this.pageInit(news.pageIndex,news.pageNum);
	          
	          return true;
	       });
			
			/**/
		},
		pageInit:function(pageIndex=1,pageNum=10){
			this.items=news.getPageDatas(this.newsType,pageIndex,pageNum);
			this.total=news.total;
		}
	},
	beforeRouteEnter:function(to,from,next){
		var items=news.getPageDatas(0,1,10);
			next(function(vm){
				vm.items=items;
				vm.total=news.total;
				vm.newsType=0;
			})
	}
}
	
</script>

<style>
</style>