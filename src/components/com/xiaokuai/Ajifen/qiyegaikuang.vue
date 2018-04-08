<template>
  <div>
    <h2 id="jibenqingkuang">基本情况</h2>
    <h3 id="qiyegaikuang">企业概况</h3>
    <!-- <p class="subtitle">企业相关的基本信息</p> -->
    <el-table class="eltable" :data="$store.state.jiben.jiben" @expand-change="change" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="邮政编码">
              <span>{{ props.row.mailCode }}</span>
            </el-form-item>
            <el-form-item label="固定电话">
              <span>{{ props.row.telePhone }}</span>
            </el-form-item>
            <el-form-item label="传真">
              <span>{{ props.row.fax }}</span>
            </el-form-item>
            <el-form-item label="企业职工人数">
              <span>{{ props.row.staffNumber }}</span>
            </el-form-item>
            <el-form-item label="本科学历人数">
              <span>{{ props.row.underGraduate }}</span>
            </el-form-item>
            <el-form-item label="研究生学历人数">
              <span>{{ props.row.postGraduate }}</span>
            </el-form-item>
            <el-form-item label="企业高管人员">
              <span>{{ props.row.exeCutive }}</span>
            </el-form-item>
            <el-form-item label="技术人员数量">
              <span>{{ props.row.techNum }}</span>
            </el-form-item>
            <el-form-item label="一般人员">
              <span>{{ props.row.normalNum }}</span>
            </el-form-item>

            <el-form-item label="经营范围:主营">
              <span>{{ props.row.mainBusiness }}</span>
            </el-form-item>
            <el-form-item label="经营范围:兼营">
              <span>{{ props.row.partBusinsess }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="comName" label="企业名称" width="230">
      </el-table-column>
      <el-table-column label="成立时间" sortable prop="setUpTime">
        <template slot-scope="scope">
          <span v-if="scope.row.setUpTime.substring(0,4)=='1200'"></span>
          <span v-else>{{ scope.row.setUpTime }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="registArea" label="注册地">
      </el-table-column>
      <el-table-column prop="legalPerson" label="法人代表">
      </el-table-column>
      <el-table-column prop="staffNumber" label="企业职工人数" sortable>
      </el-table-column>
      <el-table-column prop="eMail" label="电子信箱">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    created() {
      this.$store.dispatch('jiben_ac', {
        indexstate: this.$store.state
      })
    },
    methods: {
      change(row, expandedRows) {
        console.log(row, expandedRows)
      },
    },
    computed: {
      sousuojieguo() {
        return this.$store.state.search
      }
    },
    watch: {
      sousuojieguo() {
        this.$store.dispatch('jiben_ac', {
          indexstate: this.$store.state
        })
      }
    }
  }

</script>

<style>
  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 120px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

  .eltable {
    /* border: 1px solid #ebeef5; */
    border-bottom: none;
    border-radius: 4px;
    transition: .2s;
  }

</style>
