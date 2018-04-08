<template>
  <div>
    <h3 id="guquanqingkuang"> 股权情况
      <el-button size="mini" style="margin-left:10px" @click="guquanqingkuangShaixuan=!guquanqingkuangShaixuan">更多筛选</el-button>
    </h3>
    <div v-show="guquanqingkuangShaixuan">
      <el-form label-width="120px" label-position="right">
        <el-form-item label="按公司名搜索：">
          <gongsiming class="inline-block" ref="gongsiming" @eee="guquansousuo"></gongsiming>
          <el-button class=" inline-block" type="primary" icon="el-icon-search" style="margin-left:10px" @click="guquansousuo">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-table class="eltable" :data="guquangoucheng" @expand-change="change" style="width: 100%" max-height="600">
      <el-table-column prop="company" label="企业名称">
      </el-table-column>
      <el-table-column prop="legalPerson" label="法人代表">
      </el-table-column>
      <el-table-column prop="relationship" label="关系">
      </el-table-column>
      <el-table-column label="股权构成">
        <template slot-scope="scope">
          <span>{{ scope.row.proportion }}%</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import urls from '../../../../vuex/urls'
  import axios from 'axios'
  import {
    weikong
  } from '../../../../util'
  import gongsiming from '../../../com/gongsiming'
  export default {
    components: {
      gongsiming
    },
    data() {
      return {
        guquanqingkuangShaixuan: false,
        guquangoucheng: [],
      }
    },
    methods: {
      change(row, expandedRows) {
        console.log(row, expandedRows)
      },
      guquansousuo() {
        axios.get(urls.urls + 'api/equityperson', {
            params: {
              'comCode': this.$store.state.comId
            }
          })
          .then(result => {
            weikong(this, result.data, () => {
              this.guquangoucheng = result.data
            })
            // this.gongsifuzeren = result.data
          }).catch(error => {
            console.log(error)
          });
      },
    }
  }

</script>

<style>


</style>
