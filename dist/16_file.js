webpackJsonp([16],{

/***/ 66:
/*!***************************************************!*\
  !*** ./src/components/Product/product-detail.vue ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-rewriter.js!../../../~/vue-loader/lib/selector.js?type=style&index=0!./product-detail.vue */ 79)
	__vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!../../../~/vue-loader/lib/selector.js?type=script&index=0!./product-detail.vue */ 67)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\Product\\product-detail.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!../../../~/vue-loader/lib/selector.js?type=template&index=0!./product-detail.vue */ 68)
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
	  var id = "_v-afa01c04/product-detail.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 67:
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/vue-loader/lib/selector.js?type=script&index=0!./src/components/Product/product-detail.vue ***!
  \***************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _productDatas = __webpack_require__(/*! ./product-datas */ 69);
	
	var _productDatas2 = _interopRequireDefault(_productDatas);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		data: function data() {
			return { item: {} };
		},
		beforeRouteEnter: function beforeRouteEnter(to, from, next) {
			var item = _productDatas2.default.getOneData(to.params.id);
			next(function (vm) {
				vm.item = item;
			});
		},
		mounted: function mounted() {}
	};

/***/ },

/***/ 68:
/*!****************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/components/Product/product-detail.vue ***!
  \****************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "\n\t<el-card class=\"box-card\">\n\t\t<div slot=\"header\" class=\"clearfix\">\n   \t\t\t<span >产品明细</span>\n   \t\t\t<span style=\"float:right\">首页>产品展示</span>\n  \t\t</div>\n\t\t<div class=\"product-detail-content\">\n\t\t\t<div >\n\t\t\t\t<div class=\"product-detail-image\"><img :src=\"item.src\" /></div>\n\t\t\t\t<div class=\"product-detail-title\">\n\t\t\t\t\t<h3>{{item.title}}</h3>\n\t\t\t\t\t<br />\n\t\t\t\t\t<p>{{item.date}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"product-detail-body clearfix\">\n\t\t\t\t<el-tabs active-name=\"second\" type=\"card\">\n\t\t\t    \t<el-tab-pane label=\"产品内容\" name=\"first\">{{item.content}}</el-tab-pane>\n\t\t\t    \t<el-tab-pane label=\"图片展示\" name=\"second\">\n\t\t\t    \t\t<div v-for=\"img in item.images\"><img  :src=\"img\" /></div>\n\t\t\t    \t\t\n\t\t\t    \t</el-tab-pane>\n\t\t\t\t</el-tabs>\n\t\t\t</div>\n\t\t</div>\n\t</el-card>\n";

/***/ },

/***/ 69:
/*!*************************************************!*\
  !*** ./src/components/Product/product-datas.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		getOneData: function getOneData(id) {
			var obj = {};
			obj.id = id;
			obj.title = "产品名称" + id;
			obj.content = "产品内容" + id;
			obj.date = new Date().toLocaleDateString();
			obj.src = __webpack_require__(/*! ../../images/pic_1.jpg */ 81);
			obj.images = [];
			obj.images.push(__webpack_require__(/*! ../../images/1.jpg */ 70));
			obj.images.push(__webpack_require__(/*! ../../images/2.jpg */ 71));
			obj.images.push(__webpack_require__(/*! ../../images/3.jpg */ 72));
			obj.images.push(__webpack_require__(/*! ../../images/4.jpg */ 73));
			obj.images.push(__webpack_require__(/*! ../../images/5.jpg */ 74));
			obj.images.push(__webpack_require__(/*! ../../images/6.jpg */ 75));
			obj.images.push(__webpack_require__(/*! ../../images/7.jpg */ 76));
			obj.images.push(__webpack_require__(/*! ../../images/8.jpg */ 77));
			obj.images.push(__webpack_require__(/*! ../../images/9.jpg */ 78));
	
			return obj;
		},
		getPageDatas: function getPageDatas(pageIndex, pageNum) {
			var retArrs = [];
			this.total = 3500;
			this.pageIndex = pageIndex;
			this.pageNum = pageNum;
			pageIndex = pageIndex < 1 ? 1 : pageIndex;
			pageNum = pageNum < 0 ? 0 : pageNum;
			var pageStart = (pageIndex - 1) * pageNum + 1;
			var pageEnd = pageStart + pageNum;
			var obj;
	
			for (; pageStart < pageEnd; pageStart++) {
				obj = {};
				obj.id = pageStart;
				obj.title = "产品名称" + pageStart;
				obj.content = "产品内容" + pageStart;
				obj.date = new Date().toLocaleDateString();
				obj.src = __webpack_require__(/*! ../../images/hamburger.png */ 18);
				obj.images = [];
				obj.images.push(__webpack_require__(/*! ../../images/1.jpg */ 70));
				obj.images.push(__webpack_require__(/*! ../../images/2.jpg */ 71));
				obj.images.push(__webpack_require__(/*! ../../images/3.jpg */ 72));
				obj.images.push(__webpack_require__(/*! ../../images/4.jpg */ 73));
				obj.images.push(__webpack_require__(/*! ../../images/5.jpg */ 74));
				obj.images.push(__webpack_require__(/*! ../../images/6.jpg */ 75));
				obj.images.push(__webpack_require__(/*! ../../images/7.jpg */ 76));
				obj.images.push(__webpack_require__(/*! ../../images/8.jpg */ 77));
				obj.images.push(__webpack_require__(/*! ../../images/9.jpg */ 78));
	
				retArrs.push(obj);
			}
	
			return retArrs;
		},
		total: 0,
		pageIndex: 0,
		pageNum: 0
	
	};

