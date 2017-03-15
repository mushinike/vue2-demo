export default{
	getOne:function(userName,password){
		var users=JSON.parse(sessionStorage["users"]),user;
		for(var i=0,ii=users.length;i<ii;i++){
			user=users[i];
			if(userName==user.name&&password&&password==user.password){
				return user;
			}
			else if(userName==user.name&&!password)
			{
				return user;
			}
		}
		
		return {};
	},
	add:function(addObj){
		var obj={};
			for(var key in addObj){
				if(key!="password1"){
					obj[key]=addObj[key];
				}
			}
		
		var users=JSON.parse(sessionStorage["users"]);
			if(users.length>1){
				users.push(obj);
			}else{
				users=[].concat(users,obj);
			}

			sessionStorage["users"]=JSON.stringify(users);
			
			return true;
	},
	edit:function(editObj){
		var users=JSON.parse(sessionStorage["users"]);

		for(var i=0,ii=users.length;i<ii;i++){
			if(editObj.name==users[i].name){
				users[i]=editObj;
				sessionStorage["users"]=JSON.stringify(users);
				return true;
			}
		}
		
		return false
	},
	deleted:function(userName){
		var users=JSON.parse(sessionStorage["users"]);
		for(var i=0,ii=users.length;i<ii;i++){
			if(userName==users[i].name){
				users.splice(i,1);
				sessionStorage["users"]=JSON.stringify(users);
				return true;
			}
		}
		
		return false
	},
	getPageDatas:function(pageIndex,pageNum){
		var datas=JSON.parse(sessionStorage["users"]).reverse();
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
	getId:function(){
		if(!sessionStorage["users"]){
			var data=[];
			data.push({name:"msnk",password:"123456",date:(new Date).toLocaleDateString(),id:1});
			
			var obj={};
			for(var i=0,ii=10;i<ii;i++){
				obj={};
				obj.name="路人甲_"+i;
				obj.password="123456";
				obj.date=(new Date).toLocaleDateString();
				obj.id=i+2;
				data.push(obj)
			}
			var str=JSON.stringify(data);
			sessionStorage["users"]=str;
		}
		
		var datas=JSON.parse(sessionStorage["users"]).reverse();
			return datas.length>1?(datas[1].id+1):(datas.id+1);
	}
}
