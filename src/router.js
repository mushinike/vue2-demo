export default {
  routes: [
    	{path: '/index',name:"index", component: function(resolve ) {
    		require(['./components/Index/index.vue'], resolve);
    	}},
    	{path: '/',redirect:"/index"},
    	{path: '/about',name:"about", component: function(resolve ) {
    		require(['./components/About/about.vue'], resolve);
    	}},
    	{name:"detail",path: '/news/detail/:id/:type', component: function(resolve ) {
    		require(['./components/News/news-detail.vue'], resolve);
    	}},
    	{path: '/news/list/:type',name:"news", component: function(resolve ) {
    		require(['./components/News/news-list.vue'], resolve);
    	}},
    	{path: '/product',name:"product", component: function(resolve ) {
    		require(['./components/Product/product-list.vue'], resolve);
    	}},
    	{path: '/product/detail/:id',name:"product-detail", component: function(resolve ) {
    		require(['./components/Product/product-detail.vue'], resolve);
    	}},
    	{path: '/contact',name:"contact", component: function(resolve ) {
    		require(['./components/contact.vue'], resolve);
    	}},
    	{path: '/message',name:"message", component: function(resolve ) {
    		require(['./components/Message/message-list.vue'], resolve);
    	}},
    	{path: '/register',name:"register", component: function(resolve ) {
    		require(['./components/admin/login/register.vue'], resolve);
    	}},
    	{path: '/login',name:"login", component: function(resolve ) {
    		require(['./components/admin/login/login.vue'], resolve);
    	}},
    	{path: '/admin',redirect:"/admin/index"},
    	{path: '/admin/index',name:"admin", component: function(resolve ) {
    			require(['./components/Admin/index/index.vue'], resolve);
    		},
    		children:[
    		{path: '/admin/index/content',name:"index-content", component: function(resolve ) {
	    		require(['./components/Admin/index/index-content.vue'], resolve);
	    	}},
    		{path: '/admin/login/users',name:"users", component: function(resolve ) {
	    		require(['./components/Admin/login/user-list.vue'], resolve);
	    	}},
	    	{path: '/admin/login/users/edit/:name',name:"users-edit", component: function(resolve ) {
	    		require(['./components/Admin/login/user-edit.vue'], resolve);
	    	}},
	    	{path: '/admin/other/contact',name:"other-contact", component: function(resolve ) {
	    		require(['./components/Admin/other/contact.vue'], resolve);
	    	}},
	    	{path: '/admin/other/about',name:"other-about", component: function(resolve ) {
	    		require(['./components/Admin/other/about.vue'], resolve);
	    	}}
    		
    		]
    	},
    	
  ]
};