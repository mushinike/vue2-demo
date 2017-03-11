<template>
	<div>
		<ul>
		  <li v-for="(value,key) in items" class="text item index-news-item">
		  	
		    {{'列表名称 ' + value.title }}
		  </li>
		</ul>
	</div>
</template>
<style>
.index-news-item{line-height: 28px;list-style-position: inside;padding-left:15px;}
	
</style>
<script>
import news from "../News/news-datas.js";

export default{
	data:function(){
		return {
			items:news.getPageDatas(0,1,10)
		}
	}
}
</script>