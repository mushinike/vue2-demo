export default{
	add:function(obj){
		var datas=JSON.parse(sessionStorage["message"]);
			datas.push(obj);
			sessionStorage["message"]=JSON.stringify(datas);
	},
	deleted:function(id){
		var datas=JSON.parse(sessionStorage["message"]);
		var obj,i=0,ii=datas.length;
			for(;i<ii;i++){
				if(id==datas[i].id){
					obj=datas[i];
					break;
				}
			}

			if(obj){
				datas.splice(i,1);
				sessionStorage["message"]=JSON.stringify(datas);
				return true;
			}
			
		return false;
	},
	edit:function(obj){
		var datas=JSON.parse(sessionStorage["message"]);
		var i=0,ii=datas.length;
			for(;i<ii;i++){
				if(obj.id==datas[i].id){
					datas[i]=obj;
					sessionStorage["message"]=JSON.stringify(datas);
					return true;
				}
			}

		return false;
	},
	getOne:function(id){
		var datas=JSON.parse(sessionStorage["message"]);
		var i=0,ii=datas.length;
			for(;i<ii;i++){
				if(id==datas[i].id){
					return datas[i];
				}
			}
			
		return {};
	},
	getPageDatas:function(pageIndex,pageNum){
		var datas=JSON.parse(sessionStorage["message"]).reverse();
		var retArrs;
		this.total=datas.length;
		this.pageIndex=pageIndex;
		this.pageNum=pageNum;
		pageIndex=pageIndex<1?1:pageIndex;
		pageNum=pageNum<0?0:pageNum;
		var pageStart=(pageIndex-1)*pageNum;
		var pageEnd=(pageStart+pageNum)>this.total?this.total:(pageStart+pageNum);
		
		retArrs=datas.slice(pageStart,pageEnd);
		
		return retArrs;
	},
	total:0,
	pageIndex:0,
	pageNum:0,
	id:35
}
