<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
   			<span >留言列表</span>
   			<span style="float:right">首页>留言中心</span>
  		</div>
		<div class="message-content">
			<el-button type="primary"  @click="handleAdd()">添加</el-button>
			<el-table
			:data="items"
			border
			style="width: 100%"
			@selection-change="handleSelectionChange">
				<el-table-column
				  type="selection"
				  width="50">
				</el-table-column>
				<el-table-column
				  label="日期"
				  width="150">
				  <template scope="scope">{{ scope.row.date }}</template>
				</el-table-column>
				<el-table-column
				  prop="name"
				  label="姓名"
				  width="120">
				</el-table-column>
				<el-table-column
				  prop="email"
				  label="邮箱"
				  width="140">
				</el-table-column>
				<el-table-column
				  prop="qq"
				  label="QQ"
				  width="100">
				</el-table-column>
				<el-table-column
				  prop="address"
				  label="地址"
				  show-overflow-tooltip>
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
			<page class="page-center clearfix" :total="total" :page-size="pageSize" :page-sizes="[10,20,40,100]"  @size-change="sizeChange"  @page-change="pageChange"></page>
			
			
		</div>
		<mydialog :dialog-visible="showFlag" :dialog-item="item" :dialog-action="action" @dialog-close="dialogClose"></mydialog>

	</el-card>
</template>

<script>
import message from "./message-datas";
import mydialog from "./message-dialog";
import page from "../Tools/pagination";
	
export default{
	data:function(){
		return {
			items:[],
			selectItems:[],
			total:0,
			pageSize:10,
			showFlag:false,
			item:{},
			action:""
		}
	},
	components:{
		page,
		mydialog
	},
	methods:{
		handleAdd:function(){
			this.showFlag=true;
			this.action="add";
		},
		handleEdit:function(index, row){
			this.item=row;
			this.showFlag=true;
			this.action="edit";
		},
		handleDelete:function(index, row){
			message.deleted(row.id);
			this.pageInit(message.pageIndex,message.pageNum);
		},
		handleSelectionChange:function(selectItems){
			this.selectItems=selectItems;
			
		},
		pageChange:function(val){
			this.items=message.getPageDatas(val,message.pageNum);
			this.total=message.total;
		},
		sizeChange:function(val){
			this.items=message.getPageDatas(message.pageIndex,val);
			this.total=message.total;
			this.pageSize=val;
		},
		pageInit:function(pageIndex=1,pageNum=10){
			this.items=message.getPageDatas(pageIndex,pageNum);
			this.total=message.total;
		},
		dialogClose:function(saveflag){
			this.showFlag=false;
			//saveflag 
			if(saveflag==true){
				this.pageInit(message.pageIndex,message.pageNum);
			}
			
		}
	},
	created:function(){
		if(!sessionStorage["message"]){
			var datas=[],obj;
			for(var i=0,ii=35;i<ii;i++){
				obj={};
				obj.id=i+1;
				obj.qq="10000"+i;
				obj.email="10000"+i+"@qq.com";
				obj.address="深圳南山区天朝公寓10"+i;
				obj.name="路人_"+(i+1);
				obj.desc="";
				obj.date=(new Date).toLocaleDateString();
				datas.push(obj);
			}
			
			sessionStorage["message"]=JSON.stringify(datas);
		}
	},
	mounted:function(){
		this.pageInit();
	}
}

</script>

<style>
.page-center{margin: auto;text-align: center;}
</style>