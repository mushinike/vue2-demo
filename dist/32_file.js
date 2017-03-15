webpackJsonp([32],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 8 */
/*!*****************************************!*\
  !*** ./~/vue-style-loader/addStyles.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/*!**********************************!*\
  !*** ./src/images/hamburger.png ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/50e4091c.hamburger.png";

/***/ },
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/*!*********************************************!*\
  !*** ./src/components/Tools/pagination.vue ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!../../../~/vue-loader/lib/selector.js?type=script&index=0!./pagination.vue */ 57)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\Tools\\pagination.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!../../../~/vue-loader/lib/selector.js?type=template&index=0!./pagination.vue */ 58)
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
/* 57 */
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
/* 58 */
/*!**********************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/components/Tools/pagination.vue ***!
  \**********************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "\n<el-pagination\n  @size-change=\"handleSizeChange\"\n  @current-change=\"handleCurrentChange\"\n  :current-page=\"currentPage\"\n  :page-sizes=\"pageSizes\"\n  :page-size=\"pageSize\"\n  layout=\"total, sizes, prev, pager, next, jumper\"\n  :total=\"total\">\n</el-pagination>\n";

/***/ },
/* 59 */,
/* 60 */
/*!*************************************************!*\
  !*** ./src/components/Product/product-list.vue ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-rewriter.js!../../../~/vue-loader/lib/selector.js?type=style&index=0!./product-list.vue */ 61)
	__vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!../../../~/vue-loader/lib/selector.js?type=script&index=0!./product-list.vue */ 63)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\Product\\product-list.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!../../../~/vue-loader/lib/selector.js?type=template&index=0!./product-list.vue */ 75)
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
	  var id = "_v-f42705ea/product-list.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 61 */
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./src/components/Product/product-list.vue ***!
  \**************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-rewriter.js!../../../~/vue-loader/lib/selector.js?type=style&index=0!./product-list.vue */ 62);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../../../~/vue-style-loader/addStyles.js */ 8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter.js!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./product-list.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter.js!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./product-list.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 62 */
