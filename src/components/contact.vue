<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
   			<span >联系我们</span>
   			<span style="float:right">首页>联系我们</span>
  		</div>
		<div class="contact-content">
			<p v-html="message"></p>
		</div>
	</el-card>
</template>
<style>
	.contact-content{text-align: left;line-height: 28px;}
</style>
<script>
export default{
	data:function (){
		return {message:"新浪网客户服务 受理新浪网客户问题，包括产品咨询、技术支持、投诉受理、建议反馈，以及购买帮助等。<br/> 客户服务热线:4006900000 EMAIL:sinacsc@vip.sina.com 微博官方账号请@新浪客服 各产品详情请联系客服。<br/> 新浪网广告销售 广告销售部 新浪广告官方服务微博：@新浪广告 http://weibo.com/sinaemarketing 广告产品介绍请查看：http://emarketing.sina.com.cn 新浪品牌广告及效果广告产品购买，请咨询新浪广告热线：4008812813 新浪商业运营客户服务官方微博：@微博广告-渠道 http://weibo.com/wbguanggao 效果广告产品介绍请查看： http://e.sina.com.cn/ <br/>新浪网新闻热线 给新浪网提供新闻线索,重大新闻爆料 自由撰稿稿件采购协议书 新浪网各频道合作及分类 内容报道合作—欢迎各类媒体、影视剧公司、制作公司、专业网站、出版社、协会等与我们联系，在各类文字、图片、音视频资讯等方面建立长期合作。<br/> 活动合作—欢迎各方与新浪网洽谈推广会议、论坛、演唱会、大奖赛、巡展或体育赛事等各类活动。通过新浪的报道推广，扩大相关活动的影响力。 <br/>出版合作—欢迎各大出版社与新浪合作各类图书内容。<br/>Tel：(86-10)52719381 新浪财经（产品） Tel：4006900000转2 Email：fincsc@staff.sina.com.cn 新浪无线 移动增值产品、语音增值业务——WAP、订阅、下载、彩铃、IVR（交互式语音应答） Tel：4000130130 Email：gzkf@staff.sina.com.cn <br/>新浪微博 客户服务热线： 4000960960 （个人） 4000980980（企业） 新浪邮箱产品 邮箱——提供免费邮箱/VIP收费邮箱/企业邮箱服务 （VIP收费邮箱/免费邮箱）客户服务电话： 4006900000转5 （企业邮箱服务）客户服务电话： 4006900000转4 免费邮箱：webcn@staff.sina.com.cn VIP收费邮箱：webmaster@vip.sina.com 企业邮箱：kf@sina.net <br/>新浪网办公地址和总机电话 北京市海淀区西北旺东路10号院西区8号楼新浪总部大厦 No.8 Sina Plaza Courtyard 10, the West XiBeiWang E.Rd HaiDian District Beijing 邮编：100193 Tel：(86-10)82628888 Fax：(86-10)82607166"}
	}
}
	
</script>