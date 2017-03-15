<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>用户登录中心</span>
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
			  <el-form-item style="padding-top:15px;">
			    <el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
			    <el-button @click="register()">立即注册</el-button>
			  </el-form-item>
			</el-form>
		</div>
	</el-card>
</template>

<script>
import data from "./user-datas";
	
export default{
	data:function(){
		return {
			formLabelAlign:{
				id:0,
				name:"msnk",
				password:"123456",
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
				]
			}
		}
	},
	methods: {
      submitForm(formName) {
      	var _this=this;
        _this.$refs[formName].validate((valid) => {
          if (valid) {
            var obj=data.getOne(_this.formLabelAlign.name,_this.formLabelAlign.password);
            if(obj.name){
            	sessionStorage["loginName"]=JSON.stringify(obj);
            	_this.$router.push({"path":"/admin/index/content"});
            }else{
            	_this.$alert('提示信息', '登录失败了');
            }
            
          } else {
            return false;
          }
        });
      },
      register() {
        this.$router.push({"path":"/register"});
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