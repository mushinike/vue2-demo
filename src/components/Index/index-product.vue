<template>
	<div>
		<el-row>
		  <el-col :span="6" v-for="(o, index) in items" :offset="index > 0 ? 2 : 0">
		    <el-card >
		      <img src="../../images/hamburger.png" width="150">
		      <div style="padding: 14px;">
		        <span>{{o.title}}</span>
		        <div class="bottom clearfix">
		          <time class="time">{{ o.date }}</time>
		          <el-button type="text" class="button">查看详细</el-button>
		        </div>
		      </div>
		    </el-card>
		  </el-col>
		</el-row>
	</div>
	
</template>

<script>
export default{
	data:function(){
		return {
			
			items:[{title:"产品名称1",id:1,content:"产品描述1","src":"000",date:"2017-3-8"},{title:"产品名称2",id:2,content:"产品描述2","src":"000",date:"2017-3-8"},{title:"产品名称3",id:3,content:"产品描述3","src":"000",date:"2017-3-8"},]
		}
	}
}
</script>