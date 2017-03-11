export default {
  routes: [
    	{path: '/index',name:"index", component: function(resolve ) {
    		require(['./components/Index/index.vue'], resolve);
    	}},
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
    	{path: '/',name:"index", component: function(resolve ) {
    		require(['./components/Index/index.vue'], resolve);
    	}}
  ]
};