<template>
  <div>
    <h3 id="zhuyaofuzeren"> 主要负责人
      <el-button size="mini" style="margin-left:10px" @click="zhuyaofuzerenShaixuan=!zhuyaofuzerenShaixuan">更多筛选</el-button>
    </h3>
    <transition name="fade">
      <div v-show="zhuyaofuzerenShaixuan">
        <el-form label-width="120px" label-position="right">
          <el-form-item label="按公司名搜索：">
            <gongsiming class="inline-block" ref="gongsiming" @eee="gongsimingS"></gongsiming>
            <el-button class=" inline-block" type="primary" icon="el-icon-search" style="margin-left:10px" @click="gongsimingS">搜索</el-button>
          </el-form-item>
          <el-form-item label="搜索负责人：">
            <el-input placeholder="姓名" style="width:120px" v-model="sxingming"></el-input>
            <el-input placeholder="职务" style="width:120px" v-model="szhifu"></el-input>
            <el-input placeholder="学历" style="width:120px" v-model="sxueli"></el-input>
            <el-input placeholder="职称" style="width:120px" v-model="szhicheng"></el-input>
            <!-- <el-input placeholder="手机号" style="width:200px" v-model="sshouji"></el-input> -->
            <el-button type="primary" icon="el-icon-search" style="margin-left:10px" @click="sfuzeren" :loading="ssousuos">搜索</el-button>
          </el-form-item>
        </el-form>
      </div>
    </transition>
    <el-table class="eltable" :data="gongsifuzeren" @expand-change="change" style="width: 100%">
      <el-table-column prop="position" label="职务" width="230">
      </el-table-column>
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="xueli" label="学历">
      </el-table-column>
      <el-table-column prop="zhicheng" label="职称">
      </el-table-column>
      <el-table-column prop="phone" label="手机号码">
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
        zhuyaofuzerenShaixuan: false,
        ssousuos: false,
                sxingming: '',
        szhifu: '',
        sxueli: '',
        szhicheng: '',
        gongsifuzeren:[]
      }
    },
    methods: {
        change(row, expandedRows) {
        console.log(row, expandedRows)
      },
      gongsimingS() {
        axios.get(urls.urls + 'api/companyprincipal', {
            params: {
              'comCode': this.$store.state.comId
            }
          })
          .then(result => {
            weikong(this, result.data, () => {
              this.gongsifuzeren = result.data
            })
            // this.gongsifuzeren = result.data
          }).catch(error => {
            console.log(error)
          });
      },
      sfuzeren() {
        this.ssousuos = true;
        axios.get(urls.urls + 'api/companyposition', {
            params: {
              'value': {
                'name': this.sxingming,
                'position': this.szhifu,
                'xueli': this.sxueli,
                'zhicheng': this.szhicheng
              }
            }
          })
          .then(result => {
            weikong(this, result.data, () => {
              this.gongsifuzeren = result.data
            })
            this.ssousuos = false;
          }).catch(error => {
            this.ssousuos = false;
            console.log(error)
          });
      }
    }
  }

</script>

<style>


</style>
