export default{
	getOne:function(id){
		var datas=JSON.parse(sessionStorage["news"]);
		for(var i=0,ii=datas.length;i<ii;i++){
			if(id==datas[i].id){
				return 	datas[i];
			}
		}
		
		return {};
	},
	getPageDatas:function(type,pageIndex,pageNum){
		this.init();
		var datas=JSON.parse(sessionStorage["news"]).reverse();
		var retArrs=[];
		if(type!=0){
			datas.forEach(function(value,index){
				if(value.type==type){
					retArrs.push(value);
				}
			});
		}else{
			retArrs=datas;
		}
		//title:"新闻名称1",id:1,content:"新闻描述1","src":"000"

		this.total=retArrs.length;
		this.pageIndex=pageIndex;
		this.pageNum=pageNum;
		pageIndex=pageIndex<1?1:pageIndex;
		pageNum=pageNum<0?0:pageNum;
		var pageStart=(pageIndex-1)*pageNum;
		var pageEnd=pageStart+pageNum;
		
		retArrs=retArrs.slice(pageStart,pageEnd);
		
		return retArrs;
	},
	add:function(obj){
		var datas=JSON.parse(sessionStorage["news"]);
			datas.push(obj);
			sessionStorage["news"]=JSON.stringify(datas);
	},
	edit:function(obj){
		
		var datas=JSON.parse(sessionStorage["news"]);
		var i=0,ii=datas.length;
			for(;i<ii;i++){
				if(obj.id==datas[i].id){
					datas[i]=obj;
					sessionStorage["news"]=JSON.stringify(datas);
					return true;
				}
			}

		return false;
	},
	deleted:function(id){
		var datas=JSON.parse(sessionStorage["news"]);
		var obj,i=0,ii=datas.length;
			for(;i<ii;i++){
				if(id==datas[i].id){
					obj=datas[i];
					break;
				}
			}

			if(obj){
				datas.splice(i,1);
				sessionStorage["news"]=JSON.stringify(datas);
				return true;
			}
			
		return false;
	},
	init:function(){
		if(!sessionStorage["news"]){
			var retArrs=[],type=0,typeStr,obj;
			for(var i=0;i<50;i++){
				type=type==1?2:1;
				typeStr=type==1?"公司新闻":"行业新闻";
				obj={};
				obj.id=i;
				obj.type=type;
				obj.title=typeStr+" 新闻名称"+i;
				obj.content="新闻内容"+i;
				obj.date=(new Date()).toLocaleDateString();
				obj.src=require("../../images/news-image.png");
				
				retArrs.push(obj);
			}
			
			sessionStorage["news"]=JSON.stringify(retArrs);
		}
	},
	getId:function(){
		this.init();
		return JSON.parse(sessionStorage["news"]).reverse()[0].id+1;
	},
	total:0,
	pageIndex:0,
	pageNum:0
}
