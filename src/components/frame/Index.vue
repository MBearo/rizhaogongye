<style>
  body {
    /* overflow-y: hidden; */
  }

  .rongqi .el-tabs__nav {
    display: flex;
    float: none;
  }

  .el-tabs__item {
    flex: auto;
  }

  .el-tabs__header {
    margin-bottom: 60px;
  }

  .el-cascader,
  .el-input {
    width: 400px;
  }

</style>
<style scoped>
  .hello {
    text-align: center;
  }

  .header {
    margin-bottom: 100px;
    height: 20px;
    padding: 5px 20px;
    box-sizing: border-box;
  }

  .rongqi {
    max-width: 800px;
    margin: 0 auto;
  }

  .zuoduiqi {
    text-align: left;
    color: #909399;
    font-size: 12px;
  }

  .logo {
    font-size: 48px;
  }

  .thead {
    margin-bottom: 40px;
  }

  .xuanze {
    text-align: left;
    position: absolute;
    top: 308px;
  }

  .el-tag {
    margin-right: 5px;
  }

  .yejiao {
    position: fixed;
    bottom: 0;
    left: 0;
    /* margin-top:30px; */
    width: 100%;
    font-size: 12px;
    color: #999;
    text-align: center;
    padding-bottom: 10px;
  }

  .classenter {
    margin-top: 80px;
  }

  .classenter>.qukuai {
    padding-top: 15px;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
    transition: all .3s;
    border: 1px solid #f2f2f2;
    width: 140px;
    height: 140px;
    border-radius: 4px;
    color: #666;
  }

  .classenter>.qukuai:hover {
    color: #409EFF;
    transform: translate(0, -1px);
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    border-color: #409EFF;
  }

  .classenter>.qukuai:hover>.c-tubiao {
    /*transform: scale(1.1,1.1);*/
  }

  .c-tubiao {
    transition: transform .3s;
  }

  .c-tubiao>i {
    font-size: 66px;
  }

  .c-mingzi {
    margin-top: 8px;
    font-size: 18px;
  }

  .sousuojieguo {
    text-align: left;
    margin-top: 20px;
  }

  .sou-cont {
    /*padding:10px;
    box-sizing: border-box;
    border: 1px solid #dcdfe6;
    border-radius: 4px;*/
  }

  .sou-lie {
    padding: 10px 15px;
    box-sizing: border-box;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  .sou-title {
    font-size: 20px;
    margin-bottom: 5px;
    color: #303133;
  }

  .sou-lie {
    font-size: 16px;
  }

  .sou-lie>div {
    margin-bottom: 8px;
  }

  .sou-lie>div:last-child {
    margin-bottom: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all .3s
  }

  .fade-enter,
  .fade-leave-to
  /* .fade-leave-active in below version 2.1.8 */

    {
    transform: translate(0, 100%);
    opacity: 0;
  }

</style>
<template>
  <div class="hello">
    <header class="header flex">
      <!-- <el-switch v-model="helpswitch" active-color="#409eff" inactive-color="#c8c9cc">
      </el-switch> -->
    </header>
    <div :span="18" class="rongqi">
      <div class="thead">
        <span>
          <i class="iconfont icon-duqushujuku logo"></i>
        </span>
        <h2>日照工业大数据分析平台 <span style="color:#ccc;font-size:12px;font-weight:normal">{{$store.state.banben.v}}</span></h2>
      </div>
      <el-tabs v-model="tabsactiveName2">
        <el-tab-pane name="first">
          <span slot="label">
            <i class="iconfont icon-15rili"></i> 行业</span>
          <!-- seventh start-->
          <hangye></hangye>
          <!-- seventh end-->
        </el-tab-pane>

        <el-tab-pane name="second">
          <span slot="label">
            <i class="iconfont icon-fenlei"></i> 产业</span>
          <!-- first start-->
          <chanye></chanye>
          <!-- first end-->
        </el-tab-pane>

        <el-tab-pane name="third">
          <span slot="label">
            <i class="iconfont icon-areachart"></i> 产值</span>
          <!-- second start -->
          <chanzhi></chanzhi>
          <!-- second end -->
        </el-tab-pane>

        <el-tab-pane label="地域" name="fourth">
          <span slot="label">
            <i class="iconfont icon-position"></i> 地域</span>
          <!-- third start-->
          <diyu></diyu>
          <!-- third end-->
        </el-tab-pane>

        <el-tab-pane label="工业园区" name="fifth">
          <span slot="label">
            <i class="iconfont icon-chanyeyuanqu"></i> 工业园区</span>
          <!-- fourth start-->
          <yuanqu></yuanqu>
          <!-- fourth end-->
        </el-tab-pane>

        <el-tab-pane label="高危高耗能" name="sixth">
          <span slot="label">
            <i class="iconfont icon-weixianqu"></i> 高危高耗能</span>
          <!-- fifith start-->
          <gaowei></gaowei>
          <!-- fifith end-->
        </el-tab-pane>

        <el-tab-pane label="公司名称" name="seventh">
          <span slot="label">
            <i class="iconfont icon-gongsixinxi"></i> 公司名称</span>
          <!-- sixth start-->
          <gongsiming class="inline-block"></gongsiming>
          <el-button class=" inline-block" type="primary" icon="el-icon-search" style="margin-left:10px">搜索</el-button>
          <!-- sixth end-->
        </el-tab-pane>

      </el-tabs>
      <div class="classenter flex flex-justify-around" key="classenter">
        <router-link class="qukuai" tag="div" to="/result/table/economy">
          <div class="c-tubiao">
            <i class="iconfont icon-zidingyilie"></i>
          </div>
          <div class="c-mingzi">
            数据表格
          </div>
        </router-link>
        <router-link class="qukuai" tag="div" to="/chart">
          <div class="c-tubiao">
            <i class="iconfont icon-tubiao-zhexiantu"></i>
          </div>
          <div class="c-mingzi">
            可视化图表
          </div>
        </router-link>
        <router-link class="qukuai" tag="div" to="/result/map">
          <div class="c-tubiao">
            <i class="iconfont icon-ditu"></i>
          </div>
          <div class="c-mingzi">
            数据地图
          </div>
        </router-link>
      </div>
      <div class="xuanze">
        <el-tag v-if="item!=''" v-for="(item,index) in tags1" :key="index" closable size="small" @close="taghandleClose(item,0)">
          {{item.join('/')}}
        </el-tag>
        <el-tag v-if="item!=''" v-for="(item,index) in tags2" :key="index+20" closable size="small" @close="taghandleClose(item,1)">
          {{item.join('/')}}
        </el-tag>
        <el-tag v-if="item!=''" v-for="(item,index) in tags3" :key="index+40" closable size="small" @close="taghandleClose(item,2)">
          {{item.join('/')}}
        </el-tag>
        <el-tag v-if="item!=''" v-for="(item,index) in tags4" :key="index+60" closable size="small" @close="taghandleClose(item,3)">
          {{item.join('/')}}
        </el-tag>
      </div>
    </div>

    <div class="yejiao">
      Copyright © 2018 Dhand. All Rights Reserved.青岛聚脉网络科技有限公司
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
  import hangye from '../com/hangye'
  import chanye from '../com/chanye'
  import chanzhi from '../com/chanzhi'
  import diyu from '../com/diyu'
  import yuanqu from '../com/yuanqu'
  import gaowei from '../com/gaowei'
  import gongsiming from '../com/gongsiming'

  export default {
    components: {
      hangye,
      chanye,
      chanzhi,
      diyu,
      yuanqu,
      gaowei,
      gongsiming
    },
    data() {
      return {
        dialogVisible: false,
        tabsactiveName2: 'first',
        demo: '',
        searchResult: false,
        //帮助开启关闭
        helpswitch: true,
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      taghandleClose(value, eq) {
        this.$store.commit('tagsDelete_Mu', {
          value,
          eq
        })
      },
    },
    computed: {
      tags1() {
        return this.$store.state.duoxuan[0].searchLabel
      },
      tags2() {
        return this.$store.state.duoxuan[1].searchLabel
      },
      tags3() {
        return this.$store.state.duoxuan[2].searchLabel
      },
      tags4() {
        return this.$store.state.duoxuan[3].searchLabel
      },
      tags5() {
        return this.$store.state.duoxuan[4].searchLabel
      },
      tags6() {
        return this.$store.state.duoxuan[5].searchLabel
      },
      tags7() {
        return this.$store.state.duoxuan[6].searchLabel
      }
    }
  };

</script>
