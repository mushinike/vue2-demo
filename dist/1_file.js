webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/*!****************************************!*\
  !*** ./src/components/Index/index.vue ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-rewriter.js!../../../~/vue-loader/lib/selector.js?type=style&index=0!./index.vue */ 5)
	__vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!../../../~/vue-loader/lib/selector.js?type=script&index=0!./index.vue */ 9)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\Index\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!../../../~/vue-loader/lib/selector.js?type=template&index=0!./index.vue */ 35)
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
	  var id = "_v-303ea636/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 5 */
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./src/components/Index/index.vue ***!
  \*****************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-rewriter.js!../../../~/vue-loader/lib/selector.js?type=style&index=0!./index.vue */ 6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../../../~/vue-style-loader/addStyles.js */ 8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter.js!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./index.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter.js!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/*!********************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./src/components/Index/index.vue ***!
  \********************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 7)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.borderRight{border-right:1px solid #999;}\n.card-title{height:40px;line-height: 30px;font-size: 15px;font-weight: bold;padding-bottom:10px;}\nfooter{margin:0 auto;text-align: center;height: 30px;line-height: 30px;}\n", "", {"version":3,"sources":["/./src/components/Index/index.vue?6e9b38f6"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;AAmBA,aAAA,4BAAA,CAAA;AACA,YAAA,YAAA,kBAAA,gBAAA,kBAAA,oBAAA,CAAA;AACA,OAAA,cAAA,mBAAA,aAAA,kBAAA,CAAA","file":"index.vue","sourcesContent":["<template>\r\n\t<section>\r\n\t\t<carousel></carousel>\r\n\t\t<about></about>\r\n\t\t<div class=\"clearfix\" style=\"height:20px;\"></div>\r\n\t\t\r\n\t\t<el-card class=\"box-card\">\r\n\t\t\t<el-row class=\"card-title\">\r\n\t\t\t  <el-col :span=\"18\">产品展示</el-col>\r\n\t\t\t  <el-col :span=\"6\">新闻中心</el-col>\r\n\t\t\t</el-row>\r\n\t\t  \t<el-row>\r\n\t\t\t  <el-col :span=\"18\" class=\"borderRight\"><product></about></el-col>\r\n\t\t\t  <el-col :span=\"6\"><news></news></el-col>\r\n\t\t\t</el-row>\r\n\t\t</el-card>\r\n\t</section>\r\n</template>\r\n<style>\r\n\t.borderRight{border-right:1px solid #999;}\r\n\t.card-title{height:40px;line-height: 30px;font-size: 15px;font-weight: bold;padding-bottom:10px;}\r\n\tfooter{margin:0 auto;text-align: center;height: 30px;line-height: 30px;}\r\n</style>\r\n\r\n<script>\r\nimport about from \"./index-about.vue\";\r\nimport product from \"./index-product.vue\";\r\nimport news from \"./index-news.vue\";\r\nimport carousel from \"./index-carousel.vue\";\r\n\r\nexport default{\r\n\tdata:function (){\r\n\t\treturn {\r\n\t\t\t\r\n\t\t}\r\n\t},\r\n\tmethods:{\r\n\t\thandleClick:function(tab,e){\r\n\r\n\t\t}\r\n\t},\r\n\tcomponents:{\r\n\t\tcarousel,\r\n\t\tabout,\r\n\t\tproduct,\r\n\t\tnews\r\n\t}\r\n}\r\n\t\r\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
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
/* 9 */
/*!****************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/vue-loader/lib/selector.js?type=script&index=0!./src/components/Index/index.vue ***!
  \****************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _indexAbout = __webpack_require__(/*! ./index-about.vue */ 10);
	
	var _indexAbout2 = _interopRequireDefault(_indexAbout);
	
	var _indexProduct = __webpack_require__(/*! ./index-product.vue */ 16);
	
	var _indexProduct2 = _interopRequireDefault(_indexProduct);
	
	var _indexNews = __webpack_require__(/*! ./index-news.vue */ 20);
	
	var _indexNews2 = _interopRequireDefault(_indexNews);
	
	var _indexCarousel = __webpack_require__(/*! ./index-carousel.vue */ 27);
	
	var _indexCarousel2 = _interopRequireDefault(_indexCarousel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		data: function data() {
			return {};
		},
		methods: {
			handleClick: function handleClick(tab, e) {}
		},
		components: {
			carousel: _indexCarousel2.default,
			about: _indexAbout2.default,
			product: _indexProduct2.default,
			news: _indexNews2.default
		}
	};

