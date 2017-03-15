<template>
	<el-menu default-active="1" class="admin-left-nav" router=true theme="dark">
	  <el-menu-item index="1" route="/admin/index/content">管理中心</el-menu-item>
      <el-submenu index="2">
      	<template slot="title">新闻管理</template>
      	<el-menu-item index="2-1">新闻添加</el-menu-item>
        <el-menu-item index="2-2">新闻列表</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" route="/admin/login/users">用户管理</el-menu-item>
      <el-menu-item index="4" route="/admin/other/about">关于我们</el-menu-item>
      <el-menu-item index="5" route="/admin/other/contact">联系我们</el-menu-item>
    </el-menu>
</template>

<script>
</script>

<style>
	.admin-left-nav{min-height: 350px;}
</style>