/*!*****************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./src/components/Product/product-list.vue ***!
  \*****************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 7)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.product-content{overflow: hidden;}\r\n.product-content-ul li{float:left;margin-right:36px;margin-bottom: 30px;}\r\n.product-content-ul li img{vertical-align: top;width:220px}\r\n.product-content-ul li.marginRight0{margin-right: 0;}\r\n.page-center{margin: 0 auto;text-align: center;}\r\n\t\r\n", "", {"version":3,"sources":["/./src/components/Product/product-list.vue?2908d610"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;AA2BA,iBAAA,iBAAA,CAAA;AACA,uBAAA,WAAA,kBAAA,oBAAA,CAAA;AACA,2BAAA,oBAAA,WAAA,CAAA;AACA,oCAAA,gBAAA,CAAA;AACA,aAAA,eAAA,mBAAA,CAAA","file":"product-list.vue","sourcesContent":["<template>\r\n\t<el-card class=\"box-card\">\r\n\t\t<div slot=\"header\" class=\"clearfix\">\r\n   \t\t\t<span >产品列表</span>\r\n   \t\t\t<span style=\"float:right\">首页>产品展示</span>\r\n  \t\t</div>\r\n\t\t<div class=\"product-content\">\r\n\t\t\t<ul class=\"clearfix product-content-ul\">\r\n\t\t\t\t<li v-for=\"(item,key,index) in items\" :class=\"{marginRight0:(key+1)%4==0}\">\r\n\t\t\t\t\t<el-card :body-style=\"{ padding: '5px' }\">\r\n\t\t\t\t\t\t<img src=\"../../images/hamburger.png\"  class=\"image\">\r\n\t\t\t\t\t\t<div >\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<span>{{item.title}}</span>\r\n\t\t\t\t\t\t\t<div class=\"bottom clearfix\">\r\n\t\t\t\t\t\t\t  <span class=\"time\">{{item.date}}</span>\r\n\t\t\t\t\t\t\t  <router-link :to=\"{path:'/product/detail/',name:'product-detail',params:{id:item.id}}\">查看详情</router-link>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t    </el-card>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t\t<page class=\"page-center\" :total=\"total\" :page-size=\"pageSize\" :page-sizes=\"[8,16,24,50]\"  @size-change=\"sizeChange\"  @page-change=\"pageChange\"></page>\r\n\t\t</div>\r\n\t</el-card>\r\n</template>\r\n<style>\r\n.product-content{overflow: hidden;}\r\n.product-content-ul li{float:left;margin-right:36px;margin-bottom: 30px;}\r\n.product-content-ul li img{vertical-align: top;width:220px}\r\n.product-content-ul li.marginRight0{margin-right: 0;}\r\n.page-center{margin: 0 auto;text-align: center;}\r\n\t\r\n</style>\r\n\r\n<script>\r\nimport datas from \"./product-datas\";\r\nimport page from \"../Tools/pagination\";\r\n\r\nexport default{\r\n\tdata:function (){\r\n\t\treturn {\r\n\t\t\titems:[],\r\n\t\t\ttotal:0,\r\n\t\t\tpageSize:8\r\n\t\t}\r\n\t\t\r\n\t},\r\n\tbeforeRouteEnter:function(to,from,next){\r\n\t\tvar items=datas.getPageDatas(1,8);\r\n\t\t\r\n\t\tnext(function(vm){\r\n\t\t\tvm.items=items;\r\n\t\t\tvm.total=datas.total;\r\n\t\t});\r\n\t\t\r\n\t},\r\n\tmethods:{\r\n\t\tpageChange:function(val){\r\n\t\t\tthis.items=datas.getPageDatas(val,datas.pageNum);\r\n\t\t\tthis.total=datas.total;\r\n\t\t},\r\n\t\tsizeChange:function(val){\r\n\t\t\tthis.items=datas.getPageDatas(datas.pageIndex,val);\r\n\t\t\tthis.total=datas.total;\r\n\t\t\tthis.pageSize=val;\r\n\t\t},\r\n\t\tpageInit:function(){\r\n\t\t\tthis.items=datas.getPageDatas(1,8);\r\n\t\t\tthis.total=datas.total;\r\n\t\t}\r\n\t},\r\n\tmounted:function(){\r\n\r\n\t\t//this.pageInit();\r\n\t},\r\n\tcomponents:{\r\n\t\tpage\r\n\t},\r\n}\r\n\t\r\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 63 */
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/vue-loader/lib/selector.js?type=script&index=0!./src/components/Product/product-list.vue ***!
  \*************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _productDatas = __webpack_require__(/*! ./product-datas */ 64);
	
	var _productDatas2 = _interopRequireDefault(_productDatas);
	
	var _pagination = __webpack_require__(/*! ../Tools/pagination */ 56);
	
	var _pagination2 = _interopRequireDefault(_pagination);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		data: function data() {
			return {
				items: [],
				total: 0,
				pageSize: 8
			};
		},
		beforeRouteEnter: function beforeRouteEnter(to, from, next) {
			var items = _productDatas2.default.getPageDatas(1, 8);
	
			next(function (vm) {
				vm.items = items;
				vm.total = _productDatas2.default.total;
			});
		},
		methods: {
			pageChange: function pageChange(val) {
				this.items = _productDatas2.default.getPageDatas(val, _productDatas2.default.pageNum);
				this.total = _productDatas2.default.total;
			},
			sizeChange: function sizeChange(val) {
				this.items = _productDatas2.default.getPageDatas(_productDatas2.default.pageIndex, val);
				this.total = _productDatas2.default.total;
				this.pageSize = val;
			},
			pageInit: function pageInit() {
				this.items = _productDatas2.default.getPageDatas(1, 8);
				this.total = _productDatas2.default.total;
			}
		},
		mounted: function mounted() {},
		components: {
			page: _pagination2.default
		}
	};