/***/ },
/* 10 */
/*!**********************************************!*\
  !*** ./src/components/Index/index-about.vue ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-rewriter.js!../../../~/vue-loader/lib/selector.js?type=style&index=0!./index-about.vue */ 11)
	__vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!../../../~/vue-loader/lib/selector.js?type=script&index=0!./index-about.vue */ 13)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\Index\\index-about.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!../../../~/vue-loader/lib/selector.js?type=template&index=0!./index-about.vue */ 15)
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
	  var id = "_v-083c6f36/index-about.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 11 */
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./src/components/Index/index-about.vue ***!
  \***********************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-rewriter.js!../../../~/vue-loader/lib/selector.js?type=style&index=0!./index-about.vue */ 12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../../../~/vue-style-loader/addStyles.js */ 8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter.js!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./index-about.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter.js!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./index-about.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/*!**************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./src/components/Index/index-about.vue ***!
  \**************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 7)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n.index-about-title{font-size: 15px;font-weight: bold;}\n.el-card__header{padding:10px;}\n", "", {"version":3,"sources":["/./src/components/Index/index-about.vue?e63b7cb0"],"names":[],"mappings":";;;;;;;;;;;AAWA,mBAAA,gBAAA,kBAAA,CAAA;AACA,iBAAA,aAAA,CAAA","file":"index-about.vue","sourcesContent":["<template>\r\n\t<div>\r\n\t\t<el-card class=\"box-card\">\r\n\t\t\t<div slot=\"header\" class=\"clearfix index-about-title\">公司简介</div>\r\n\t\t\t\r\n\t\t\t<div class=\"text item\">{{aboutContent}}</div>\r\n\t\t</el-card>\r\n\t</div>\r\n</template>\r\n\r\n<style>\r\n\t.index-about-title{font-size: 15px;font-weight: bold;}\r\n\t.el-card__header{padding:10px;}\r\n</style>\r\n\r\n<script>\r\nimport about from \"../About/about-content.js\";\r\n\r\nexport default{\r\n\tdata:function (){\r\n\t\treturn {\r\n\t\t\t//message:\"dddd\"\r\n\t\t\tmessage:\"\"\r\n\t\t\t}\r\n\t},\r\n\tcreated:function(){\r\n\t\tconsole.log(564)\r\n\t},\r\n\tmounted:function(){\r\n\t\tif(this.$root.about){\r\n\t\t\tthis.message=this.$root.about;\r\n\t\t}\r\n\t\telse{\r\n\t\t\tthis.$root.about=this.message=about.getAboutData();\r\n\t\t}\r\n\t},\r\n\tcomputed:{\r\n\t\taboutContent:function(){\r\n\t\t\tif(this.message.length>350){\r\n\t\t\t\treturn this.message.slice(0,350)+\"...\";\r\n\t\t\t}\r\n\r\n\t\t\treturn this.message;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n</script>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 13 */
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/vue-loader/lib/selector.js?type=script&index=0!./src/components/Index/index-about.vue ***!
  \**********************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _aboutContent = __webpack_require__(/*! ../About/about-content.js */ 14);
	
	var _aboutContent2 = _interopRequireDefault(_aboutContent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		data: function data() {
			return {
				message: ""
			};
		},
		created: function created() {
			console.log(564);
		},
		mounted: function mounted() {
			if (this.$root.about) {
				this.message = this.$root.about;
			} else {
				this.$root.about = this.message = _aboutContent2.default.getAboutData();
			}
		},
		computed: {
			aboutContent: function aboutContent() {
				if (this.message.length > 350) {
					return this.message.slice(0, 350) + "...";
				}
	
				return this.message;
			}
		}
	};

