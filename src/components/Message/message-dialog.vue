<template>
	<el-dialog title="留言" top="10%" class="message-dialog" v-model="dialogFormVisible" @close="dialogClone" @open="dialogOpen">
		<el-form :model="myform" :rules="rules" ref="ruleForm" >
			<el-form-item label="名字" prop="name">
				<el-input v-model="myform.name" auto-complete="on"></el-input>
			</el-form-item>
			<el-form-item label="QQ" prop="qq">
				<el-input v-model="myform.qq" auto-complete="on"></el-input>
			</el-form-item>
			<el-form-item label="邮箱" prop="email">
				<el-input v-model="myform.email" auto-complete="on"></el-input>
			</el-form-item>
			<el-form-item label="地址" prop="address">
				<el-input v-model="myform.address" auto-complete="on"></el-input>
			</el-form-item>
			
			<el-form-item label="内容" prop="desc">
				<el-input type="textarea" v-model="myform.desc"></el-input>
			</el-form-item>
			
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click="dialogClone">取 消</el-button>
			<el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
		</div>
	</el-dialog>

	
</template>

<script>
import message from "./message-datas";

export default{
	data:function(){
		return {
			dialogFormVisible:false,
			myform:{
				name:"",
				email:"",
				qq:"",
				address:"",
				desc:"",
				id:0,
				date:""
			},
			rules:{
				name:[
					 { required: true, message: '请输入名称', trigger: 'blur' },
					 { min: 2, max: 6, message: '长度在 2到 6 个字符', trigger: 'blur'}
				],
				qq:[
					{required: true, message: '请输入QQ', trigger: 'blur'}
				],
				email:[
					{required: true, message: '请输入邮箱', trigger: 'blur'},
					{type:"email", message: '请输入正确的邮箱', trigger: 'blur'}
				],
				desc:[{required: true, message: '请输入内容', trigger: 'blur'}]
			}
		}
	},
	props:["dialogVisible","dialogAction","dialogItem"],
	methods:{
		submitForm:function(formName){
			var _this=this;
			_this.$refs[formName].validate(function(valid){
				if(valid){
					if(_this.dialogAction=="add"){
						message.id=_this.myform.id=message.id+1;
						message.add(_this.myform);
					}else
					{
						message.edit(_this.myform);
					}
	
					_this.dialogClone(true);
				}
				else{
					return false;
				}
			});
		},
		dialogClone:function(flag){
			this.dialogFormVisible=false;
			this.$emit("dialog-close",flag);
			
		},
		dialogOpen:function(){
			if(this.dialogAction=="edit"){
				this.myform=this.dialogItem;
			}else{
				this.dialogOpenInit();
			}
		},
		dialogOpenInit:function(){
			this.myform={
					name:"",
					email:"",
					qq:"",
					address:"",
					desc:"",
					id:0,
					date:(new Date).toLocaleDateString()
				}
		}
	},
	watch:{
		"dialogVisible":function(newVal){
			if(newVal==true){
				this.dialogFormVisible=true;
			}
		}
	},
	mounted:function(){

	}
}
</script>

<style>
	.message-dialog .el-dialog__body{padding:10px 20px;}
	.message-dialog .el-form-item__label{padding: 5px 12px 5px 0;}
	
	.message-dialog .el-dialog{-webkit-transform: translateX(-50%);}
	.message-dialog .el-input__inner{height:30px;}
	
</style>