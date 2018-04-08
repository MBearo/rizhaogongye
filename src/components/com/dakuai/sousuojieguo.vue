<template>
  <div class="sousuojieguo">
    <!-- <span class="biaoti">
      <i class="el-icon-search"></i>
      <span>搜索结果</span>
    </span> -->
    <div class="neirong">
    <i class="el-icon-search"></i>  共搜索到：<el-tag size="mini"> {{this.$store.state.point.data1.length}} </el-tag>  家符合检索条件的公司
    </div>
    <!-- <div class="kuaisu">
      <div><i class="iconfont icon-zidingyilie"></i> 数据表格</div>
      <div><i class="iconfont icon-tubiao-zhexiantu"></i> 数据图表</div>
      <div><i class="iconfont icon-ditu"></i> 数据地图</div>
    </div> -->
  </div>
</template>

<script>
  export default {

  }

</script>

<style scoped>
  .sousuojieguo {
    /* border: 1px solid #e6e6e6;
    padding: 10px 20px;
    border-radius: 4px; */
    background-color: white;
    border-bottom:1px solid #e6e6e6;
  }

  .biaoti {
    font-size: 19px;
    font-weight: bold;
  }

  .kuaisu>div {
    display: inline-block;
    cursor: pointer;
    color: #409EFF;
    margin-right: 10px;
  }
  .neirong {
    color: #666666;
    padding: 8px 0;
  }

</style>
