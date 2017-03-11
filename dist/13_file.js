webpackJsonp([13],{

/***/ 38:
/*!*********************************************!*\
  !*** ./src/components/News/news-detail.vue ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-rewriter.js!../../../~/vue-loader/lib/selector.js?type=style&index=0!./news-detail.vue */ 39)
	__vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!../../../~/vue-loader/lib/selector.js?type=script&index=0!./news-detail.vue */ 41)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\News\\news-detail.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!../../../~/vue-loader/lib/selector.js?type=template&index=0!./news-detail.vue */ 42)
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
	  var id = "_v-747b5e04/news-detail.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 39:
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./src/components/News/news-detail.vue ***!
  \**********************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-rewriter.js!../../../~/vue-loader/lib/selector.js?type=style&index=0!./news-detail.vue */ 40);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../../../~/vue-style-loader/addStyles.js */ 6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter.js!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./news-detail.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter.js!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./news-detail.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 40:
/*!*************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./src/components/News/news-detail.vue ***!
  \*************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.news-content{margin:0 auto;text-align: center;line-height: 28px;}\n", "", {"version":3,"sources":["/./src/components/News/news-detail.vue?2eed3e4e"],"names":[],"mappings":";;;;;;;;;;;;;;;;AAgBA,cAAA,cAAA,mBAAA,kBAAA,CAAA","file":"news-detail.vue","sourcesContent":["<template>\r\n\t<el-card class=\"box-card\">\r\n\t  <div slot=\"header\" class=\"clearfix\">\r\n\t    <span>{{typeStr}}</span>\r\n\t    <span style=\"float: right;\" >首页>新闻中心</span>\r\n\t  </div>\r\n\t  <article class=\"text item news-content\">\r\n\t  \t<h3>{{data.title}}</h3>\r\n\t  \t<section>\r\n\t  \t\t<p>{{data.content}}</p>\r\n\t  \t\t<p><img :src=\"data.src\" /></p>\r\n\t  \t</section>\r\n\t  </article>\r\n\t</el-card>\r\n</template>\r\n<style>\r\n\t.news-content{margin:0 auto;text-align: center;line-height: 28px;}\r\n</style>\r\n<script>\r\nimport news from \"./news-datas.js\";\r\n\r\nexport default{\r\n\tdata:function(){\r\n\t\treturn {\r\n\t\t\tdata:{},\r\n\t\t\ttypeStr:\"1\"\r\n\t\t}\r\n\t},\r\n\tbeforeRouteEnter:function(to,from,next){\r\n\t\tvar obj=news.getData(to.params.id,to.params.type);\r\n\t\tnext(function(vm){\r\n\t\t\tvm.$data.data=obj;\r\n\t\t\tvm.$data.typeStr=obj.type==1?\"公司新闻\":\"行业新闻\";\r\n\t\t});\r\n\t},\r\n\tmounted:function(){\r\n\t\t\r\n\t}\r\n}\r\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 41:
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/vue-loader/lib/selector.js?type=script&index=0!./src/components/News/news-detail.vue ***!
  \*********************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _newsDatas = __webpack_require__(/*! ./news-datas.js */ 23);
	
	var _newsDatas2 = _interopRequireDefault(_newsDatas);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		data: function data() {
			return {
				data: {},
				typeStr: "1"
			};
		},
		beforeRouteEnter: function beforeRouteEnter(to, from, next) {
			var obj = _newsDatas2.default.getData(to.params.id, to.params.type);
			next(function (vm) {
				vm.$data.data = obj;
				vm.$data.typeStr = obj.type == 1 ? "公司新闻" : "行业新闻";
			});
		},
		mounted: function mounted() {}
	};

/***/ },

/***/ 42:
/*!**********************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/components/News/news-detail.vue ***!
  \**********************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "\n<el-card class=\"box-card\">\n  <div slot=\"header\" class=\"clearfix\">\n    <span>{{typeStr}}</span>\n    <span style=\"float: right;\" >首页>新闻中心</span>\n  </div>\n  <article class=\"text item news-content\">\n  \t<h3>{{data.title}}</h3>\n  \t<section>\n  \t\t<p>{{data.content}}</p>\n  \t\t<p><img :src=\"data.src\" /></p>\n  \t</section>\n  </article>\n</el-card>\n";

/***/ }

});
//# sourceMappingURL=13_file.js.map