webpackJsonp([12],{

/***/ 32:
/*!****************************************!*\
  !*** ./src/components/About/about.vue ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-rewriter.js!../../../~/vue-loader/lib/selector.js?type=style&index=0!./about.vue */ 33)
	__vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!../../../~/vue-loader/lib/selector.js?type=script&index=0!./about.vue */ 35)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\About\\about.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!../../../~/vue-loader/lib/selector.js?type=template&index=0!./about.vue */ 37)
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
	  var id = "_v-126ed86c/about.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 33:
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./src/components/About/about.vue ***!
  \*****************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-rewriter.js!../../../~/vue-loader/lib/selector.js?type=style&index=0!./about.vue */ 34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../../../~/vue-style-loader/addStyles.js */ 6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter.js!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./about.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter.js!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./about.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 34:
/*!********************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./src/components/About/about.vue ***!
  \********************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.about-content{overflow: hidden;}\n", "", {"version":3,"sources":["/./src/components/About/about.vue?8a72a0a6"],"names":[],"mappings":";;;;;;;;;;;;;;;;AAgBA,eAAA,iBAAA,CAAA","file":"about.vue","sourcesContent":["<template>\r\n\t\r\n\t<el-card class=\"box-card\">\r\n\t\t<div slot=\"header\" class=\"clearfix\">\r\n   \t\t\t<span >关于我们</span>\r\n   \t\t\t<span style=\"float:right\">首页>关于我们</span>\r\n  \t\t</div>\r\n\t\t<div class=\"about-content\">\r\n\t\t\t<p>{{message}}</p>\r\n\t\t\t<p><img :src=\"image\" /></p>\r\n\t\t\r\n\t\t</div>\r\n\t</el-card>\r\n</template>\r\n\r\n<style>\r\n\t.about-content{overflow: hidden;}\r\n</style>\r\n\r\n<script>\r\nimport about from \"./about-content.js\";\r\n\r\nexport default{\r\n\tdata:function(){\r\n\t\treturn {\r\n\t\t\tmessage:\"\",\r\n\t\t\timage:\"\"\r\n\t\t}\r\n\t},\r\n\tmounted:function(){\r\n\t\tif(this.$root.about){\r\n\t\t\tthis.message=this.$root.about;\r\n\t\t}else{\r\n\t\t\tthis.$root.about=this.message=about.getAboutData();\r\n\t\t}\r\n\t\t\r\n\t\tthis.image=require(\"../../images/about.jpg\");\r\n\t}\r\n}\r\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 35:
/*!****************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/vue-loader/lib/selector.js?type=script&index=0!./src/components/About/about.vue ***!
  \****************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _aboutContent = __webpack_require__(/*! ./about-content.js */ 13);
	
	var _aboutContent2 = _interopRequireDefault(_aboutContent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		data: function data() {
			return {
				message: "",
				image: ""
			};
		},
		mounted: function mounted() {
			if (this.$root.about) {
				this.message = this.$root.about;
			} else {
				this.$root.about = this.message = _aboutContent2.default.getAboutData();
			}
	
			this.image = __webpack_require__(/*! ../../images/about.jpg */ 36);
		}
	};

/***/ },

/***/ 36:
/*!******************************!*\
  !*** ./src/images/about.jpg ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/fe5f1f2c.about.jpg";

/***/ },

/***/ 37:
/*!*****************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/components/About/about.vue ***!
  \*****************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "\n\t\n\t<el-card class=\"box-card\">\n\t\t<div slot=\"header\" class=\"clearfix\">\n   \t\t\t<span >关于我们</span>\n   \t\t\t<span style=\"float:right\">首页>关于我们</span>\n  \t\t</div>\n\t\t<div class=\"about-content\">\n\t\t\t<p>{{message}}</p>\n\t\t\t<p><img :src=\"image\" /></p>\n\t\t\n\t\t</div>\n\t</el-card>\n";

/***/ }

});
//# sourceMappingURL=12_file.js.map