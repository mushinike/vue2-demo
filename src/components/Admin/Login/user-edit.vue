<template>
	<el-card class="box-card admin-right-session">
		<div slot="header" class="clearfix">
			<span>用户编辑</span>
			<span class="floatRight">管理中心>用户列表</el-button>
		</div>
		<div class="admin-right-session-content">
			<el-form :rules="rules" ref="ruleForm" label-width="100px" :model="formLabelAlign">
			  <el-form-item label="用户名称" prop="name">
			    <el-input v-model="formLabelAlign.name" :disabled="true"></el-input>
			  </el-form-item>
			  <el-form-item label="密码" prop="password">
			    <el-input v-model="formLabelAlign.password"></el-input>
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
import data from "./user-datas";
export default{
	data:function(){
		return {
			formLabelAlign:{
				id:0,
				name:"",
				password:"",
				date:""
			},
			rules:{
				password:[
					{ required: true, message: '请输入密码', trigger: 'blur' },
					{ min: 6, max: 12, message: '密码长度在6 到 12个字符', trigger: 'blur' }
				]
			}
		}
	},
	beforeRouteEnter:function(to,from,next){
		var name=to.params.name;
		var obj=data.getOne(name);
			
			next(function(vm){
				vm.formLabelAlign=obj;
				//vm.formLabelAlign.password="";
			});
	},
	methods: {
      submitForm(formName) {
      	var _this=this;
        _this.$refs[formName].validate((valid) => {
          if (valid) {
            data.edit(_this.formLabelAlign);

            _this.$router.push({"path":"/admin/login/users"});
            
          } else {
            return false;
          }
        });
      },
      back:function() {
        this.$router.push({"path":"/admin/login/users"});
      }
    }
}
</script>

<style>
</style>