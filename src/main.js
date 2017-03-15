import Vue from "vue";
import vueRouter from "vueRouter";
import routes from "./router";
import elementui from "element-ui";
Vue.use(elementui);
Vue.use(vueRouter);

const router = new vueRouter(routes);

var vue=new Vue(
	{
		router,
		data:{
			activeIndex2:"1"
		},
		mounted:function(){
			var routerName=sessionStorage["routerName"];
			if(routerName){
				var obj={};
				obj["about"]=2;
				obj["product"]=3;
				obj["product-detail"]=3;
				obj["news"]=4;
				obj["contact"]=5;
				obj["message"]=6;
				obj["message"]=7;
				obj["index"]=1;
				
				this.activeIndex2=obj[routerName];
			}
		}
		/*,
		render:function(r){
			return r(index);
		}*/
	}).$mount("#app");
	
	router.beforeEach((to, from, next) => {
	  sessionStorage["routerName"]=to.name;
	  next(function(){});
	});
	