/***/ },
/* 14 */
/*!***********************************************!*\
  !*** ./src/components/About/about-content.js ***!
  \***********************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		getOne: function getOne() {
			return "腾讯成立于1998年11月，是目前中国领先的互联网增值服务提供商之一。成立10多年以来，腾讯一直秉承“一切以用户价值为依归”的经营理念，为亿级海量用户提供稳定优质的各类服务，始终处于稳健发展的状态。2004年6月16日，腾讯控股有限公司在香港联交所主板公开上市（股票代号700）。通过互联网服务提升人类生活品质是腾讯的使命。目前，腾讯把“连接一切”作为战略目标，提供社交平台与数字内容两项核心服务。通过即时通信工具QQ、移动社交和通信服务微信和WeChat、门户网站腾讯网（QQ.com）、腾讯游戏、社交网络平台QQ空间等中国领先的网络平台，满足互联网用户沟通、资讯、娱乐和金融等方面的需求。截至2016年第二季度，QQ的月活跃帐户数达到8.99亿，最高同时在线帐户数达到2.47亿；微信和WeChat的合并月活跃帐户数达8.06亿。腾讯的发展深刻地影响和改变了数以亿计网民的沟通方式和生活习惯，并为中国互联网行业开创了更加广阔的应用前景。面向未来，坚持自主创新，树立民族品牌是腾讯的长远发展规划。目前，腾讯50%以上员工为研发人员，拥有完善的自主研发体系，在存储技术、数据挖掘、多媒体、中文处理、分布式网络、无线技术六大方向都拥有了相当数量的专利，在全球互联网企业中专利申请和授权总量均位居前列。成为最受尊敬的互联网企业是腾讯的远景目标。腾讯一直积极参与公益事业、努力承担企业社会责任、推动网络文明。2006年，腾讯成立了中国互联网首家慈善公益基金会——腾讯慈善公益基金会，并建立了腾讯公益网（gongyi.qq.com）。秉承“致力公益慈善事业，关爱青少年成长，倡导企业公民责任，推动社会和谐进步”的宗旨，腾讯的每一项产品与业务都拥抱公益，开放互联，并倡导所有企业一起行动，通过互联网领域的技术、传播优势，缔造“人人可公益，民众齐参与”的互联网公益新生态。";
		}
	};

/***/ },
/* 15 */
/*!***********************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/components/Index/index-about.vue ***!
  \***********************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "\n<div>\n\t<el-card class=\"box-card\">\n\t\t<div slot=\"header\" class=\"clearfix index-about-title\">公司简介</div>\n\t\t\n\t\t<div class=\"text item\">{{aboutContent}}</div>\n\t</el-card>\n</div>\n";

/***/ },
/* 16 */
/*!************************************************!*\
  !*** ./src/components/Index/index-product.vue ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!../../../~/vue-loader/lib/selector.js?type=script&index=0!./index-product.vue */ 17)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\Index\\index-product.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!../../../~/vue-loader/lib/selector.js?type=template&index=0!./index-product.vue */ 18)
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
	  var id = "_v-dbfc1150/index-product.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 17 */
/*!************************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/vue-loader/lib/selector.js?type=script&index=0!./src/components/Index/index-product.vue ***!
  \************************************************************************************************************************************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
	
				items: [{ title: "产品名称1", id: 1, content: "产品描述1", "src": "000", date: "2017-3-8" }, { title: "产品名称2", id: 2, content: "产品描述2", "src": "000", date: "2017-3-8" }, { title: "产品名称3", id: 3, content: "产品描述3", "src": "000", date: "2017-3-8" }]
			};
		}
	};

/***/ },
/* 18 */
/*!*************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/components/Index/index-product.vue ***!
  \*************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div>\n\t<el-row>\n\t  <el-col :span=\"6\" v-for=\"(o, index) in items\" :offset=\"index > 0 ? 2 : 0\">\n\t    <el-card >\n\t      <img src=\"" + __webpack_require__(/*! ../../images/hamburger.png */ 19) + "\" width=\"150\">\n\t      <div style=\"padding: 14px;\">\n\t        <span>{{o.title}}</span>\n\t        <div class=\"bottom clearfix\">\n\t          <time class=\"time\">{{ o.date }}</time>\n\t          <el-button type=\"text\" class=\"button\">查看详细</el-button>\n\t        </div>\n\t      </div>\n\t    </el-card>\n\t  </el-col>\n\t</el-row>\n</div>\n\n";

