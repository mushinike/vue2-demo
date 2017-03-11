export default{
	getData:function(id,type){
		var obj,typeStr=type==1?"公司新闻":"行业新闻";
		obj={};
		obj.id=id;
		obj.type=type;
		obj.title=typeStr+" 新闻名称"+id;
		obj.content="新闻内容"+id;
		obj.date=(new Date()).toLocaleDateString();
		obj.src=require("../../images/news-image.png");
		
		return obj;
	},
	getPageDatas:function(type=1,pageIndex=1,pageNum=20){
		//title:"新闻名称1",id:1,content:"新闻描述1","src":"000"
		var retArrs=[];
		this.total=3500;
		this.pageIndex=pageIndex;
		this.pageNum=pageNum;
		pageIndex=pageIndex<1?1:pageIndex;
		pageNum=pageNum<0?0:pageNum;
		var pageStart=(pageIndex-1)*pageNum+1;
		var pageEnd=pageStart+pageNum;
		var obj,typeStr="";
		
		if(type!=0){
			typeStr=type==1?"公司新闻":"行业新闻";
		}
		for(;pageStart<pageEnd;pageStart++){
			obj={};
			obj.id=pageStart;
			obj.type=type;
			obj.title=typeStr+" 新闻名称"+pageStart;
			obj.content="新闻内容"+pageStart;
			obj.date=(new Date()).toLocaleDateString();
			obj.src=require("../../images/news-image.png");
			
			retArrs.push(obj);
		}
		
		return retArrs;
	},
	total:0,
	pageIndex:0,
	pageNum:0
}
