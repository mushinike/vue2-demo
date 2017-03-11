webpackJsonp([17],{

/***/ 61:
/*!************************************!*\
  !*** ./src/components/contact.vue ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-rewriter.js!../../~/vue-loader/lib/selector.js?type=style&index=0!./contact.vue */ 62)
	__vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!../../~/vue-loader/lib/selector.js?type=script&index=0!./contact.vue */ 64)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\contact.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!../../~/vue-loader/lib/selector.js?type=template&index=0!./contact.vue */ 65)
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
	  var id = "_v-5020cc2e/contact.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 62:
/*!*************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./src/components/contact.vue ***!
  \*************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-rewriter.js!../../~/vue-loader/lib/selector.js?type=style&index=0!./contact.vue */ 63);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../../~/vue-style-loader/addStyles.js */ 6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js!../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./contact.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js!../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./contact.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 63:
/*!****************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./src/components/contact.vue ***!
  \****************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n.contact-content{text-align: left;line-height: 28px;}\n", "", {"version":3,"sources":["/./src/components/contact.vue?48d498bc"],"names":[],"mappings":";;;;;;;;;;;;AAYA,iBAAA,iBAAA,kBAAA,CAAA","file":"contact.vue","sourcesContent":["<template>\r\n\t<el-card class=\"box-card\">\r\n\t\t<div slot=\"header\" class=\"clearfix\">\r\n   \t\t\t<span >联系我们</span>\r\n   \t\t\t<span style=\"float:right\">首页>联系我们</span>\r\n  \t\t</div>\r\n\t\t<div class=\"contact-content\">\r\n\t\t\t<p v-html=\"message\"></p>\r\n\t\t</div>\r\n\t</el-card>\r\n</template>\r\n<style>\r\n\t.contact-content{text-align: left;line-height: 28px;}\r\n</style>\r\n<script>\r\nexport default{\r\n\tdata:function (){\r\n\t\treturn {message:\"新浪网客户服务 受理新浪网客户问题，包括产品咨询、技术支持、投诉受理、建议反馈，以及购买帮助等。<br/> 客户服务热线:4006900000 EMAIL:sinacsc@vip.sina.com 微博官方账号请@新浪客服 各产品详情请联系客服。<br/> 新浪网广告销售 广告销售部 新浪广告官方服务微博：@新浪广告 http://weibo.com/sinaemarketing 广告产品介绍请查看：http://emarketing.sina.com.cn 新浪品牌广告及效果广告产品购买，请咨询新浪广告热线：4008812813 新浪商业运营客户服务官方微博：@微博广告-渠道 http://weibo.com/wbguanggao 效果广告产品介绍请查看： http://e.sina.com.cn/ <br/>新浪网新闻热线 给新浪网提供新闻线索,重大新闻爆料 自由撰稿稿件采购协议书 新浪网各频道合作及分类 内容报道合作—欢迎各类媒体、影视剧公司、制作公司、专业网站、出版社、协会等与我们联系，在各类文字、图片、音视频资讯等方面建立长期合作。<br/> 活动合作—欢迎各方与新浪网洽谈推广会议、论坛、演唱会、大奖赛、巡展或体育赛事等各类活动。通过新浪的报道推广，扩大相关活动的影响力。 <br/>出版合作—欢迎各大出版社与新浪合作各类图书内容。<br/>Tel：(86-10)52719381 新浪财经（产品） Tel：4006900000转2 Email：fincsc@staff.sina.com.cn 新浪无线 移动增值产品、语音增值业务——WAP、订阅、下载、彩铃、IVR（交互式语音应答） Tel：4000130130 Email：gzkf@staff.sina.com.cn <br/>新浪微博 客户服务热线： 4000960960 （个人） 4000980980（企业） 新浪邮箱产品 邮箱——提供免费邮箱/VIP收费邮箱/企业邮箱服务 （VIP收费邮箱/免费邮箱）客户服务电话： 4006900000转5 （企业邮箱服务）客户服务电话： 4006900000转4 免费邮箱：webcn@staff.sina.com.cn VIP收费邮箱：webmaster@vip.sina.com 企业邮箱：kf@sina.net <br/>新浪网办公地址和总机电话 北京市海淀区西北旺东路10号院西区8号楼新浪总部大厦 No.8 Sina Plaza Courtyard 10, the West XiBeiWang E.Rd HaiDian District Beijing 邮编：100193 Tel：(86-10)82628888 Fax：(86-10)82607166\"}\r\n\t}\r\n}\r\n\t\r\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 64:
/*!************************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/vue-loader/lib/selector.js?type=script&index=0!./src/components/contact.vue ***!
  \************************************************************************************************************************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return { message: "新浪网客户服务 受理新浪网客户问题，包括产品咨询、技术支持、投诉受理、建议反馈，以及购买帮助等。<br/> 客户服务热线:4006900000 EMAIL:sinacsc@vip.sina.com 微博官方账号请@新浪客服 各产品详情请联系客服。<br/> 新浪网广告销售 广告销售部 新浪广告官方服务微博：@新浪广告 http://weibo.com/sinaemarketing 广告产品介绍请查看：http://emarketing.sina.com.cn 新浪品牌广告及效果广告产品购买，请咨询新浪广告热线：4008812813 新浪商业运营客户服务官方微博：@微博广告-渠道 http://weibo.com/wbguanggao 效果广告产品介绍请查看： http://e.sina.com.cn/ <br/>新浪网新闻热线 给新浪网提供新闻线索,重大新闻爆料 自由撰稿稿件采购协议书 新浪网各频道合作及分类 内容报道合作—欢迎各类媒体、影视剧公司、制作公司、专业网站、出版社、协会等与我们联系，在各类文字、图片、音视频资讯等方面建立长期合作。<br/> 活动合作—欢迎各方与新浪网洽谈推广会议、论坛、演唱会、大奖赛、巡展或体育赛事等各类活动。通过新浪的报道推广，扩大相关活动的影响力。 <br/>出版合作—欢迎各大出版社与新浪合作各类图书内容。<br/>Tel：(86-10)52719381 新浪财经（产品） Tel：4006900000转2 Email：fincsc@staff.sina.com.cn 新浪无线 移动增值产品、语音增值业务——WAP、订阅、下载、彩铃、IVR（交互式语音应答） Tel：4000130130 Email：gzkf@staff.sina.com.cn <br/>新浪微博 客户服务热线： 4000960960 （个人） 4000980980（企业） 新浪邮箱产品 邮箱——提供免费邮箱/VIP收费邮箱/企业邮箱服务 （VIP收费邮箱/免费邮箱）客户服务电话： 4006900000转5 （企业邮箱服务）客户服务电话： 4006900000转4 免费邮箱：webcn@staff.sina.com.cn VIP收费邮箱：webmaster@vip.sina.com 企业邮箱：kf@sina.net <br/>新浪网办公地址和总机电话 北京市海淀区西北旺东路10号院西区8号楼新浪总部大厦 No.8 Sina Plaza Courtyard 10, the West XiBeiWang E.Rd HaiDian District Beijing 邮编：100193 Tel：(86-10)82628888 Fax：(86-10)82607166" };
		}
	};

/***/ },

/***/ 65:
/*!*************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/components/contact.vue ***!
  \*************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "\n\t<el-card class=\"box-card\">\n\t\t<div slot=\"header\" class=\"clearfix\">\n   \t\t\t<span >联系我们</span>\n   \t\t\t<span style=\"float:right\">首页>联系我们</span>\n  \t\t</div>\n\t\t<div class=\"contact-content\">\n\t\t\t<p v-html=\"message\"></p>\n\t\t</div>\n\t</el-card>\n";

/***/ }

});
//# sourceMappingURL=17_file.js.map