/***/ },
/* 19 */
/*!**********************************!*\
  !*** ./src/images/hamburger.png ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/50e4091c.hamburger.png";

/***/ },
/* 20 */
/*!*********************************************!*\
  !*** ./src/components/Index/index-news.vue ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-rewriter.js!../../../~/vue-loader/lib/selector.js?type=style&index=0!./index-news.vue */ 21)
	__vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!../../../~/vue-loader/lib/selector.js?type=script&index=0!./index-news.vue */ 23)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\Index\\index-news.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!../../../~/vue-loader/lib/selector.js?type=template&index=0!./index-news.vue */ 26)
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
	  var id = "_v-2ae0838c/index-news.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 21 */
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./src/components/Index/index-news.vue ***!
  \**********************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-rewriter.js!../../../~/vue-loader/lib/selector.js?type=style&index=0!./index-news.vue */ 22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../../../~/vue-style-loader/addStyles.js */ 8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter.js!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./index-news.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter.js!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./index-news.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/*!*************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./src/components/Index/index-news.vue ***!
  \*************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 7)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\r\n.index-news-item{line-height: 28px;list-style-position: inside;padding-left:15px;}\r\n\t\r\n", "", {"version":3,"sources":["/./src/components/Index/index-news.vue?285e1747"],"names":[],"mappings":";;;;;;;;;;;AAWA,iBAAA,kBAAA,4BAAA,kBAAA,CAAA","file":"index-news.vue","sourcesContent":["<template>\r\n\t<div>\r\n\t\t<ul>\r\n\t\t  <li v-for=\"(value,key) in items\" class=\"text item index-news-item\">\r\n\t\t  \t\r\n\t\t    {{'列表名称 ' + value.title }}\r\n\t\t  </li>\r\n\t\t</ul>\r\n\t</div>\r\n</template>\r\n<style>\r\n.index-news-item{line-height: 28px;list-style-position: inside;padding-left:15px;}\r\n\t\r\n</style>\r\n<script>\r\nimport news from \"../News/news-datas.js\";\r\n\r\nexport default{\r\n\tdata:function(){\r\n\t\treturn {\r\n\t\t\titems:news.getPageDatas(0,1,10)\r\n\t\t}\r\n\t}\r\n}\r\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 23 */
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/vue-loader/lib/selector.js?type=script&index=0!./src/components/Index/index-news.vue ***!
  \*********************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _newsDatas = __webpack_require__(/*! ../News/news-datas.js */ 24);
	
	var _newsDatas2 = _interopRequireDefault(_newsDatas);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		data: function data() {
			return {
				items: _newsDatas2.default.getPageDatas(0, 1, 10)
			};
		}
	};

/***/ },
/* 24 */
/*!*******************************************!*\
  !*** ./src/components/News/news-datas.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		getData: function getData(id, type) {
			var obj,
			    typeStr = type == 1 ? "公司新闻" : "行业新闻";
			obj = {};
			obj.id = id;
			obj.type = type;
			obj.title = typeStr + " 新闻名称" + id;
			obj.content = "新闻内容" + id;
			obj.date = new Date().toLocaleDateString();
			obj.src = __webpack_require__(/*! ../../images/news-image.png */ 25);
	
			return obj;
		},
		getPageDatas: function getPageDatas() {
			var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
			var pageIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
			var pageNum = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
	
			//title:"新闻名称1",id:1,content:"新闻描述1","src":"000"
			var retArrs = [];
			this.total = 3500;
			this.pageIndex = pageIndex;
			this.pageNum = pageNum;
			pageIndex = pageIndex < 1 ? 1 : pageIndex;
			pageNum = pageNum < 0 ? 0 : pageNum;
			var pageStart = (pageIndex - 1) * pageNum;
			var pageEnd = pageStart + pageNum;
			var obj,
			    typeStr = "";
	
			if (type != 0) {
				typeStr = type == 1 ? "公司新闻" : "行业新闻";
			}
			for (; pageStart < pageEnd; pageStart++) {
				obj = {};
				obj.id = pageStart;
				obj.type = type;
				obj.title = typeStr + " 新闻名称" + pageStart;
				obj.content = "新闻内容" + pageStart;
				obj.date = new Date().toLocaleDateString();
				obj.src = __webpack_require__(/*! ../../images/news-image.png */ 25);
	
				retArrs.push(obj);
			}
	
			return retArrs;
		},
		total: 0,
		pageIndex: 0,
		pageNum: 0
	};