/***/ },

/***/ 70:
/*!**************************!*\
  !*** ./src/images/1.jpg ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/f8db9259.1.jpg";

/***/ },

/***/ 71:
/*!**************************!*\
  !*** ./src/images/2.jpg ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/b5e29614.2.jpg";

/***/ },

/***/ 72:
/*!**************************!*\
  !*** ./src/images/3.jpg ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/11b3f34e.3.jpg";

/***/ },

/***/ 73:
/*!**************************!*\
  !*** ./src/images/4.jpg ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/89681310.4.jpg";

/***/ },

/***/ 74:
/*!**************************!*\
  !*** ./src/images/5.jpg ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/725a58ab.5.jpg";

/***/ },

/***/ 75:
/*!**************************!*\
  !*** ./src/images/6.jpg ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/b3638470.6.jpg";

/***/ },

/***/ 76:
/*!**************************!*\
  !*** ./src/images/7.jpg ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/d35f34f7.7.jpg";

/***/ },

/***/ 77:
/*!**************************!*\
  !*** ./src/images/8.jpg ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/dfd3ecb1.8.jpg";

/***/ },

/***/ 78:
/*!**************************!*\
  !*** ./src/images/9.jpg ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/e3a71e1e.9.jpg";

/***/ },

/***/ 79:
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./src/components/Product/product-detail.vue ***!
  \****************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-rewriter.js!../../../~/vue-loader/lib/selector.js?type=style&index=0!./product-detail.vue */ 80);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../../../~/vue-style-loader/addStyles.js */ 6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter.js!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./product-detail.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter.js!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./product-detail.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 80:
/*!*******************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./src/components/Product/product-detail.vue ***!
  \*******************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.product-detail-image{float: left;display: inline;margin-left:100px;margin-bottom: 50px;margin-right: 50px;}\r\n.product-detail-title{float: left;}\r\n.product-detail-body{margin-bottom: 50px;}\r\n", "", {"version":3,"sources":["/./src/components/Product/product-detail.vue?1ce81652"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA8BA,sBAAA,YAAA,gBAAA,kBAAA,oBAAA,mBAAA,CAAA;AACA,sBAAA,YAAA,CAAA;AACA,qBAAA,oBAAA,CAAA","file":"product-detail.vue","sourcesContent":["<template>\r\n\t<el-card class=\"box-card\">\r\n\t\t<div slot=\"header\" class=\"clearfix\">\r\n   \t\t\t<span >产品明细</span>\r\n   \t\t\t<span style=\"float:right\">首页>产品展示</span>\r\n  \t\t</div>\r\n\t\t<div class=\"product-detail-content\">\r\n\t\t\t<div >\r\n\t\t\t\t<div class=\"product-detail-image\"><img :src=\"item.src\" /></div>\r\n\t\t\t\t<div class=\"product-detail-title\">\r\n\t\t\t\t\t<h3>{{item.title}}</h3>\r\n\t\t\t\t\t<br />\r\n\t\t\t\t\t<p>{{item.date}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class=\"product-detail-body clearfix\">\r\n\t\t\t\t<el-tabs active-name=\"second\" type=\"card\">\r\n\t\t\t    \t<el-tab-pane label=\"产品内容\" name=\"first\">{{item.content}}</el-tab-pane>\r\n\t\t\t    \t<el-tab-pane label=\"图片展示\" name=\"second\">\r\n\t\t\t    \t\t<div v-for=\"img in item.images\"><img  :src=\"img\" /></div>\r\n\t\t\t    \t\t\r\n\t\t\t    \t</el-tab-pane>\r\n\t\t\t\t</el-tabs>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</el-card>\r\n</template>\r\n\r\n<style>\r\n.product-detail-image{float: left;display: inline;margin-left:100px;margin-bottom: 50px;margin-right: 50px;}\r\n.product-detail-title{float: left;}\r\n.product-detail-body{margin-bottom: 50px;}\r\n</style>\r\n\r\n<script>\r\nimport datas from \"./product-datas\";\r\n\r\nexport default{\r\n\tdata:function(){\r\n\t\treturn {item:{}}\r\n\t},\r\n\tbeforeRouteEnter:function(to,from,next){\r\n\t\tvar item=datas.getOneData(to.params.id);\r\n\t\tnext(function(vm){\r\n\t\t\tvm.item=item;\r\n\t\t});\r\n\t},\r\n\tmounted:function(){\r\n\t\t\r\n\t}\r\n}\r\n\t\r\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 81:
/*!******************************!*\
  !*** ./src/images/pic_1.jpg ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/3592d69e.pic_1.jpg";

/***/ }

});
//# sourceMappingURL=16_file.js.map