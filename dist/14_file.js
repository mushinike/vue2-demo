webpackJsonp([14],{

/***/ 43:
/*!*******************************************!*\
  !*** ./src/components/News/news-list.vue ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-rewriter.js!../../../~/vue-loader/lib/selector.js?type=style&index=0!./news-list.vue */ 44)
	__vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!../../../~/vue-loader/lib/selector.js?type=script&index=0!./news-list.vue */ 46)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\News\\news-list.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!../../../~/vue-loader/lib/selector.js?type=template&index=0!./news-list.vue */ 55)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-500f3291/news-list.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 44:
/*!********************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./src/components/News/news-list.vue ***!
  \********************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-rewriter.js!../../../~/vue-loader/lib/selector.js?type=style&index=0!./news-list.vue */ 45);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../../../~/vue-style-loader/addStyles.js */ 6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter.js!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./news-list.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter.js!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./news-list.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 45:
/*!***********************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./src/components/News/news-list.vue ***!
  \***********************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n.news-lists-item{line-height: 30px;border-bottom: 1px dashed #999;list-style-position:inside;}\r\n.news-lists-item span{float: right;}\r\n", "", {"version":3,"sources":["/./src/components/News/news-list.vue?01a0604d"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;AAsBA,iBAAA,kBAAA,+BAAA,2BAAA,CAAA;AACA,sBAAA,aAAA,CAAA","file":"news-list.vue","sourcesContent":["<template>\r\n\t<el-card class=\"box-card\">\r\n\t  \t<el-row>\r\n\t\t\t  <el-col :span=\"3\" ><list-nav></list-nav></el-col>\r\n\t\t\t  <el-col :span=\"19\" offset=\"2\">\r\n\t\t\t  \t<el-card class=\"box-card\">\r\n\t\t\t  \t\t<ul>\r\n\t\t\t\t\t  <li v-for=\"(value,key) in items\" class=\"text item news-lists-item\">\r\n\t\t\t\t\t  \t<span>{{value.date}}</span>\r\n\t\t\t\t\t  \r\n\t\t\t\t\t  \t<router-link :to=\"routerUrl(value.id)\">{{value.title}}</router-link>\r\n\t\t\t\t\t  </li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t<page :total=\"total\" :page-size=\"pageSize\" :page-sizes=\"[20,40,60,100]\"  @size-change=\"sizeChange\"  @size-change=\"sizeChange\"  @page-change=\"pageChange\"></page>\r\n\t\t\t  \t</el-card>\r\n\t\t\t  </el-col>\r\n\t\t  \r\n\t\t</el-row>\r\n\t</el-card>\r\n</template>\r\n<style>\r\n\r\n.news-lists-item{line-height: 30px;border-bottom: 1px dashed #999;list-style-position:inside;}\r\n.news-lists-item span{float: right;}\r\n</style>\r\n<script>\r\nimport news from \"./news-datas.js\";\r\nimport nav from \"./news-list-nav.vue\";\r\nimport page from \"../Tools/pagination\";\r\n\r\nexport default{\r\n\tdata:function(){\r\n\t\treturn {\r\n\t\t\ttotal:0,\r\n\t\t\tnewsType:1,\r\n\t\t\tpageSize:20,\r\n\t\t\titems:[]\r\n\t\t}\r\n\t},\r\n\tcomponents:{\r\n\t\tpage,\r\n\t\t\"list-nav\":nav\r\n\t},\r\n\tmethods:{\r\n\t\trouterUrl:function(id){\r\n\t\t\tvar obj={};\r\n\t\t\t\tobj.path=\"/news/detail/\"\r\n\t\t\t\tobj.name=\"detail\";\r\n\t\t\t\tobj.params={id:id,type:this.newsType};\r\n\t\t\t\treturn obj;\r\n\t\t},\r\n\t\tpageChange:function(val){\r\n\t\t\tthis.items=news.getPageDatas(this.newsType,val,news.pageNum);\r\n\t\t\tthis.total=news.total;\r\n\t\t},\r\n\t\tsizeChange:function(val){\r\n\t\t\tthis.items=news.getPageDatas(this.newsType,news.pageIndex,val);\r\n\t\t\tthis.total=news.total;\r\n\t\t\tthis.pageSize=val;\r\n\t\t},\r\n\t\tpageInit:function(){\r\n\t\t\tvar params=this.$route.params;\r\n\t\t\tthis.newsType=params.type;\r\n\t\t\tthis.items=news.getPageDatas(this.newsType,1,20);\r\n\t\t\tthis.total=news.total;\r\n\t\t}\r\n\t},\r\n\tmounted:function(){\r\n\t\tthis.pageInit();\r\n\t},\r\n\twatch:{\r\n\t\t$route:function(){\r\n\t\t\tthis.pageInit();\r\n\t\t}\r\n\t}\r\n}\r\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 46:
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/vue-loader/lib/selector.js?type=script&index=0!./src/components/News/news-list.vue ***!
  \*******************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _newsDatas = __webpack_require__(/*! ./news-datas.js */ 23);
	
	var _newsDatas2 = _interopRequireDefault(_newsDatas);
	
	var _newsListNav = __webpack_require__(/*! ./news-list-nav.vue */ 47);
	
	var _newsListNav2 = _interopRequireDefault(_newsListNav);
	
	var _pagination = __webpack_require__(/*! ../Tools/pagination */ 52);
	
	var _pagination2 = _interopRequireDefault(_pagination);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		data: function data() {
			return {
				total: 0,
				newsType: 1,
				pageSize: 20,
				items: []
			};
		},
		components: {
			page: _pagination2.default,
			"list-nav": _newsListNav2.default
		},
		methods: {
			routerUrl: function routerUrl(id) {
				var obj = {};
				obj.path = "/news/detail/";
				obj.name = "detail";
				obj.params = { id: id, type: this.newsType };
				return obj;
			},
			pageChange: function pageChange(val) {
				this.items = _newsDatas2.default.getPageDatas(this.newsType, val, _newsDatas2.default.pageNum);
				this.total = _newsDatas2.default.total;
			},
			sizeChange: function sizeChange(val) {
				this.items = _newsDatas2.default.getPageDatas(this.newsType, _newsDatas2.default.pageIndex, val);
				this.total = _newsDatas2.default.total;
				this.pageSize = val;
			},
			pageInit: function pageInit() {
				var params = this.$route.params;
				this.newsType = params.type;
				this.items = _newsDatas2.default.getPageDatas(this.newsType, 1, 20);
				this.total = _newsDatas2.default.total;
			}
		},
		mounted: function mounted() {
			this.pageInit();
		},
		watch: {
			$route: function $route() {
				this.pageInit();
			}
		}
	};

