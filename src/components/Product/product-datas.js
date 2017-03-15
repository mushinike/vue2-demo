export　default{
	getOneData:function(id){
		var obj={};
			obj.id=id;
			obj.title="产品名称"+id;
			obj.content="产品内容"+id;
			obj.date=(new Date()).toLocaleDateString();
			obj.src=require("../../images/pic_1.jpg");
			obj.images=[];
			obj.images.push(require("../../images/1.jpg"));
			obj.images.push(require("../../images/2.jpg"));
			obj.images.push(require("../../images/3.jpg"));
			obj.images.push(require("../../images/4.jpg"));
			obj.images.push(require("../../images/5.jpg"));
			obj.images.push(require("../../images/6.jpg"));
			obj.images.push(require("../../images/7.jpg"));
			obj.images.push(require("../../images/8.jpg"));
			obj.images.push(require("../../images/9.jpg"));
			
			return obj;
	},
	getPageDatas:function(pageIndex,pageNum){
		var retArrs=[];
		this.total=3500;
		this.pageIndex=pageIndex;
		this.pageNum=pageNum;
		pageIndex=pageIndex<1?1:pageIndex;
		pageNum=pageNum<0?0:pageNum;
		var pageStart=(pageIndex-1)*pageNum;
		var pageEnd=pageStart+pageNum;
			pageEnd=pageEnd>this.total?(this.total+1):pageEnd;
		var obj;

		for(;pageStart<pageEnd;pageStart++){
			obj={};
			obj.id=pageStart;
			obj.title="产品名称"+pageStart;
			obj.content="产品内容"+pageStart;
			obj.date=(new Date()).toLocaleDateString();
			obj.src=require("../../images/hamburger.png");
			obj.images=[];
			obj.images.push(require("../../images/1.jpg"));
			obj.images.push(require("../../images/2.jpg"));
			obj.images.push(require("../../images/3.jpg"));
			obj.images.push(require("../../images/4.jpg"));
			obj.images.push(require("../../images/5.jpg"));
			obj.images.push(require("../../images/6.jpg"));
			obj.images.push(require("../../images/7.jpg"));
			obj.images.push(require("../../images/8.jpg"));
			obj.images.push(require("../../images/9.jpg"));
			
			retArrs.push(obj);
		}
		
		return retArrs;
	},
	total:0,
	pageIndex:0,
	pageNum:0
	
}
