<template>
  <div>
    <h2 id="jibenqingkuang">基本情况</h2>
    <h3 id="qiyegaikuang">企业概况</h3>
    <!-- <p class="subtitle">企业相关的基本信息</p> -->
    <el-table class="eltable" :data="shuju" style="width: 100%">
      <el-table-column prop="comName" label="企业名称" width="230" fixed>
      </el-table-column>
      <el-table-column prop="coverArea" label="占地面积（亩）" sortable width="150">
      </el-table-column>
      <el-table-column prop="certificateArea" label="已办证（亩）" sortable width="150">
      </el-table-column>
      <el-table-column prop="buildingArea" label="建筑面积（m2）" sortable width="150">
      </el-table-column>
      <el-table-column prop="workshopArea" label="厂房面积（m2）" sortable width="150">
      </el-table-column>
      <!-- <el-table-column prop="eMail" label="办公楼面积（m2）">
      </el-table-column> -->
      <el-table-column prop="enterpriseWorkArea" label="企业厂房（场地）占地面积（平方米）" sortable width="200">
      </el-table-column>
      <el-table-column prop="certificateArea" label="土地已办证（m2）" sortable width="170">
      </el-table-column>
      <el-table-column prop="lCertificateArea" label="房产已办证（m2）" sortable width="170">
      </el-table-column>
      <el-table-column prop="lCertificateArea" label="企业厂房（场地）类型">
      </el-table-column>
      <el-table-column prop="landCertificate" label="是否有土地证" width="150"> 
      </el-table-column>
      <el-table-column prop="pCertificateArea" label="是否有房产证" width="150">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import axios from 'axios'
  import urls from '../../../../vuex/urls'
  export default {
    data() {
      return {
        shuju: []
      }
    },
    created() {
        this.jiazai() 
    },
    methods: {
      jiazai() {
        axios.get(urls.urls + 'api/land', {
            params: {
              'search': this.$store.state.search,
            }
          })
          .then(result => {
            this.shuju = result.data
          }).catch(error => {
            console.log(error)
          });
      }
    }
  }

</script>

<style>


</style>