/***/ },

/***/ 47:
/*!***********************************************!*\
  !*** ./src/components/News/news-list-nav.vue ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-rewriter.js!../../../~/vue-loader/lib/selector.js?type=style&index=0!./news-list-nav.vue */ 48)
	__vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!../../../~/vue-loader/lib/selector.js?type=script&index=0!./news-list-nav.vue */ 50)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\News\\news-list-nav.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!../../../~/vue-loader/lib/selector.js?type=template&index=0!./news-list-nav.vue */ 51)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-48f3d0e7/news-list-nav.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 48:
/*!************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./src/components/News/news-list-nav.vue ***!
  \************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-rewriter.js!../../../~/vue-loader/lib/selector.js?type=style&index=0!./news-list-nav.vue */ 49);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../../../~/vue-style-loader/addStyles.js */ 6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter.js!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./news-list-nav.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter.js!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./news-list-nav.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 49:
/*!***************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./src/components/News/news-list-nav.vue ***!
  \***************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n.news-list-nav span{display: inline;}\n", "", {"version":3,"sources":["/./src/components/News/news-list-nav.vue?71990d66"],"names":[],"mappings":";;;;;;;AAOA,oBAAA,gBAAA,CAAA","file":"news-list-nav.vue","sourcesContent":["<template>\r\n\t<el-menu :default-active=\"newsActiveIndex\" class=\"news-list-nav\" router=true >\r\n\t  <el-menu-item index=\"1\" route=\"/news/list/1\">公司新闻</el-menu-item>\r\n\t  <el-menu-item index=\"2\" route=\"/news/list/2\">行业新闻</el-menu-item>\r\n\t</el-menu>\r\n</template>\r\n<style>\r\n\t.news-list-nav span{display: inline;}\r\n</style>\r\n<script>\r\nexport default{\r\n\tdata:function(){\r\n\t\treturn {\r\n\t\t\tnewsActiveIndex:\"1\"\r\n\t\t}\r\n\t},\r\n\tmounted:function(){\r\n\t\t\r\n\t\tvar params=this.$route.params;\r\n\t\tthis.newsActiveIndex=params.type;\r\n\t\t\r\n\t},\r\n\twatch:{\r\n\t\t$route:function(){\r\n\t\t\tvar params=this.$route.params;\r\n\t\t\tthis.newsActiveIndex=params.type;\r\n\t\t}\r\n\t}\r\n}\r\n</script>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 50:
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/vue-loader/lib/selector.js?type=script&index=0!./src/components/News/news-list-nav.vue ***!
  \***********************************************************************************************************************************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
				newsActiveIndex: "1"
			};
		},
		mounted: function mounted() {
	
			var params = this.$route.params;
			this.newsActiveIndex = params.type;
		},
		watch: {
			$route: function $route() {
				var params = this.$route.params;
				this.newsActiveIndex = params.type;
			}
		}
	};

/***/ },

