<template>
	<div>
		<el-carousel  indicator-position="outside">
		    <el-carousel-item v-for="item in items">
		      <img :src="item.src" :alt="item.title" width="100%"  />
		    </el-carousel-item>
		</el-carousel>
	</div>
  
</template>

<script>
export default{
	data:function(){
		return {items:[]}
	},
	mounted:function(){
		var obj;
		for(let i=1,ii=5;i<ii;i++){
			obj={};
			obj.src=require("../../images/flash"+i+".jpg");
			obj.title="轮询图"+i;
			obj.desc="图片描述"+i;
			this.items.push(obj);
		}
	}
}
</script>