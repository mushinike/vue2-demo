webpackJsonp([9],{

/***/ 7:
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

/***/ 8:
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

/***/ 91:
/*!***************************************************!*\
  !*** ./~/babel-runtime/core-js/json/stringify.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/json/stringify */ 92), __esModule: true };

/***/ },

/***/ 92:
/*!****************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/fn/json/stringify.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(/*! ../../modules/$.core */ 93);
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
	};

/***/ },

/***/ 93:
/*!*************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.core.js ***!
  \*************************************************************/
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },

/***/ 101:
/*!*************************************************!*\
  !*** ./src/components/admin/login/register.vue ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../../~/vue-loader/lib/style-rewriter.js!../../../../~/vue-loader/lib/selector.js?type=style&index=0!./register.vue */ 102)
	__vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!../../../../~/vue-loader/lib/selector.js?type=script&index=0!./register.vue */ 104)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\admin\\login\\register.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!../../../../~/vue-loader/lib/selector.js?type=template&index=0!./register.vue */ 106)
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
	  var id = "_v-4b7bc145/register.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 102:
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./src/components/admin/login/register.vue ***!
  \**************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../../../../~/css-loader?sourceMap!../../../../~/vue-loader/lib/style-rewriter.js!../../../../~/vue-loader/lib/selector.js?type=style&index=0!./register.vue */ 103);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../../../../~/vue-style-loader/addStyles.js */ 8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./register.vue", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./register.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 103:
/*!*****************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./src/components/admin/login/register.vue ***!
  \*****************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../../~/css-loader/lib/css-base.js */ 7)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.login-content{\r\n\twidth:500px;\r\n\tmargin:100px auto;\r\n}\r\n", "", {"version":3,"sources":["/./src/components/admin/login/register.vue?f26209ba"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA0FA;CACA,YAAA;CACA,kBAAA;CACA","file":"register.vue","sourcesContent":["<template>\r\n\t<el-card class=\"box-card\">\r\n\t\t<div slot=\"header\" class=\"clearfix\">\r\n\t\t\t<span>用户注册中心</span>\r\n\t\t\t<span class=\"floatRight\">首页>管理中心</el-button>\r\n\t\t</div>\r\n\t\t<div class=\"login-content\">\r\n\t\t\t<el-form :rules=\"rules\" ref=\"ruleForm\" label-width=\"100px\" :model=\"formLabelAlign\">\r\n\t\t\t  <el-form-item label=\"用户名称\" prop=\"name\">\r\n\t\t\t    <el-input v-model=\"formLabelAlign.name\"></el-input>\r\n\t\t\t  </el-form-item>\r\n\t\t\t  <el-form-item label=\"密码\" prop=\"password\">\r\n\t\t\t    <el-input type=\"password\" v-model=\"formLabelAlign.password\"></el-input>\r\n\t\t\t  </el-form-item>\r\n\t\t\t  <el-form-item label=\"确认密码\" prop=\"password1\">\r\n\t\t\t    <el-input type=\"password\" v-model=\"formLabelAlign.password1\"></el-input>\r\n\t\t\t  </el-form-item>\r\n\t\t\t  <el-form-item style=\"padding-top:15px;\">\r\n\t\t\t    <el-button type=\"primary\" @click=\"submitForm('ruleForm')\">立即创建</el-button>\r\n\t\t\t    <el-button @click=\"resetForm('ruleForm')\">重置</el-button>\r\n\t\t\t  </el-form-item>\r\n\t\t\t</el-form>\r\n\t\t</div>\r\n\t</el-card>\r\n</template>\r\n\r\n<script>\r\nimport data from \"./user-datas\";\r\n\t\r\nexport default{\r\n\tdata:function(){\r\n\t\tvar validatePass2 = (rule, value, callback) => {\r\n\t        if (value === '') {\r\n\t          callback(new Error('请再次输入密码'));\r\n\t        } else if (value !== this.formLabelAlign.password) {\r\n\t          callback(new Error('两次输入密码不一致!'));\r\n\t        } else {\r\n\t          callback();\r\n\t        }\r\n\t    };\r\n\r\n\t\treturn {\r\n\t\t\tformLabelAlign:{\r\n\t\t\t\tid:0,\r\n\t\t\t\tname:\"\",\r\n\t\t\t\tpassword:\"\",\r\n\t\t\t\tpassword1:\"\",\r\n\t\t\t\tdate:(new Date()).toLocaleString()\r\n\t\t\t},\r\n\t\t\trules:{\r\n\t\t\t\tname:[\r\n\t\t\t\t\t{ required: true, message: '请输入用户名称', trigger: 'blur' },\r\n\t\t\t\t\t{ min: 3, max: 5, message: '名称长度在 3 到 5 个字符', trigger: 'blur' }\r\n\t\t\t\t],\r\n\t\t\t\tpassword:[\r\n\t\t\t\t\t{ required: true, message: '请输入密码', trigger: 'blur' },\r\n\t\t\t\t\t{ min: 6, max: 12, message: '密码长度在6 到 12个字符', trigger: 'blur' }\r\n\t\t\t\t],\r\n\t\t\t\tpassword1:[\r\n\t\t\t\t\t{ required: true, message: '请输入确认密码', trigger: 'blur' },\r\n\t\t\t\t\t{ validator:validatePass2, trigger: 'blur' }\r\n\t\t\t\t]\r\n\t\t\t}\r\n\t\t}\r\n\t},\r\n\tmethods: {\r\n      submitForm(formName) {\r\n      \tvar _this=this;\r\n        _this.$refs[formName].validate((valid) => {\r\n          if (valid) {\r\n            data.add(_this.formLabelAlign);\r\n            sessionStorage[\"loginName\"]=JSON.stringify(_this.formLabelAlign);\r\n            _this.$router.push({\"path\":\"/admin/index/content\"});\r\n          } else {\r\n            return false;\r\n          }\r\n        });\r\n      },\r\n      resetForm(formName) {\r\n        this.$refs[formName].resetFields();\r\n      }\r\n    },\r\n    mounted:function(){\r\n    \tthis.id=data.getId();\r\n    }\r\n}\r\n\t\r\n</script>\r\n\r\n<style>\r\n.login-content{\r\n\twidth:500px;\r\n\tmargin:100px auto;\r\n}\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 104:
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/vue-loader/lib/selector.js?type=script&index=0!./src/components/admin/login/register.vue ***!
  \*************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ 91);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _userDatas = __webpack_require__(/*! ./user-datas */ 105);
	
	var _userDatas2 = _interopRequireDefault(_userDatas);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		data: function data() {
			var _this2 = this;
	
			var validatePass2 = function validatePass2(rule, value, callback) {
				if (value === '') {
					callback(new Error('请再次输入密码'));
				} else if (value !== _this2.formLabelAlign.password) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
	
			return {
				formLabelAlign: {
					id: 0,
					name: "",
					password: "",
					password1: "",
					date: new Date().toLocaleString()
				},
				rules: {
					name: [{ required: true, message: '请输入用户名称', trigger: 'blur' }, { min: 3, max: 5, message: '名称长度在 3 到 5 个字符', trigger: 'blur' }],
					password: [{ required: true, message: '请输入密码', trigger: 'blur' }, { min: 6, max: 12, message: '密码长度在6 到 12个字符', trigger: 'blur' }],
					password1: [{ required: true, message: '请输入确认密码', trigger: 'blur' }, { validator: validatePass2, trigger: 'blur' }]
				}
			};
		},
		methods: {
			submitForm: function submitForm(formName) {
				var _this = this;
				_this.$refs[formName].validate(function (valid) {
					if (valid) {
						_userDatas2.default.add(_this.formLabelAlign);
						sessionStorage["loginName"] = (0, _stringify2.default)(_this.formLabelAlign);
						_this.$router.push({ "path": "/admin/index/content" });
					} else {
						return false;
					}
				});
			},
			resetForm: function resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		},
		mounted: function mounted() {
			this.id = _userDatas2.default.getId();
		}
	};

/***/ },

