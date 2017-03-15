<template>
	<el-card class="box-card admin-right-session">
		<div slot="header" class="clearfix">
			<span>新闻编辑</span>
			<span class="floatRight">管理中心>新闻中心</el-button>
		</div>
		<div class="admin-right-session-content">
			<el-form :rules="rules" ref="ruleForm" label-width="100px" :model="formLabelAlign">
			  <el-form-item label="标题" prop="title">
			    <el-input v-model="formLabelAlign.title" :disabled="true"></el-input>
			  </el-form-item>
			  <el-form-item label="新闻类型" prop="type" class="admin-news-select">
				  <el-select v-model="formLabelAlign.type" placeholder="选择新闻类型">
					  <el-option label="公司新闻" value="公司新闻"></el-option>
					  <el-option label="行业新闻" value="行业新闻"></el-option>
				  </el-select>	
			  </el-form-item>
			  
			  <el-form-item label="内容" prop="content">
			    <el-input type="textarea" :rows="6" v-model="formLabelAlign.content"></el-textarea>
			  </el-form-item>
			  <el-form-item label="时间" prop="date">
			    <el-input v-model="formLabelAlign.date" :disabled="true"></el-input>
			  </el-form-item>
			  <el-form-item style="padding-top:15px;">
			    <el-button type="primary" @click="submitForm('ruleForm')">立即修改</el-button>
			    <el-button @click="back()">返回列表</el-button>
			  </el-form-item>
			</el-form>
		</div>
	</el-card>
</template>

<script>
import news from "../../News/news-datas.js";
export default{
	data:function(){
		return {
			formLabelAlign:{
				id:0,
				title:"",
				content:"",
				type:"",
				date:""
			},
			rules:{
				title:[{ required: true, message: '请输入标题', trigger: 'blur' }],
				type:[{ required: true, message: '请选择新闻类型', trigger: 'blur' }],
				content:[{ required: true, message: '请输入内容', trigger: 'blur' }],
			}
		}
	},
	beforeRouteEnter:function(to,from,next){
		var data=news.getOne(to.params.id);
			next(function(vm){
				if(data){
					data.type=data.type==1?"公司新闻":"行业新闻";
					vm.formLabelAlign=data;
				}
			});
	},
	methods: {
      submitForm(formName) {
      	var _this=this;
        _this.$refs[formName].validate((valid) => {
          if (valid) {
          	_this.formLabelAlign.type=_this.formLabelAlign.type=="公司新闻"?"1":"2";
            news.edit(_this.formLabelAlign);
            _this.$alert('提示信息', '修改成功',{
            	callback:function(){
            		_this.$router.push({name:"news-list",path:"/admin/news/list"});
            	}
            });
            
            return true;

          } else {
            return false;
          }
        });
      },
      back:function(){
      	this.$router.push({name:"news-list",path:"/admin/news/list"});
      }
    }
}
</script>

<style>
	.admin-news-select.el-input__icon{-webkit-transform: translateX(50%);}
</style>