<template>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
</template>

<script>
export default {
    methods: {
      handleSizeChange(val) {
      	this.pageSize=val;
        this.$emit("size-change",val);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        //console.log(`当前页: ${val}`);
        this.$emit("page-change",val);
      }
    },
    props:["total","pageSize","pageSizes"],
    data() {
      return {
      	currentPage:1
      };
    },
    created:function(){
    	
    },
    watch:{
    	$route:function(){
    		this.currentPage=1
    	}
    }
}	
	
</script>