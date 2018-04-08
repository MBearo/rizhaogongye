<template>
  <div class="flex table2" :style="{height:maxh}">
    <div class="flex-0 mulu2" style="overflow:auto;">
      <el-menu :default-active="lujing" :default-openeds="['1','2','3']" router style="border:none;border-radius:4px;">
        <el-submenu index="1">
          <template slot="title">
            <i class="iconfont icon-xinxi"></i>
            <span class="biaoti">基本情况</span>
          </template>
          <el-menu-item index="1-1" style="padding-left:25px;" route="basic">企业概况</el-menu-item>
          <el-menu-item index="1-2" style="padding-left:25px;" route="principal">主要负责人</el-menu-item>
          <el-menu-item index="1-3" style="padding-left:25px;" route="stock">股权情况</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="iconfont icon-ziyuanku"></i>
            <span class="biaoti">资源配置情况</span>
          </template>
          <el-menu-item index="2-1" style="padding-left:25px;" route="land">土地厂房情况</el-menu-item>
          <el-menu-item index="2-2" style="padding-left:25px;">能耗情况</el-menu-item>
          <el-menu-item index="2-3" style="padding-left:25px;">资金情况</el-menu-item>
          <el-menu-item index="2-4" style="padding-left:25px;">用工情况</el-menu-item>
          <el-menu-item index="2-5" style="padding-left:25px;">2017新上项目及拟推进项目</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="iconfont icon-chanpinyufuwu"></i>
            <span class="biaoti">产品情况</span>
          </template>
          <el-menu-item index="3-1" style="padding-left:25px;">主要产品</el-menu-item>
          <el-menu-item index="3-2" style="padding-left:25px;">产品销售渠道</el-menu-item>
          <el-menu-item index="3-3" style="padding-left:25px;">主要供应商、销售商</el-menu-item>
          <el-menu-item index="3-4" style="padding-left:25px;">主要原材料、燃料</el-menu-item>
        </el-submenu>
        <el-menu-item index="4" route="economy">
          <i class="iconfont icon-50"></i>
          <span slot="title" class="biaoti">主要经济指标</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="iconfont icon-dengpao"></i>
          <span slot="title" class="biaoti">技术创新活动指标</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="flex-1" style="overflow:auto;padding:10px;box-sizing:border-box;padding-left:20px;">
      <router-view class="jibenqingkuang"></router-view>
      <dfooter></dfooter>
    </div>
    <!-- <div class="youbian">
        <shaixuan></shaixuan>
    </div> -->
  </div>
</template>

<script>
  import dfooter from '../com/dfooter'
  import shaixuan from '../com/shaixuan'
  export default {
    components: {
      dfooter,
      shaixuan
    },
    data() {
      return {
        maxh: 'initial'
      }
    },
    computed: {
      lujing() {
        var lujing = ''
        if (this.$route.path == '/result/table/basic') {
          lujing = '1-1'
        } else if (this.$route.path == '/result/table/principal') {
          lujing = '1-2'
        } else if(this.$route.path == '/result/table/stock') {
          lujing = '1-3'
        } else if(this.$route.path == '/result/table/economy'){
            lujing='4'
        }
        return lujing
      }
    },
    mounted() {
      this.maxh = `${document.documentElement.clientHeight-86}px`;
      window.onresize = temp => {
        this.maxh = `${document.documentElement.clientHeight-86}px`;
      };
    },

  }

</script>

<style scoped>
  .table2 {
    flex-direction: row;
    flex-wrap: nowrap;
  }
.youbian{
    position: fixed;
    top: 100px;
    width: 200px;
    padding: 20px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .3);
    right:10px;
}
</style>
<style>
  .jibenqingkuang .el-input {
    width: 500px;
  }

  .jibenqingkuang h2 {
    margin-top: 10px;
  }

  .jibenqingkuang h3 {
    margin: 30px 0 10px;
  }

  .jibenqingkuang .el-table {
    margin-bottom: 60px;
  }

</style>
