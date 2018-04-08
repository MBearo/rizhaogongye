<template>
  <div class="jibenqingkuang">
    <h2 id="jingjizhibiao" style="margin:30px 0px;">主要经济指标({{$store.state.time.year}}年)
      <el-button size="mini" style="margin-left:10px" @click="gengduo=!gengduo">更多筛选</el-button>
    </h2>
    <div v-show="gengduo" class="duoxuan">
      <el-form label-width="120px" label-position="right">
        <el-form-item label="选择年份">
          <!-- <el-date-picker v-model="value5" align="right" type="year" placeholder="选择年" :picker-options="pickerOptions1" style="width:200px">
          </el-date-picker> -->
          <el-select v-model="nianfen" placeholder="请选择" class="shijianxuanze" @change="xiuigaishijian">
            <el-option  label="2017年" value="2017">
            </el-option>
            <el-option  label="2016年" value="2016">
            </el-option>
          </el-select>
          <el-button type="primary" icon="el-icon-search" @click="sousuo" :loading="$store.state.help.loading.zhibiao">搜索</el-button>
        </el-form-item>
        <el-form-item label="变更表格列">
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city.label" :key="city.value">{{city.label}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
    </div>
    <div style="color:#999">*无特殊标注表中单位全部为“ 万元 ”，增幅为“ % ”</div>
    <el-table class="eltable" :data="$store.state.jingji.jingji" height="600" @cell-click="dianjibiaoge">
     <!--  这个fixed性能有问题
      <el-table-column prop="comName" label="企业名称" width="230" fixed> -->
      <el-table-column prop="comName" label="企业名称" width="230" >
      </el-table-column>
      <el-table-column label="工业总产值" v-if="cities[0].dis">
        <el-table-column prop="industrialOutput" label="本年" min-width="120" sortable>
        </el-table-column>
        <el-table-column prop="industrialOutput2" label="同期" min-width="120" sortable>
        </el-table-column>
        <el-table-column prop="industrialOutput1" label="同比" min-width="80" sortable>
        </el-table-column>
      </el-table-column>
      <el-table-column label="主营业务收入" min-width="140" v-if="cities[1].dis">
        <el-table-column prop="mainIncome" label="本年" min-width="120" sortable>
        </el-table-column>
        <el-table-column prop="mainIncome2" label="同期" min-width="120" sortable>
        </el-table-column>
        <el-table-column prop="mainIncome1" label="同比" min-width="80" sortable>
        </el-table-column>
      </el-table-column>
      <el-table-column prop="totalProfit" label="利润总额" v-if="cities[2].dis">
        <el-table-column prop="totalProfit" label="本年" min-width="120" sortable>
        </el-table-column>
        <el-table-column prop="totalProfit2" label="同期" min-width="120" sortable>
        </el-table-column>
        <el-table-column prop="totalProfit1" label="同比" min-width="80" sortable>
        </el-table-column>
      </el-table-column>
      <el-table-column prop="totalProfitTax" label="利税合计" v-if="cities[3].dis">
        <el-table-column prop="totalProfitTax" label="本年" min-width="120" sortable>
        </el-table-column>
        <el-table-column prop="totalProfitTax2" label="同期" min-width="120" sortable>
        </el-table-column>
        <el-table-column prop="totalProfitTax1" label="同比" min-width="80" sortable>
        </el-table-column>
      </el-table-column>

      <el-table-column prop="industrialSale" label="工业销售产值" width="140" sortable v-if="cities[4].dis">
      </el-table-column>
      <el-table-column prop="exportDeliveryValue" label="其中：出口交货值" width="160" sortable v-if="cities[5].dis">
      </el-table-column>
      <el-table-column prop="finishedPro" label="产成品" width="120" sortable v-if="cities[6].dis">
      </el-table-column>
      <el-table-column prop="receivables" label="应收账款" width="120" sortable v-if="cities[7].dis">
      </el-table-column>
      <!-- <el-table-column label="两项资金合计">
       
      </el-table-column> -->
      <el-table-column prop="totalAsset" label="资产合计" width="120" sortable v-if="cities[8].dis">
      </el-table-column>
      <el-table-column prop="totalLiability" label="负债合计" width="120" sortable v-if="cities[9].dis">
      </el-table-column>
      <el-table-column prop="mainCost" label="主营业务成本" width="140" sortable v-if="cities[10].dis">
      </el-table-column>
      <el-table-column prop="saleCost" label="销售费用" width="120" sortable v-if="cities[11].dis">
      </el-table-column>
      <el-table-column prop="manageCost" label="管理费用" width="120" sortable v-if="cities[12].dis">
      </el-table-column>
      <el-table-column prop="financialCost" label="财务费用" width="120" sortable v-if="cities[13].dis">
      </el-table-column>
      <el-table-column prop="kwh" label="用电量(万KWH)" width="160" sortable v-if="cities[14].dis">
      </el-table-column>
      <el-table-column prop="stateTax" label="上缴国税" width="120" sortable v-if="cities[15].dis">
      </el-table-column>
      <el-table-column prop="localTax" label="上缴地税" width="120" sortable v-if="cities[16].dis">
      </el-table-column>
      <el-table-column prop="otherIncome" label="其他收入" width="120" sortable v-if="cities[17].dis">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  const cityOptions = [{
    value: 0,
    label: '工业总产值',
    dis: true
  }, {
    value: 1,
    label: '主营业务收入',
    dis: true
  }, {
    value: 2,
    label: '利润总额',
    dis: true
  }, {
    value: 3,
    label: '利税合计',
    dis: true
  }, {
    value: 4,
    label: '工业销售产值',
    dis: false
  }, {
    value: 5,
    label: '其中：出口交货值',
    dis: false
  }, {
    value: 6,
    label: '产成品',
    dis: false
  }, {
    value: 7,
    label: '应收账款',
    dis: false
  }, {
    value: 8,
    label: '资产合计',
    dis: false
  }, {
    value: 9,
    label: '负债合计',
    dis: false
  }, {
    value: 10,
    label: '主营业务成本',
    dis: false
  }, {
    value: 11,
    label: '销售费用',
    dis: false
  }, {
    value: 12,
    label: '管理费用',
    dis: false
  }, {
    value: 13,
    label: '财务费用',
    dis: false
  }, {
    value: 14,
    label: '用电量(万KWH)',
    dis: false
  }, {
    value: 15,
    label: '上缴国税',
    dis: false
  }, {
    value: 16,
    label: '上缴地税',
    dis: false
  }, {
    value: 17,
    label: '其他收入',
    dis: false
  }];
  export default {
    created() {
      this.$store.dispatch('jingji_ac', {
        indexstate: this.$store.state
      })
    },
    data() {
      return {
        checkAll: false,
        checkedCities: ['工业总产值', '主营业务收入', '利润总额', '利税合计'],
        //cities: ['工业总产值', '主营业务收入', '利润总额', '利税合计'],
        cities: cityOptions,
        isIndeterminate: true,
        gengduo: false,
        value5: '2017',
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now() || time.getFullYear() < 2016;
          },
        },
        nianfen:'2017'
      }
    },
    computed: {
      liandong() {
        return this.$store.state.search
      }
    },
    watch: {
      liandong() {
        this.$store.dispatch('jingji_ac', {
          indexstate: this.$store.state,
          time:this.nianfen
        })
      }
    },
    methods: {
      handleCheckAllChange(val) {
        var linshi = [];
        for (let i = 0; i < cityOptions.length; i++) {
          linshi.push(cityOptions[i].label)
        }
        this.checkedCities = val ? linshi : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        this.cities.forEach(value => value.dis = false)
        for (let i = 0; i < value.length; i++) {
          for (let j = 0; j < this.cities.length; j++) {
            if (this.cities[j].label == value[i]) {
              this.cities[j].dis = true
            }
          }
        }
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      xiuigaishijian(){

      },
      sousuo(){
        this.$store.state.help.loading.zhibiao=true
         this.$store.dispatch('jingji_ac', {
          indexstate: this.$store.state,
          time:this.nianfen
        })
      },
      dianjibiaoge(row, column, cell, event){
        console.log(row)
        if(column.colSpan==1){
this.$store.commit('comId_Mu', {
          value: row.comCode
        })
        this.$router.push({
          path: '/result/comdetails'
        })
        }
        
        
      }
    }
  }

</script>
<style scoped>
  .duoxuan {
    margin-bottom: 10px;
  }

</style>

<style>
  .duoxuan .el-checkbox {
    width: 160px;
    display: inline-block;
    margin-left: 0;
  }
  .el-select.shijianxuanze .el-input{
    width:100px;
  }
</style>
