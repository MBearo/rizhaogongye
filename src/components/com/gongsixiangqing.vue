<template>
  <div class="r-width gongsibiaoge">
    <h2>一、企业基本情况</h2>
    <div class="g-title">1、企业概况</div>
    <div class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition">
      <div class="el-table__body-wrapper is-scrolling-none">
        <table cellspacing="0" cellpadding="0" border="0" class="el-table__body">
          <tbody>
            <tr class="el-table__row ">
              <td>
                <div class="cell table-header">企业名称</div>
              </td>
              <td>
                <div class="cell">{{dataA1.comName}}</div>
              </td>
              <td>
                <div class="cell table-header">成立时间</div>
              </td>
              <td>
                <div class="cell">{{dataA1.setUpTime.substring(0,10)}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell table-header">企业统一社会信用代码</div>
              </td>
              <td colspan="3">
                <div class="cell">91371121165881395X</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td rowspan="2">
                <div class="cell table-header">经营范围</div>
              </td>
              <td>
                <div class="cell">主营：</div>
              </td>
              <td colspan="2">
                <div class="cell">{{dataA1.mainBusiness}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell">兼营：</div>
              </td>
              <td colspan="2">
                <div class="cell">{{dataA1.partBusinsess}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell table-header">企业详细地址</div>
              </td>
              <td>
                <div class="cell">{{dataA1.comAddress}}</div>
              </td>
              <td>
                <div class="cell table-header">邮政编码</div>
              </td>
              <td>
                <div class="cell">{{dataA1.mobilePhone}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell table-header">注册地</div>
              </td>
              <td>
                <div class="cell">{{dataA1.registArea}}</div>
              </td>
              <td>
                <div class="cell table-header">注册资本（万元）</div>
              </td>
              <td>
                <div class="cell">{{dataA1.regidtMoney}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell table-header">法人代表</div>
              </td>
              <td>
                <div class="cell">{{dataA1.legalPerson}}</div>
              </td>
              <td>
                <div class="cell table-header">联系人</div>
              </td>
              <td>
                <div class="cell">{{dataA1.contactPerson}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell table-header">联系电话</div>
              </td>
              <td>
                <div class="cell">{{dataA1.mobilePhone}}</div>
              </td>
              <td>
                <div class="cell table-header">传真</div>
              </td>
              <td>
                <div class="cell">{{dataA1.fax}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell table-header">固定电话</div>
              </td>
              <td>
                <div class="cell">{{dataA1.telePhone}}</div>
              </td>
              <td>
                <div class="cell table-header">电子信箱</div>
              </td>
              <td>
                <div class="cell">{{dataA1.eMail}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell table-header">企业是否被认定为高新技术企业 </div>
              </td>
              <td colspan="3">
                <div class="cell">{{dataA1.isHighNew?'是':'否'}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell table-header">企业职工人数（人） </div>
              </td>
              <td>
                <div class="cell">{{dataA1.staffNumber}}</div>
              </td>
              <td>
                <div class="cell">本科学历人数（人）</div>
              </td>
              <td>
                <div class="cell">{{dataA1.underGraduate}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell table-header">研究生学历人数（人） </div>
              </td>
              <td>
                <div class="cell">{{dataA1.postGraduate}}</div>
              </td>
              <td>
                <div class="cell">企业高管人员（人）</div>
              </td>
              <td>
                <div class="cell">{{dataA1.exeCutive}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell table-header">技术人员数量（人） </div>
              </td>
              <td>
                <div class="cell">{{dataA1.techNum}}</div>
              </td>
              <td>
                <div class="cell">一般人员（人）</div>
              </td>
              <td>
                <div class="cell">{{dataA1.normalNum}}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <span class="g-title">2．主要负责人</span>
    <el-table :data="dataA2" border stripe style="width: 100%">
      <el-table-column prop="position" label="职务">
      </el-table-column>
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <!-- <el-table-column prop="address" label="出生年月日">
            </el-table-column> -->
      <el-table-column prop="xueli" label="学历">
      </el-table-column>
      <el-table-column prop="zhicheng" label="职称">
      </el-table-column>
      <el-table-column prop="phone" label="手机号码">
      </el-table-column>
    </el-table>
    <span class="g-title">3．股权情况</span>
    <div class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition">
      <div class="el-table__body-wrapper is-scrolling-none">
        <table cellspacing="0" cellpadding="0" border="0" class="el-table__body">
          <tbody>
            <tr class="el-table__row ">
              <td>
                <div class="cell table-header">企业股改意愿</div>
              </td>
              <td colspan="2">
                <div class="cell"> </div>
              </td>
              <td>
                <div class="cell table-header">计划完成时间</div>
              </td>
              <td>
                <div class="cell"></div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell table-header">是否上市</div>
              </td>
              <td>
                <div class="cell"> </div>
              </td>
              <td>
                <div class="cell table-header">上市时间</div>
              </td>
              <td>
                <div class="cell"></div>
              </td>
              <td>
                <div class="cell">上市板块</div>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
    <div class="flex">
      <div class="flex-0 chengyuan flex flex-align-items-center ">
        <div>
          成员企业（家）
        </div>
      </div>
      <el-table class="flex-1" :data="dataA3" border stripe>
        <el-table-column prop="company" label="企业名称">
        </el-table-column>
        <el-table-column prop="legalPerson" label="法人代表">
        </el-table-column>
        <el-table-column prop="relationship" label="关系">
        </el-table-column>
        <el-table-column label="股权构成（比例）">
          <template slot-scope="scope">
            <span>{{ scope.row.proportion }}%</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <h2>四、企业主要经济指标</h2>
    <el-collapse accordion>
      <el-collapse-item>

        <template slot="title">
          <div class="g-title">企业主要经济指标</div>
        </template>

        <div class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition">
          <div class="el-table__body-wrapper is-scrolling-none">
            <table cellspacing="0" cellpadding="0" border="0" class="el-table__body">
              <tbody>
                <tr class="el-table__row ">
                  <td colspan="2">
                    <div class="cell table-header">经济指标</div>
                  </td>
                  <td>
                    <div class="cell">{{dataD.year}}年完成</div>
                  </td>
                </tr>
                <tr class="el-table__row ">
                  <td colspan="2">
                    <div class="cell table-header">工业总产值（万元）</div>
                  </td>
                  <td>
                    <div class="cell">{{dataD.industrialOutput}}</div>
                  </td>
                </tr>
                <tr class="el-table__row ">
                  <td colspan="2">
                    <div class="cell table-header">工业总产值（万元）</div>
                  </td>
                  <td>
                    <div class="cell">{{dataD.industrialOutput}}</div>
                  </td>
                </tr>
                <tr class="el-table__row ">
                  <td colspan="2">
                    <div class="cell table-header">工业销售产值（万元）</div>
                  </td>
                  <td>
                    <div class="cell">{{dataD.industrialSale}}</div>
                  </td>
                </tr>
                <tr class="el-table__row ">
                  <td colspan="2">
                    <div class="cell table-header">其中：出口交货值（万元）</div>
                  </td>
                  <td>
                    <div class="cell">{{dataD.exportDeliveryValue}}</div>
                  </td>
                </tr>
                <tr class="el-table__row ">
                  <td colspan="2">
                    <div class="cell table-header">主营业务收入（万元）</div>
                  </td>
                  <td>
                    <div class="cell">{{dataD.mainIncome}}</div>
                  </td>
                </tr>
                <tr class="el-table__row ">
                  <td colspan="2">
                    <div class="cell table-header">利润总额（万元）</div>
                  </td>
                  <td>
                    <div class="cell">{{dataD.totalProfit}}</div>
                  </td>
                </tr>
                <tr class="el-table__row ">
                  <td colspan="2">
                    <div class="cell table-header">利税合计（万元）</div>
                  </td>
                  <td>
                    <div class="cell">{{dataD.totalProfitTax}}</div>
                  </td>
                </tr>
                <tr class="el-table__row ">
                  <td rowspan="2">
                    <div class="cell table-header">两项资金合计（万元）</div>
                  </td>
                  <td>
                    <div class="cell table-header">产成品</div>
                  </td>
                  <td>
                    <div class="cell table-header">收账款</div>
                  </td>
                </tr>
                <tr class="el-table__row ">
                  <td>
                    <div class="cell table-header">{{dataD.finishedPro}}</div>
                  </td>
                  <td>
                    <div class="cell table-header">{{dataD.receivables}}</div>
                  </td>
                </tr>
                <tr class="el-table__row ">
                  <td colspan="2">
                    <div class="cell table-header">资产合计（万元）</div>
                  </td>
                  <td>
                    <div class="cell">{{dataD.totalAsset}}</div>
                  </td>
                </tr>
                <tr class="el-table__row ">
                  <td colspan="2">
                    <div class="cell table-header">负债合计(万元)</div>
                  </td>
                  <td>
                    <div class="cell">{{dataD.totalLiability}}</div>
                  </td>
                </tr>
                <tr class="el-table__row ">
                  <td colspan="2">
                    <div class="cell table-header">主营业务成本(万元)</div>
                  </td>
                  <td>
                    <div class="cell">{{dataD.mainCost}}</div>
                  </td>
                </tr>
                <tr class="el-table__row ">
                  <td colspan="2">
                    <div class="cell table-header">销售费用(万元)</div>
                  </td>
                  <td>
                    <div class="cell">{{dataD.saleCost}}</div>
                  </td>
                </tr>
                <tr class="el-table__row ">
                  <td colspan="2">
                    <div class="cell table-header">管理费用(万元)</div>
                  </td>
                  <td>
                    <div class="cell">{{dataD.manageCost}}</div>
                  </td>
                </tr>
                <tr class="el-table__row ">
                  <td colspan="2">
                    <div class="cell table-header">财务费用(万元)</div>
                  </td>
                  <td>
                    <div class="cell">{{dataD.financialCost}}</div>
                  </td>
                </tr>
                <tr class="el-table__row ">
                  <td colspan="2">
                    <div class="cell table-header">用电量（万KWH）</div>
                  </td>
                  <td>
                    <div class="cell">{{dataD.kwh}}</div>
                  </td>
                </tr>
                <tr class="el-table__row ">
                  <td colspan="2">
                    <div class="cell table-header">上缴国税（万元）</div>
                  </td>
                  <td>
                    <div class="cell">{{dataD.stateTax}}</div>
                  </td>
                </tr>
                <tr class="el-table__row ">
                  <td colspan="2">
                    <div class="cell table-header">上缴地税（万元）</div>
                  </td>
                  <td>
                    <div class="cell">{{dataD.localTax}}</div>
                  </td>
                </tr>
                <tr class="el-table__row ">
                  <td colspan="2">
                    <div class="cell table-header">其他收入（万元）</div>
                  </td>
                  <td>
                    <div class="cell">{{dataD.otherIncome}}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>

</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
  import urls from '../../vuex/urls'
  export default {
    data() {
      return {
        dataA1: {
          area: '',
          comAddress: '',
          comName: '',
          contactPerson: '',
          eMail: '',
          enterpriseReform: '',
          exeCutive: '',
          fax: '',
          isHighNew: '',
          lat: '',
          legalPerson: '',
          lng: '',
          mailCode: '',
          mainBusiness: '',
          mobilePhone: '',
          normalNum: '',
          partBusinsess: '',
          postGraduate: '',
          regidtMoney: '',
          registArea: '',
          setUpTime: '',
          staffNumber: '',
          techNum: '',
          telePhone: '',
          underGraduate: ''
        },
        dataA2: [],
        dataA3: [],
        dataD: {
          comName: '',
          exportDeliveryValue: '',
          financialCost: '',
          finishedPro: '',
          industrialOutput: '',
          industrialSale: '',
          kwh: '',
          localTax: '',
          mainCost: '',
          mainIncome: '',
          manageCost: '',
          otherIncome: '',
          receivables: '',
          saleCost: '',
          stateTax: '',
          totalAsset: '',
          totalLiability: '',
          totalProfit: '',
          totalProfitTax: '',
          totalTex: '',
          year: ''
        }
      }
    },
    created() {
      //一、企业基本情况
      //1、企业概况
      axios.get(urls.urls + 'api/companybasic', {
          params: {
            'comcode': '165881395'
          }
        })
        .then(result => {
          this.dataA1 = result.data[0]
        }).catch(error => {
          console.log(error)
        });
      //2．主要负责人
      axios.get(urls.urls + 'api/companyprincipal', {
          params: {
            'comcode': '165881395'
          }
        })
        .then(result => {
          this.dataA2 = result.data
        }).catch(error => {
          console.log(error)
        });
      //3．股权情况
      axios.get(urls.urls + 'api/equityperson', {
          params: {
            'comcode': '165881395'
          }
        })
        .then(result => {
          console.log(result)
          this.dataA3 = result.data
        }).catch(error => {
          console.log(error)
        });
      //四、企业主要经济指标
      axios.get(urls.urls + 'api/industrialoutput', {
          params: {
            'search': {
              "product": [],
              "chanye": [],
              "area": [],
              "c_value": [],
              "garden": [],
              "orderby": 'false',
              "isdescending": 'false'
            },
            'conditions': {
              "industrialOutput": "0",
              "industrialOutput1": "0",
              "industrialSale": "0",
              "industrialSale1": "0",
              "exportDeliveryValue": "0",
              "exportDeliveryValue1": "0",
              "mainIncome": "0",
              "mainIncome1": "0",
              "totalProfit": "0",
              "totalProfit1": "0",
              "totalProfitTax": "0",
              "totalProfitTax1": "0",
              "finishedPro": "0",
              "finishedPro1": "0",
              "receivables": "0",
              "receivables1": "0",
              "totalAsset": "0",
              "totalAsset1": "0",
              "totalLiability": "0",
              "totalLiability1": "0",
              "mainCost": "0",
              "mainCost1": "0",
              "saleCost": "0",
              "saleCost1": "0",
              "manageCost": "0",
              "manageCost1": "0",
              "financialCost": "0",
              "financialCost1": "0",
              "kwh": "0",
              "kwh1": "0",
              "stateTax": "0",
              "stateTax1": "0",
              "localTax": "0",
              "localTax1": "0",
              "otherIncome": "0",
              "otherIncome1": "0",
              "totalTex": "0",
              "totalTex1": "0",
              "year": "0",
              "year1": "0"
            }
          }
        })
        .then(result => {
          this.dataD = result.data[2]
        }).catch(error => {
          console.log(error)
        });
    }
  }

</script>

<style scoped>
  .g-title {
    line-height: 48px;
    font-size: 18px;
  }

  .el-table {
    /* margin-bottom: 10px; */
  }

  .table-header {
    color: #909399;
    font-weight: bold;
  }

  .chengyuan {
    border: 1px solid #ebeef5;
    border-right: none;
    padding: 0 10px;

  }

</style>

<style>
  .gongsibiaoge .el-table__body,
  .gongsibiaoge .el-table__footer,
  .gongsibiaoge .el-table__header {
    width: 100%;
  }

  .gongsibiaoge .el-collapse-item__header {
    height: initial;
    line-height: initial;
    cursor: auto;
  }

  .gongsibiaoge .el-collapse-item__header .el-collapse-item__arrow {
    cursor: pointer;
  }

  .gongsibiaoge .el-collapse-item__header,
  .gongsibiaoge .el-collapse-item__content {
    padding: 0 20px 10px;
  }

  .gongsibiaoge .el-collapse {
    border-right: 1px solid #ebeef5;
    border-left: 1px solid #ebeef5;
    border: none;
  }

  .gongsibiaoge .el-collapse-item__content {
    font-weight: 500;
  }

  .gongsibiaoge .el-table__row:nth-child(2n) {
    background-color: #fafafa;
  }

</style>
