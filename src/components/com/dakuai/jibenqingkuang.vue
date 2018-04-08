<template>
  <div class="jibenqingkuang">
    <h2 id="jibenqingkuang">一、基本情况</h2>
    <h3 id="qiyegaikuang">1.企业概况</h3>
    <!-- <p class="subtitle">企业相关的基本信息</p> -->
    <el-table class="eltable" :data="$store.state.jiben.jiben" @expand-change="change" style="width: 100%" max-height="600">
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
    <h3 id="zhuyaofuzeren"> 2.主要负责
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
    <h3 id="guquanqingkuang"> 3.股权情况
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
    <!-- <kuaisudaohang :daohang="kuaidu"></kuaisudaohang> -->
  </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
  import urls from '../../../vuex/urls'
  import kuaisudaohang from '../kuaisudaohang'
  import gongsiming from '../gongsiming'
  import {
    weikong
  } from '../../../util'
  export default {
    components: {
      kuaisudaohang,
      gongsiming
    },
    data() {
      return {
        kuaidu: [{
          href: 'qiyegaikuang',
          value: '企业概况'
        }, {
          href: 'zhuyaofuzeren',
          value: '主要负责人'
        }, ],
        gongsifuzeren: [],
        formInline: {},
        sxingming: '',
        szhifu: '',
        sxueli: '',
        szhicheng: '',
        sshouji: '',
        ssousuos: false,
        guquangoucheng: [],
        zhuyaofuzerenShaixuan: false,
        guquanqingkuangShaixuan:false
      }
    },
    created() {
      this.$store.dispatch('jiben_ac', {
        indexstate: this.$store.state
      })
      this.$store.dispatch('fuze_ac', {
        indexstate: this.$store.state
      })
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
        this.$store.dispatch('fuze_ac', {
          indexstate: this.$store.state
        })
      }
    }
  }

</script>
<style scoped>
  .subtitle {
    font-size: 14px;
    color: #5e6d82;
  }

</style>

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

  /* .eltable:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5)
  } */

  .jibenqingkuang .el-input {
    width: 500px;
  }

  .jibenqingkuang h2 {
    margin-top: 10px;
  }

  .jibenqingkuang h3 {
    margin: 30px 0 10px;
  }
  .jibenqingkuang .el-table{
    margin-bottom:60px;
  }
  /* .fade-enter-active, .fade-leave-active {
  transition: transform .3s
}
.fade-enter, .fade-leave-to {
  transform: scale(1,0)
} */

</style>
