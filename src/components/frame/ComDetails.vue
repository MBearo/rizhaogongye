<template>
  <div class="r-width gongsibiaoge">
    <h2>一、企业基本情况</h2>
    <div class="g-title">1、企业概况</div>
    <div class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition">
      <div class="el-table__body-wrapper is-scrolling-none">
        <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" v-if="dataA1.comName!=undefined">
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

    <h2>二、企业资源配置情况</h2>
    <div class="g-title">1、土地厂房情况</div>
    <div class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition">
      <div class="el-table__body-wrapper is-scrolling-none">
        <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" v-if="dataB1.comName!=undefined">
          <tbody>
            <tr class="el-table__row ">
              <td>
                <div class="cell table-header">企业名称</div>
              </td>
              <td>
                <div class="cell">{{dataB1.comName}}</div>
              </td>
              <td>
                <div class="cell table-header">占地面积（亩）</div>
              </td>
              <td>
                <div class="cell">{{dataB1.coverArea}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell table-header">已办证（亩）</div>
              </td>
              <td>
                <div class="cell">{{dataB1.certificateArea}}</div>
              </td>
              <td>
                <div class="cell table-header">建筑面积（m2）</div>
              </td>
              <td>
                <div class="cell">{{dataB1.certificateArea}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell table-header">厂房面积（m2）</div>
              </td>
              <td>
                <div class="cell">{{dataB1.workshopArea}}</div>
              </td>
              <td>
                <div class="cell">企业厂房（场地）占地面积（平方米）</div>
              </td>
              <td>
                <div class="cell">{{dataB1.enterpriseWorkArea}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell">土地已办证（m2）</div>
              </td>
              <td>
                <div class="cell">{{dataB1.certificateArea}}</div>
              </td>
              <td>
                <div class="cell">房产已办证（m2）</div>
              </td>
              <td>
                <div class="cell">{{dataB1.lCertificateArea}}</div>
              </td>
            </tr>

            <tr class="el-table__row ">
              <td>
                <div class="cell table-header">是否有土地证</div>
              </td>
              <td>
                <div class="cell">{{dataB1.landCertificate}}</div>
              </td>
              <td>
                <div class="cell table-header">是否有房产证</div>
              </td>
              <td>
                <div class="cell">{{dataB1.pCertificateArea}}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="g-title">2.能耗情况</div>
    <div class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition">
      <div class="el-table__body-wrapper is-scrolling-none">
        <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" v-if="dataB2.companyname!=''">
          <tbody>
            <tr class="el-table__row ">
              <td>
                <div class="cell table-header">企业名称</div>
              </td>
              <td>
                <div class="cell">{{dataB2.companyname}}</div>
              </td>
              <td>
                <div class="cell table-header">时间</div>
              </td>
              <td>
                <div class="cell">2016年</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell table-header">用电总量</div>
              </td>
              <td>
                <div class="cell">{{dataB2.elect_sum}}</div>
              </td>
              <td>
                <div class="cell table-header">占全市比重</div>
              </td>
              <td>
                <div class="cell">{{dataB2.elect_propor}}%</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell table-header">用气总量</div>
              </td>
              <td>
                <div class="cell">{{dataB2.var_num}}</div>
              </td>
              <td>
                <div class="cell">占全市比重</div>
              </td>
              <td>
                <div class="cell">{{dataB2.var_propor}}%</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell">用煤总量</div>
              </td>
              <td>
                <div class="cell">{{dataB2.cocal_sum}}</div>
              </td>
              <td>
                <div class="cell">占全市比重</div>
              </td>
              <td>
                <div class="cell">{{dataB2.cocal_propor}}%</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell">用水总量</div>
              </td>
              <td>
                <div class="cell">{{dataB2.water_sum}}</div>
              </td>
              <td>
                <div class="cell">占全市比重</div>
              </td>
              <td>
                <div class="cell">{{dataB2.water_propor}}%</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="g-title">3.资金情况</div>
    <div class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition">
      <div class="el-table__body-wrapper is-scrolling-none">
        <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" v-if="dataB3.ownCapital!=''">
          <tbody>
            <tr class="el-table__row ">
              <td rowspan="4">
                <div class="cell table-header">企业资金来源构成</div>
              </td>
              <td colspan="2">
                <div class="cell">自有资金约占比例（％） </div>
              </td>
              <td>
                <div class="cell table-header">{{dataB3.ownCapital}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td colspan="2">
                <div class="cell table-header">银行贷款约占比例（％） </div>
              </td>
              <td>
                <div class="cell">{{dataB3.bankCoans}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td colspan="2">
                <div class="cell table-header">民间借款约占比例（％） </div>
              </td>
              <td>
                <div class="cell">{{dataB3.privateBorrowing}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td colspan="2">
                <div class="cell table-header">其他约占比例（％） </div>
              </td>
              <td>
                <div class="cell">{{dataB3.otherProportions}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell table-header">银行贷款余额（万元）</div>
              </td>
              <td>
                <div class="cell">{{dataB3.bankBalance}}</div>
              </td>
              <td>
                <div class="cell">民间借款余额（万元） </div>
              </td>
              <td>
                <div class="cell">{{dataB3.loanBalance}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell">流动资金需求（万元）</div>
              </td>
              <td>
                <div class="cell">{{dataB3.liquidityRequirements}}</div>
              </td>
              <td>
                <div class="cell">项目资金需求（万元） </div>
              </td>
              <td>
                <div class="cell">{{dataB3.projectRequirements}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell">银行授信额度（万元）</div>
              </td>
              <td>
                <div class="cell">{{dataB3.bankCreditLine}}</div>
              </td>
              <td>
                <div class="cell">已使用授信额度（万元） </div>
              </td>
              <td>
                <div class="cell">{{dataB3.creditLines}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell">年利率（%）</div>
              </td>
              <td>
                <div class="cell">{{dataB3.annualInterestRate}}</div>
              </td>
              <td>
                <div class="cell">2016年利息支出（万元） </div>
              </td>
              <td>
                <div class="cell">{{dataB3.interestPayments}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell">融资使用方向</div>
              </td>
              <td>
                <div class="cell">{{dataB3.financing1}}</div>
              </td>
              <td>
                <div class="cell">{{dataB3.financing2}}</div>
              </td>
              <td>
                <div class="cell">{{dataB3.financing3}}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition">
      <div class="el-table__body-wrapper is-scrolling-none">
        <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" v-if="dataB3.ownCapital!=''">
          <tbody>

            <tr class="el-table__row ">
              <td>
                <div class="cell">银行贷款余额（万元）</div>
              </td>
              <td>
                <div class="cell">2016年</div>
              </td>
              <td>
                <div class="cell">担保方式</div>
              </td>
            </tr>
            <tr class="el-table__row " v-for="(item,index) in dataB3.daikuan" :key="index">
              <td>
                <div class="cell">{{item.name}}）</div>
              </td>
              <td>
                <div class="cell">{{item.zijin}}</div>
              </td>
              <td>
                <div class="cell">信用担保</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <h2>三、企业产品情况</h2>
    <div class="g-title">1.主要产品</div>
    <div class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition">
      <div class="el-table__body-wrapper is-scrolling-none">
        <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" v-if="dataC1.year!=''">
          <tbody>

            <tr class="el-table__row ">
              <td>
                <div class="cell">主要产品名称</div>
              </td>
              <td>
                <div class="cell">设计生产能力</div>
              </td>
              <td>
                <div class="cell">2016实际产量</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell">{{dataC1.mainproduct.mainProduct}}</div>
              </td>
              <td>
                <div class="cell">{{dataC1.mainproduct.planOutput}}</div>
              </td>
              <td>
                <div class="cell">{{dataC1.mainproduct.actualOutput}}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="g-title">2.产品销售渠道</div>
    <div class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition">
      <div class="el-table__body-wrapper is-scrolling-none">
        <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" v-if="dataC1.year!=''">
          <tbody>

            <tr class="el-table__row ">
              <td>
                <div class="cell">产品国内销售占比（%）</div>
              </td>
              <td>
                <div class="cell">{{dataC1.sellway[0].homeShare*100}}%</div>
              </td>
              <td>
                <div class="cell">产品国外销售占比（%）</div>
              </td>
              <td>
                <div class="cell">{{dataC1.sellway[0].abroadShare*100}}%</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell">国内销售主要省份及地区</div>
              </td>
              <td>
                <div class="cell">{{dataC1.sellway[0].homeArea}}</div>
              </td>
              <td>
                <div class="cell">国外销售主要国家和地区</div>
              </td>
              <td>
                <div class="cell">{{dataC1.sellway[0].abroadArea}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell">产品网络销售占比（%）</div>
              </td>
              <td>
                <div class="cell">{{dataC1.sellway[0].networkShare}}</div>
              </td>
              <td>
                <div class="cell">产品传统销售占比（%）</div>
              </td>
              <td>
                <div class="cell">{{dataC1.sellway[0].traditionShare}}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="g-title">3.主要原材料、燃料 </div>
    <div class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition">
      <div class="el-table__body-wrapper is-scrolling-none">
        <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" v-if="dataC1.year!=''">
          <tbody>

            <tr class="el-table__row ">
              <td>
                <div class="cell">序号</div>
              </td>
              <td>
                <div class="cell">主要原材料、燃料名称</div>
              </td>
              <td>
                <div class="cell">单位</div>
              </td>
              <td>
                <div class="cell">年用量</div>
              </td>
            </tr>
            <tr class="el-table__row " v-for="(item,index) in dataC1.yuancailiao" :key="index">
              <td>
                <div class="cell">{{item.order}}</div>
              </td>
              <td>
                <div class="cell">{{item.maincai}}</div>
              </td>
              <td>
                <div class="cell">{{item.unit}}</div>
              </td>
              <td>
                <div class="cell">{{item.num}}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <h2 style="margin:20px 0;">四、企业主要经济指标</h2>
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
              <td>
                <div class="cell">同期</div>
              </td>
              <td>
                <div class="cell">同比</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td colspan="2">
                <div class="cell table-header">工业总产值（万元）</div>
              </td>
              <td>
                <div class="cell">{{dataD.industrialOutput}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.industrialOutput2}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.industrialOutput1}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td colspan="2">
                <div class="cell table-header">工业总产值（万元）</div>
              </td>
              <td>
                <div class="cell">{{dataD.industrialOutput}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.industrialOutput2}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.industrialOutput1}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td colspan="2">
                <div class="cell table-header">工业销售产值（万元）</div>
              </td>
              <td>
                <div class="cell">{{dataD.industrialSale}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.industrialSale2}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.industrialSale1}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td colspan="2">
                <div class="cell table-header">其中：出口交货值（万元）</div>
              </td>
              <td>
                <div class="cell">{{dataD.exportDeliveryValue}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.exportDeliveryValue2}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.exportDeliveryValue1}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td colspan="2">
                <div class="cell table-header">主营业务收入（万元）</div>
              </td>
              <td>
                <div class="cell">{{dataD.mainIncome}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.mainIncome2}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.mainIncome1}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td colspan="2">
                <div class="cell table-header">利润总额（万元）</div>
              </td>
              <td>
                <div class="cell">{{dataD.totalProfit}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.totalProfit2}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.totalProfit1}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td colspan="2">
                <div class="cell table-header">利税合计（万元）</div>
              </td>
              <td>
                <div class="cell">{{dataD.totalProfitTax}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.totalProfitTax2}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.totalProfitTax1}}</div>
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
                <div class="cell table-header">{{dataD.finishedPro}}</div>
              </td>
              <td>
                <div class="cell table-header">{{dataD.finishedPro2}}</div>
              </td>
              <td>
                <div class="cell table-header">{{dataD.finishedPro1}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td>
                <div class="cell table-header">收账款</div>
              </td>

              <td>
                <div class="cell table-header">{{dataD.receivables}}</div>
              </td>
              <td>
                <div class="cell table-header">{{dataD.receivables2}}</div>
              </td>
              <td>
                <div class="cell table-header">{{dataD.receivables1}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td colspan="2">
                <div class="cell table-header">资产合计（万元）</div>
              </td>
              <td>
                <div class="cell">{{dataD.totalAsset}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.totalAsset2}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.totalAsset1}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td colspan="2">
                <div class="cell table-header">负债合计(万元)</div>
              </td>
              <td>
                <div class="cell">{{dataD.totalLiability}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.totalLiability2}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.totalLiability1}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td colspan="2">
                <div class="cell table-header">主营业务成本(万元)</div>
              </td>
              <td>
                <div class="cell">{{dataD.mainCost}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.mainCost2}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.mainCost1}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td colspan="2">
                <div class="cell table-header">销售费用(万元)</div>
              </td>
              <td>
                <div class="cell">{{dataD.saleCost}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.saleCost2}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.saleCost1}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td colspan="2">
                <div class="cell table-header">管理费用(万元)</div>
              </td>
              <td>
                <div class="cell">{{dataD.manageCost}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.manageCost2}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.manageCost1}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td colspan="2">
                <div class="cell table-header">财务费用(万元)</div>
              </td>
              <td>
                <div class="cell">{{dataD.financialCost}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.financialCost2}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.financialCost1}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td colspan="2">
                <div class="cell table-header">用电量（万KWH）</div>
              </td>
              <td>
                <div class="cell">{{dataD.kwh}}</div>
              </td>

              <td>
                <div class="cell">{{dataD.kwh2}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.kwh1}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td colspan="2">
                <div class="cell table-header">上缴国税（万元）</div>
              </td>
              <td>
                <div class="cell">{{dataD.stateTax}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.stateTax2}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.stateTax1}}</div>
              </td>

            </tr>
            <tr class="el-table__row ">
              <td colspan="2">
                <div class="cell table-header">上缴地税（万元）</div>
              </td>
              <td>
                <div class="cell">{{dataD.localTax}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.localTax2}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.localTax1}}</div>
              </td>
            </tr>
            <tr class="el-table__row ">
              <td colspan="2">
                <div class="cell table-header">其他收入（万元）</div>
              </td>
              <td>
                <div class="cell">{{dataD.otherIncome}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.otherIncome2}}</div>
              </td>
              <td>
                <div class="cell">{{dataD.otherIncome1}}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> 


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
        },
        dataB1: {},
        dataB2: {
          companyname: ''
        },
        dataB3: {
          annualInterestRate: 4.35,
          bankBalance: 61000,
          bankCoans: 26,
          bankCreditLine: 400000,
          creditLines: 108061,
          daikuan: [],
          danbao: [],
          financing1: "补充生产经营需要流资",
          financing2: "技术更新、产品开发",
          financing3: "更新陈旧设备",
          interestPayments: 4176,
          liquidityRequirements: 0,
          loanBalance: 0,
          minjian: [],
          otherProportions: 0,
          ownCapital: 74,
          privateBorrowing: 0,
          projectRequirements: 20000,
          reason: null
        },
        dataC1: {
          year: ''
        }
      }
    },
    created() {
      //一、企业基本情况
      //1、企业概况
      axios.get(urls.urls + 'api/companybasic', {
          params: {
            'comcode': this.$store.state.comId
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
            'comcode': this.$store.state.comId
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
            'comcode': this.$store.state.comId
          }
        })
        .then(result => {
          this.dataA3 = result.data
        }).catch(error => {
          console.log(error)
        });
      //二。资源
      //1.土地
      axios.get(urls.urls + 'api/land', {
          params: {
            'comcode': this.$store.state.comId,
            "all": "true"
          }
        })
        .then(result => {
          this.dataB1 = result.data
          console.log(result)
        }).catch(error => {
          console.log(error)
        });
      //2.能耗
      axios.get(urls.urls + 'api/ener', {
          params: {
            'comcode': this.$store.state.comId,
            "all": "true"
          }
        })
        .then(result => {
          console.log(result)
          this.dataB2 = result.data.ener[0]
        }).catch(error => {
          console.log(error)
        });
      //3.资金
      axios.get(urls.urls + 'api/companybankroll', {
          params: {
            'comcode': this.$store.state.comId,
            "all": "true",
            'syear': '',
            'oyear': ''
          }
        })
        .then(result => {
          this.dataB3 = result.data.data
          console.log(result)
        }).catch(error => {
          console.log(error)
        });
      //三、产品
      //1.主要产品
      axios.get(urls.urls + 'api/companyproduct', {
          params: {
            'comcode': this.$store.state.comId,
            "all": "true",
            'syear': '',
            'oyear': ''
          }
        })
        .then(result => {
          this.dataC1 = result.data
          console.log(result)
        }).catch(error => {
          console.log(error)
        });
      //四、企业主要经济指标
      axios.get(urls.urls + 'api/industrialoutput', {
          params: {
            'year': '2017',
            'comcode': this.$store.state.comId
          }
        })
        .then(result => {
          this.dataD = result.data
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

  .gongsibiaoge h2 {
    margin: 20px 0;
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
