<template>
  <div class="jibenqingkuang">
    <h2 id="jingjizhibiao" style="margin:30px 0px;"> 四、主要经济指标</h2>
    <div style="color:#999">*无特殊标注表中单位全部为“（万元）”</div>
    <el-table class="eltable" :data="$store.state.jingji.jingji" max-height="800">
      <el-table-column prop="comName" label="企业名称" width="230" fixed>
      </el-table-column>
      <el-table-column prop="industrialOutput" label="工业总产值" width="120" sortable>
      </el-table-column>
      <el-table-column prop="industrialSale" label="工业销售产值" width="140" sortable>
      </el-table-column>
      <el-table-column prop="exportDeliveryValue" label="其中：出口交货值" width="160" sortable>
      </el-table-column>
      <el-table-column prop="mainIncome" label="主营业务收入" width="140" sortable>
      </el-table-column>
      <el-table-column prop="totalProfit" label="利润总额" width="120" sortable>
      </el-table-column>
      <el-table-column prop="totalProfitTax" label="利税合计" width="120" sortable>
      </el-table-column>

      <el-table-column prop="finishedPro" label="产成品" width="120" sortable>
      </el-table-column>
      <el-table-column prop="receivables" label="应收账款" width="120" sortable>
      </el-table-column>
      <!-- <el-table-column label="两项资金合计">
       
      </el-table-column> -->
      <el-table-column prop="totalAsset" label="资产合计" width="120" sortable>
      </el-table-column>
      <el-table-column prop="totalLiability" label="负债合计" width="120" sortable>
      </el-table-column>
      <el-table-column prop="mainCost" label="主营业务成本" width="140" sortable>
      </el-table-column>
      <el-table-column prop="saleCost" label="销售费用" width="120" sortable>
      </el-table-column>
      <el-table-column prop="manageCost" label="管理费用" width="120" sortable>
      </el-table-column>
      <el-table-column prop="financialCost" label="财务费用" width="120" sortable>
      </el-table-column>
      <el-table-column prop="kwh" label="用电量(万KWH)" width="160" sortable>
      </el-table-column>
      <el-table-column prop="stateTax" label="上缴国税" width="120" sortable>
      </el-table-column>
      <el-table-column prop="localTax" label="上缴地税" width="120" sortable>
      </el-table-column>
      <el-table-column prop="otherIncome" label="其他收入" width="120" sortable>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('jingji_ac', {
        indexstate: this.$store.state
      })
    },
  }

</script>

<style>


</style>