/***/ 51:
/*!************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/components/News/news-list-nav.vue ***!
  \************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "\n<el-menu :default-active=\"newsActiveIndex\" class=\"news-list-nav\" router=true >\n  <el-menu-item index=\"1\" route=\"/news/list/1\">公司新闻</el-menu-item>\n  <el-menu-item index=\"2\" route=\"/news/list/2\">行业新闻</el-menu-item>\n</el-menu>\n";

/***/ },

/***/ 52:
/*!*********************************************!*\
  !*** ./src/components/Tools/pagination.vue ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!../../../~/vue-loader/lib/selector.js?type=script&index=0!./pagination.vue */ 53)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\Tools\\pagination.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!../../../~/vue-loader/lib/selector.js?type=template&index=0!./pagination.vue */ 54)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2e4a94bd/pagination.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 53:
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/vue-loader/lib/selector.js?type=script&index=0!./src/components/Tools/pagination.vue ***!
  \*********************************************************************************************************************************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  methods: {
	    handleSizeChange: function handleSizeChange(val) {
	      this.pageSize = val;
	      this.$emit("size-change", val);
	    },
	    handleCurrentChange: function handleCurrentChange(val) {
	      this.currentPage = val;
	
	      this.$emit("page-change", val);
	    }
	  },
	  props: ["total", "pageSize", "pageSizes"],
	  data: function data() {
	    return {
	      currentPage: 1
	    };
	  },
	
	  created: function created() {},
	  watch: {
	    $route: function $route() {
	      this.currentPage = 1;
	    }
	  }
	};

/***/ },

/***/ 54:
/*!**********************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/components/Tools/pagination.vue ***!
  \**********************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "\n<el-pagination\n  @size-change=\"handleSizeChange\"\n  @current-change=\"handleCurrentChange\"\n  :current-page=\"currentPage\"\n  :page-sizes=\"pageSizes\"\n  :page-size=\"pageSize\"\n  layout=\"total, sizes, prev, pager, next, jumper\"\n  :total=\"total\">\n</el-pagination>\n";

/***/ },

/***/ 55:
/*!********************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/components/News/news-list.vue ***!
  \********************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "\n<el-card class=\"box-card\">\n  \t<el-row>\n\t\t  <el-col :span=\"3\" ><list-nav></list-nav></el-col>\n\t\t  <el-col :span=\"19\" offset=\"2\">\n\t\t  \t<el-card class=\"box-card\">\n\t\t  \t\t<ul>\n\t\t\t\t  <li v-for=\"(value,key) in items\" class=\"text item news-lists-item\">\n\t\t\t\t  \t<span>{{value.date}}</span>\n\t\t\t\t  \n\t\t\t\t  \t<router-link :to=\"routerUrl(value.id)\">{{value.title}}</router-link>\n\t\t\t\t  </li>\n\t\t\t\t</ul>\n\t\t\t\t<page :total=\"total\" :page-size=\"pageSize\" :page-sizes=\"[20,40,60,100]\"  @size-change=\"sizeChange\"  @size-change=\"sizeChange\"  @page-change=\"pageChange\"></page>\n\t\t  \t</el-card>\n\t\t  </el-col>\n\t  \n\t</el-row>\n</el-card>\n";

/***/ }

});
//# sourceMappingURL=14_file.js.map