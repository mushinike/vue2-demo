<template>
	<el-card class="box-card admin-right-session">
		<div slot="header" class="clearfix">
			<span>联系我们编辑</span>
			<span class="floatRight">管理中心>联系我们</el-button>
		</div>
		<div class="admin-right-session-content">
			<el-form :rules="rules" ref="ruleForm" label-width="100px" :model="formLabelAlign">
			  <el-form-item label="名称" prop="name">
			  	<el-input v-model="formLabelAlign.name" :disabled="true"></el-input>
			    <span></span>
			  </el-form-item>
			  <el-form-item label="内容" prop="content">
			    <el-input type="textarea" :rows="6" v-model="formLabelAlign.content"></el-textarea>
			  </el-form-item>
			  <el-form-item style="padding-top:15px;">
			    <el-button type="primary" @click="submitForm('ruleForm')">立即编辑</el-button>
			  </el-form-item>
			</el-form>
		</div>
	</el-card>
</template>

<script>
	
import data from "./contact-datas";

export default{
	data:function(){
		return {
			formLabelAlign:{
				name:"联系我们",
				content:""
			},
			rules:{
				content:[
					{ required: true, message: '请输入内容', trigger: 'blur' }
				]
			}
		}
	},
	beforeRouteEnter:function(to,from,next){
		var str=data.getOne();
			next(function(vm){
				if(str){
					vm.formLabelAlign.content=str;
				}
			});
	},
	methods: {
      submitForm(formName) {
      	var _this=this;
        _this.$refs[formName].validate((valid) => {
          if (valid) {
            data.edit(_this.formLabelAlign.content);
            _this.$alert('提示信息', '修改成功');
            return true;

          } else {
            return false;
          }
        });
      }
    }
	
}	
</script>

<style>
</style>