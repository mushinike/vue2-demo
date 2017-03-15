<template>
	<el-card class="box-card admin-right-session">
		<div slot="header" class="clearfix">
			<span>用户管理</span>
			<span class="floatRight">管理中心>用户列表</el-button>
		</div>
		<div class="admin-right-session-content">
			<el-button type="primary"  @click="handleDelete()">选中删除</el-button>
			<el-button type="primary"  @click="handleOut()">用户注销</el-button>
			<br />
			<el-table :data="items" border
			style="width: 100%"
			@selection-change="handleSelectionChange">
				<el-table-column
				  type="selection"
				  width="50">
				</el-table-column>
				<el-table-column
				  prop="id"
				  label="ID"
				  width="100">
				</el-table-column>
				<el-table-column
				  prop="name"
				  label="姓名"
				  width="150">
				</el-table-column>
				
				<el-table-column label="日期" >
				  <template scope="scope">{{ scope.row.date }}</template>
				</el-table-column>
				
				<el-table-column label="操作" width="150">
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
			<page class="page-center clearfix" :total="total" :page-size="pageSize" :page-sizes="[10,20,40,100]"  @page-change="pageChange"></page>
			
		</div>
	</el-card>
</template>

<script>
import page from "../../Tools/pagination";
import mydata from "./user-datas";


export default{
	data:function(){
		return {
			items:[],
			selectItems:[],
			total:0,
			pageSize:10,
			item:{},
		}
	},
	components:{
		page
	},
	methods:{
		handleOut:function(){
			sessionStorage["loginName"]="";
			this.$router.push({"path":"/"});
		},
		handleEdit:function(index, row){
			this.$router.push({"path":"/admin/login/users/edit/",name:"users-edit",params:{name:row.name}});
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
		handleSelectionChange:function(selectItems){
			this.selectItems=selectItems;
			
		},
		pageChange:function(val){
			this.items=mydata.getPageDatas(val,mydata.pageNum);
			this.total=mydata.total;
		},
		sizeChange:function(val){
			this.items=mydata.getPageDatas(mydata.pageIndex,val);
			this.total=mydata.total;
			this.pageSize=val;
		},
		pageInit:function(pageIndex=1,pageNum=10){
			this.items=mydata.getPageDatas(pageIndex,pageNum);
			this.total=mydata.total;
		}
	},
	mounted:function(){
		this.pageInit();
	}
}
</script>

<style>
</style>