/***/ },
/* 64 */
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
			obj.src = __webpack_require__(/*! ../../images/pic_1.jpg */ 65);
			obj.images = [];
			obj.images.push(__webpack_require__(/*! ../../images/1.jpg */ 66));
			obj.images.push(__webpack_require__(/*! ../../images/2.jpg */ 67));
			obj.images.push(__webpack_require__(/*! ../../images/3.jpg */ 68));
			obj.images.push(__webpack_require__(/*! ../../images/4.jpg */ 69));
			obj.images.push(__webpack_require__(/*! ../../images/5.jpg */ 70));
			obj.images.push(__webpack_require__(/*! ../../images/6.jpg */ 71));
			obj.images.push(__webpack_require__(/*! ../../images/7.jpg */ 72));
			obj.images.push(__webpack_require__(/*! ../../images/8.jpg */ 73));
			obj.images.push(__webpack_require__(/*! ../../images/9.jpg */ 74));
	
			return obj;
		},
		getPageDatas: function getPageDatas(pageIndex, pageNum) {
			var retArrs = [];
			this.total = 3500;
			this.pageIndex = pageIndex;
			this.pageNum = pageNum;
			pageIndex = pageIndex < 1 ? 1 : pageIndex;
			pageNum = pageNum < 0 ? 0 : pageNum;
			var pageStart = (pageIndex - 1) * pageNum;
			var pageEnd = pageStart + pageNum;
			pageEnd = pageEnd > this.total ? this.total + 1 : pageEnd;
			var obj;
	
			for (; pageStart < pageEnd; pageStart++) {
				obj = {};
				obj.id = pageStart;
				obj.title = "产品名称" + pageStart;
				obj.content = "产品内容" + pageStart;
				obj.date = new Date().toLocaleDateString();
				obj.src = __webpack_require__(/*! ../../images/hamburger.png */ 19);
				obj.images = [];
				obj.images.push(__webpack_require__(/*! ../../images/1.jpg */ 66));
				obj.images.push(__webpack_require__(/*! ../../images/2.jpg */ 67));
				obj.images.push(__webpack_require__(/*! ../../images/3.jpg */ 68));
				obj.images.push(__webpack_require__(/*! ../../images/4.jpg */ 69));
				obj.images.push(__webpack_require__(/*! ../../images/5.jpg */ 70));
				obj.images.push(__webpack_require__(/*! ../../images/6.jpg */ 71));
				obj.images.push(__webpack_require__(/*! ../../images/7.jpg */ 72));
				obj.images.push(__webpack_require__(/*! ../../images/8.jpg */ 73));
				obj.images.push(__webpack_require__(/*! ../../images/9.jpg */ 74));
	
				retArrs.push(obj);
			}
	
			return retArrs;
		},
		total: 0,
		pageIndex: 0,
		pageNum: 0
	
	};

/***/ },
/* 65 */
/*!******************************!*\
  !*** ./src/images/pic_1.jpg ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/3592d69e.pic_1.jpg";

/***/ },
/* 66 */
/*!**************************!*\
  !*** ./src/images/1.jpg ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/f8db9259.1.jpg";

/***/ },
/* 67 */
/*!**************************!*\
  !*** ./src/images/2.jpg ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/b5e29614.2.jpg";

/***/ },
/* 68 */
/*!**************************!*\
  !*** ./src/images/3.jpg ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/11b3f34e.3.jpg";

/***/ },
/* 69 */
/*!**************************!*\
  !*** ./src/images/4.jpg ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/89681310.4.jpg";

/***/ },
/* 70 */
/*!**************************!*\
  !*** ./src/images/5.jpg ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/725a58ab.5.jpg";

/***/ },
/* 71 */
/*!**************************!*\
  !*** ./src/images/6.jpg ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/b3638470.6.jpg";

/***/ },
/* 72 */
/*!**************************!*\
  !*** ./src/images/7.jpg ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/d35f34f7.7.jpg";

/***/ },
/* 73 */
/*!**************************!*\
  !*** ./src/images/8.jpg ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/dfd3ecb1.8.jpg";

/***/ },
/* 74 */
/*!**************************!*\
  !*** ./src/images/9.jpg ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/e3a71e1e.9.jpg";

/***/ },
/* 75 */
/*!**************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/components/Product/product-list.vue ***!
  \**************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<el-card class=\"box-card\">\n\t\t<div slot=\"header\" class=\"clearfix\">\n   \t\t\t<span >产品列表</span>\n   \t\t\t<span style=\"float:right\">首页>产品展示</span>\n  \t\t</div>\n\t\t<div class=\"product-content\">\n\t\t\t<ul class=\"clearfix product-content-ul\">\n\t\t\t\t<li v-for=\"(item,key,index) in items\" :class=\"{marginRight0:(key+1)%4==0}\">\n\t\t\t\t\t<el-card :body-style=\"{ padding: '5px' }\">\n\t\t\t\t\t\t<img src=\"" + __webpack_require__(/*! ../../images/hamburger.png */ 19) + "\"  class=\"image\">\n\t\t\t\t\t\t<div >\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<span>{{item.title}}</span>\n\t\t\t\t\t\t\t<div class=\"bottom clearfix\">\n\t\t\t\t\t\t\t  <span class=\"time\">{{item.date}}</span>\n\t\t\t\t\t\t\t  <router-link :to=\"{path:'/product/detail/',name:'product-detail',params:{id:item.id}}\">查看详情</router-link>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t    </el-card>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<page class=\"page-center\" :total=\"total\" :page-size=\"pageSize\" :page-sizes=\"[8,16,24,50]\"  @size-change=\"sizeChange\"  @page-change=\"pageChange\"></page>\n\t\t</div>\n\t</el-card>\n";

/***/ }
]);
//# sourceMappingURL=32_file.js.map