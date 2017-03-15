<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>用户注册中心</span>
			<span class="floatRight">首页>管理中心</el-button>
		</div>
		<div class="login-content">
			<el-form :rules="rules" ref="ruleForm" label-width="100px" :model="formLabelAlign">
			  <el-form-item label="用户名称" prop="name">
			    <el-input v-model="formLabelAlign.name"></el-input>
			  </el-form-item>
			  <el-form-item label="密码" prop="password">
			    <el-input type="password" v-model="formLabelAlign.password"></el-input>
			  </el-form-item>
			  <el-form-item label="确认密码" prop="password1">
			    <el-input type="password" v-model="formLabelAlign.password1"></el-input>
			  </el-form-item>
			  <el-form-item style="padding-top:15px;">
			    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
			    <el-button @click="resetForm('ruleForm')">重置</el-button>
			  </el-form-item>
			</el-form>
		</div>
	</el-card>
</template>

<script>
import data from "./user-datas";
	
export default{
	data:function(){
		var validatePass2 = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请再次输入密码'));
	        } else if (value !== this.formLabelAlign.password) {
	          callback(new Error('两次输入密码不一致!'));
	        } else {
	          callback();
	        }
	    };

		return {
			formLabelAlign:{
				id:0,
				name:"",
				password:"",
				password1:"",
				date:(new Date()).toLocaleString()
			},
			rules:{
				name:[
					{ required: true, message: '请输入用户名称', trigger: 'blur' },
					{ min: 3, max: 5, message: '名称长度在 3 到 5 个字符', trigger: 'blur' }
				],
				password:[
					{ required: true, message: '请输入密码', trigger: 'blur' },
					{ min: 6, max: 12, message: '密码长度在6 到 12个字符', trigger: 'blur' }
				],
				password1:[
					{ required: true, message: '请输入确认密码', trigger: 'blur' },
					{ validator:validatePass2, trigger: 'blur' }
				]
			}
		}
	},
	methods: {
      submitForm(formName) {
      	var _this=this;
        _this.$refs[formName].validate((valid) => {
          if (valid) {
            data.add(_this.formLabelAlign);
            sessionStorage["loginName"]=JSON.stringify(_this.formLabelAlign);
            _this.$router.push({"path":"/admin/index/content"});
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted:function(){
    	this.id=data.getId();
    }
}
	
</script>

<style>
.login-content{
	width:500px;
	margin:100px auto;
}
</style>