/***/ },
/* 25 */
/*!***********************************!*\
  !*** ./src/images/news-image.png ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/81010731.news-image.png";

/***/ },
/* 26 */
/*!**********************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/components/Index/index-news.vue ***!
  \**********************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "\n<div>\n\t<ul>\n\t  <li v-for=\"(value,key) in items\" class=\"text item index-news-item\">\n\t  \t\n\t    {{'列表名称 ' + value.title }}\n\t  </li>\n\t</ul>\n</div>\n";

/***/ },
/* 27 */
/*!*************************************************!*\
  !*** ./src/components/Index/index-carousel.vue ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!../../../~/vue-loader/lib/selector.js?type=script&index=0!./index-carousel.vue */ 28)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\Index\\index-carousel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!../../../~/vue-loader/lib/selector.js?type=template&index=0!./index-carousel.vue */ 34)
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
	  var id = "_v-4a2e7272/index-carousel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 28 */
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/vue-loader/lib/selector.js?type=script&index=0!./src/components/Index/index-carousel.vue ***!
  \*************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return { items: [] };
		},
		mounted: function mounted() {
			var obj;
			for (var i = 1, ii = 5; i < ii; i++) {
				obj = {};
				obj.src = __webpack_require__(/*! ../../images */ 29)("./flash" + i + ".jpg");
				obj.title = "轮询图" + i;
				obj.desc = "图片描述" + i;
				this.items.push(obj);
			}
		}
	};

/***/ },
/* 29 */
/*!***************************************!*\
  !*** ./src/images ^\.\/flash.*\.jpg$ ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./flash1.jpg": 30,
		"./flash2.jpg": 31,
		"./flash3.jpg": 32,
		"./flash4.jpg": 33
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 29;


/***/ },
/* 30 */
/*!*******************************!*\
  !*** ./src/images/flash1.jpg ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/aa029da9.flash1.jpg";

/***/ },
/* 31 */
/*!*******************************!*\
  !*** ./src/images/flash2.jpg ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/728666c3.flash2.jpg";

/***/ },
/* 32 */
/*!*******************************!*\
  !*** ./src/images/flash3.jpg ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/c06ea8be.flash3.jpg";

/***/ },
/* 33 */
/*!*******************************!*\
  !*** ./src/images/flash4.jpg ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/90fefcd6.flash4.jpg";

/***/ },
/* 34 */
/*!**************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/components/Index/index-carousel.vue ***!
  \**************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "\n<div>\n\t<el-carousel  indicator-position=\"outside\">\n\t    <el-carousel-item v-for=\"item in items\">\n\t      <img :src=\"item.src\" :alt=\"item.title\" width=\"100%\"  />\n\t    </el-carousel-item>\n\t</el-carousel>\n</div>\n \n";

/***/ },
/* 35 */
/*!*****************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/components/Index/index.vue ***!
  \*****************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "\n<section>\n\t<carousel></carousel>\n\t<about></about>\n\t<div class=\"clearfix\" style=\"height:20px;\"></div>\n\t\n\t<el-card class=\"box-card\">\n\t\t<el-row class=\"card-title\">\n\t\t  <el-col :span=\"18\">产品展示</el-col>\n\t\t  <el-col :span=\"6\">新闻中心</el-col>\n\t\t</el-row>\n\t  \t<el-row>\n\t\t  <el-col :span=\"18\" class=\"borderRight\"><product></about></el-col>\n\t\t  <el-col :span=\"6\"><news></news></el-col>\n\t\t</el-row>\n\t</el-card>\n</section>\n";

/***/ }
]);
//# sourceMappingURL=1_file.js.map