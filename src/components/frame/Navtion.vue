<template>
  <div >
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="1-1" :default-openeds="['1','2','3']" style="border:none;border-radius:4px;">
          <el-submenu index="1">
            <template slot="title">
              <i class="iconfont icon-xinxi"></i>
              <span class="biaoti">基本情况</span>
            </template>
            <el-menu-item index="1-1" style="padding-left:25px;">1.企业概况</el-menu-item>
            <el-menu-item index="1-2" style="padding-left:25px;">2.主要负责人</el-menu-item>
            <el-menu-item index="1-3" style="padding-left:25px;">3.股权情况</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="iconfont icon-ziyuanku"></i>
              <span class="biaoti">资源配置情况</span>
            </template>
            <el-menu-item index="2-1" style="padding-left:25px;">1.土地厂房情况</el-menu-item>
            <el-menu-item index="2-2" style="padding-left:25px;">2.能耗情况</el-menu-item>
            <el-menu-item index="2-3" style="padding-left:25px;">3.资金情况</el-menu-item>
            <el-menu-item index="2-4" style="padding-left:25px;">4.用工情况</el-menu-item>
            <el-menu-item index="2-5" style="padding-left:25px;">5.2017新上项目及拟推进项目</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="iconfont icon-chanpinyufuwu"></i>
              <span class="biaoti">产品情况</span>
            </template>
            <el-menu-item index="3-1" style="padding-left:25px;">1.主要产品</el-menu-item>
            <el-menu-item index="3-2" style="padding-left:25px;">2.产品销售渠道</el-menu-item>
            <el-menu-item index="3-3" style="padding-left:25px;">3.主要供应商、销售商</el-menu-item>
            <el-menu-item index="3-4" style="padding-left:25px;">4.主要原材料、燃料</el-menu-item>
          </el-submenu>
          <el-menu-item index="4">
            <i class="iconfont icon-50"></i>
            <span slot="title" class="biaoti">主要经济指标</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="iconfont icon-dengpao"></i>
            <span slot="title" class="biaoti">技术创新活动指标</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        maxh: '999px'
      }
    },
    mounted() {
        this.maxh = `${document.documentElement.clientHeight-85}px`;
      window.onresize = temp => {
        this.maxh = `${document.documentElement.clientHeight-85}px`;
      };
    }
  }

</script>

<style>


</style>