/***/ 105:
/*!**************************************************!*\
  !*** ./src/components/admin/login/user-datas.js ***!
  \**************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		getOne: function getOne(userName, password) {
			var users = JSON.parse(sessionStorage["users"]),
			    user;
			for (var i = 0, ii = users.length; i < ii; i++) {
				user = users[i];
				if (userName == user.name && password && password == user.password) {
					return user;
				} else if (userName == user.name && !password) {
					return user;
				}
			}
	
			return {};
		},
		add: function add(addObj) {
			var obj = {};
			for (var key in addObj) {
				if (key != "password1") {
					obj[key] = addObj[key];
				}
			}
	
			var users = JSON.parse(sessionStorage["users"]);
			if (users.length > 1) {
				users.push(users);
			} else {
				users = [].concat(users, obj);
			}
	
			sessionStorage["users"] = JSON.stringify(users);
	
			return true;
		},
		edit: function edit(editObj) {
			var users = JSON.parse(sessionStorage["users"]);
	
			for (var i = 0, ii = users.length; i < ii; i++) {
				if (editObj.name == users[i].name) {
					users[i] = editObj;
					sessionStorage["users"] = JSON.stringify(users);
					return true;
				}
			}
	
			return false;
		},
		deleted: function deleted(userName) {
			var users = JSON.parse(sessionStorage["users"]);
			for (var i = 0, ii = users.length; i < ii; i++) {
				if (userName == users[i].name) {
					users.splice(i, 1);
					sessionStorage["users"] = JSON.stringify(users);
					return true;
				}
			}
	
			return false;
		},
		getPageDatas: function getPageDatas(pageIndex, pageNum) {
			var datas = JSON.parse(sessionStorage["users"]).reverse();
			var retArrs;
			this.total = datas.length;
			this.pageIndex = pageIndex;
			this.pageNum = pageNum;
			pageIndex = pageIndex < 1 ? 1 : pageIndex;
			pageNum = pageNum < 0 ? 0 : pageNum;
	
			var pageStart = (pageIndex - 1) * pageNum;
			var pageEnd = pageStart + pageNum > this.total ? this.total : pageStart + pageNum;
	
			retArrs = datas.slice(pageStart, pageEnd);
	
			return retArrs;
		},
		total: 0,
		pageIndex: 0,
		pageNum: 0,
		getId: function getId() {
			if (!sessionStorage["users"]) {
				var data = [];
				data.push({ name: "msnk", password: "123456", date: new Date().toLocaleDateString(), id: 1 });
	
				var obj = {};
				for (var i = 0, ii = 10; i < ii; i++) {
					obj = {};
					obj.name = "路人甲_" + i;
					obj.password = "123456";
					obj.date = new Date().toLocaleDateString();
					obj.id = i + 2;
					data.push(obj);
				}
				var str = JSON.stringify(data);
				sessionStorage["users"] = str;
			}
	
			var datas = JSON.parse(sessionStorage["users"]).reverse();
			return datas.length > 1 ? datas[1].id + 1 : datas.id + 1;
		}
	};

/***/ },

/***/ 106:
/*!**************************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/components/admin/login/register.vue ***!
  \**************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "\n<el-card class=\"box-card\">\n\t<div slot=\"header\" class=\"clearfix\">\n\t\t<span>用户注册中心</span>\n\t\t<span class=\"floatRight\">首页>管理中心</el-button>\n\t</div>\n\t<div class=\"login-content\">\n\t\t<el-form :rules=\"rules\" ref=\"ruleForm\" label-width=\"100px\" :model=\"formLabelAlign\">\n\t\t  <el-form-item label=\"用户名称\" prop=\"name\">\n\t\t    <el-input v-model=\"formLabelAlign.name\"></el-input>\n\t\t  </el-form-item>\n\t\t  <el-form-item label=\"密码\" prop=\"password\">\n\t\t    <el-input type=\"password\" v-model=\"formLabelAlign.password\"></el-input>\n\t\t  </el-form-item>\n\t\t  <el-form-item label=\"确认密码\" prop=\"password1\">\n\t\t    <el-input type=\"password\" v-model=\"formLabelAlign.password1\"></el-input>\n\t\t  </el-form-item>\n\t\t  <el-form-item style=\"padding-top:15px;\">\n\t\t    <el-button type=\"primary\" @click=\"submitForm('ruleForm')\">立即创建</el-button>\n\t\t    <el-button @click=\"resetForm('ruleForm')\">重置</el-button>\n\t\t  </el-form-item>\n\t\t</el-form>\n\t</div>\n</el-card>\n";

/***/ }

});