<template>
  <div>
    <div class="topcontent" style="height:85px;">
      <div class="top flex">
        <div tag="div" to="/" class=" flex-0 logo ib-vertical-align">
          <router-link tag="i" to="/" class="iconfont icon-duqushujuku"></router-link>
          <router-link tag="span" to="/">日照工业大数据分析平台
            <span style="color:#ccc;font-size:12px;font-weight:normal">{{$store.state.banben.v}}</span>
          </router-link>
        </div>
        <div class="flex-1 daohang">
          <router-link tag="div" :class="{active:dasuoyin==0}" to="/result/companylist">
            搜索结果
          </router-link>
          <router-link tag="div" :class="{active:dasuoyin==1}" to="/result/table/basic">
            表格分析
          </router-link>
          <router-link tag="div" :class="{active:dasuoyin==2}" to="/chart">
            图表分析
          </router-link>
          <router-link tag="div" :class="{active:dasuoyin==3}" to="/result/map">
            地图分析
          </router-link>
        </div>

        <div class="flex-0 flex" style="flex-direction: column;justify-content: flex-end">
          <el-popover ref="popover4" placement="bottom" width="240" trigger="hover">
            <shaixuan></shaixuan>
          </el-popover>
          <el-badge :value="tiaoshu" class="item" style="margin-right:20px;">
            <el-button v-popover:popover4>
              <i class="iconfont icon-shaixuan"></i> 筛选</el-button>
          </el-badge>
        </div>
        <div class=" flex-0" style="position:relative;">
          <div class="f-rongqi">
            <span class="fenleilist" v-for="(item,index) in fenlei" :class="[index==fenleiactive?'active':'']" :key="index">
              <span class="biaoqianming" @click="qiehuan(index)">
                <i class="iconfont" :class="item.icon"></i>
                {{item.name}}</span>
              <span class="bianqianjiange"> | </span>
            </span>
          </div>
          <div>
            <hangye v-if="fenleiactive==0" :display="true" @soule="soule"></hangye>
            <chanye v-if="fenleiactive==1" :display="true" @soule="soule"></chanye>
            <chanzhi v-else-if="fenleiactive==2" :display="true" @soule="soule"></chanzhi>
            <diyu v-else-if="fenleiactive==3" :display="true" @soule="soule"></diyu>
            <yuanqu v-else-if="fenleiactive==4" :display="true" @soule="soule"></yuanqu>
            <gaowei v-else-if="fenleiactive==5" :display="true" @soule="soule"></gaowei>
            <div v-else-if="fenleiactive==6" :display="true" >
              <gongsiming class="inline-block"></gongsiming>
              <el-button class=" inline-block" type="primary" icon="el-icon-search" style="margin-left:10px" @click="soule">搜索</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import hangye from './hangye'
  import chanye from './chanye'
  import chanzhi from './chanzhi'
  import diyu from './diyu'
  import yuanqu from './yuanqu'
  import gaowei from './gaowei'
  import gongsiming from './gongsiming'
  import shaixuan from './shaixuan'
  export default {
    components: {
      hangye,
      chanye,
      chanzhi,
      diyu,
      yuanqu,
      gaowei,
      gongsiming,
      shaixuan
    },
    data() {
      return {
        fenlei: [{
            icon: 'icon-15rili',
            name: '行业'
          }, {
            icon: 'icon-fenlei',
            name: '产业'
          }, {
            icon: 'icon-areachart',
            name: '产值'
          }, {
            icon: 'icon-position',
            name: '地域'
          }, {
            icon: 'icon-chanyeyuanqu',
            name: '工业园区'
          }, {
            icon: 'icon-weixianqu',
            name: '高危高耗能'
          },
          {
            icon: 'icon-gongsixinxi',
            name: '公司名称'
          },
        ],
        fenleiactive: 0,
      }
    },
    computed: {
      dasuoyin() {
        var url = this.$route.path.split('/');
        var shuzi = 0;
        if (url[2] == 'companylist') {
          shuzi = 0;
        } else if (url[2] == 'table') {
          shuzi = 1;
        } else if(url[2] == 'map'){
          shuzi = 3;
        }
        return shuzi
      },
      tiaoshu() {
        var zongshu = 0;
        for(var i=0;i<7;i++){
         zongshu+= this.qukong(this.$store.state.duoxuan[i].searchLabel)
        }
        return zongshu
        // return this.$store.state.duoxuan[0].searchLabel.length + this.$store.state.duoxuan[1].searchLabel.length + this
        //   .$store.state.duoxuan[2].searchLabel.length + this.$store.state.duoxuan[3].searchLabel.length + this.$store.state
        //   .duoxuan[4].searchLabel.length + this.$store.state.duoxuan[5].searchLabel.length + this.$store.state.duoxuan[
        //     6].searchLabel.length + this.$store.state.duoxuan[7].searchLabel.length
      },
    },

    methods: {
      qiehuan(index) {
        this.fenleiactive = index
      },
      soule(){
        this.$emit('soule2')
      },
      qukong(array){
        var tiaoshu=0;
        array.forEach(value => {
          if(value.length!=0){
            tiaoshu++
          }
        });
        return tiaoshu
      }
    }
  }

</script>

<style scoped>
  .topcontent {
    border-bottom: 1px solid #f5f5f5;
  }

  .top {
    /* max-width: 1100px;
    margin: 0 auto; */
    padding: 10px 20px 10px;
    box-sizing: border-box;
    flex-wrap: nowrap;
    /* border-bottom: 1px solid #ccc; */
  }

  .top .logo {
    /* padding-right: 80px; */
    font-size: 24px;
    cursor: pointer;
  }

  .top .logo>i,
  .top .logo>span {
    vertical-align: middle;
  }

  .top .logo i {
    font-size: 36px;
  }

  .fenleilist {
    cursor: pointer;
  }

  .fenleilist:hover>.iconfont,
  .fenleilist:hover>.biaoqianming {
    color: #303133;
  }

  .fenleilist:last-child>.bianqianjiange {
    display: none;
  }

  .f-rongqi {
    margin-bottom: 5px;
  }

  .bianqianjiange {
    color: #c7c7c7;
    padding: 0 5px;
  }

  .fenleilist.active>.iconfont,
  .fenleilist.active>.biaoqianming {
    color: #409EFF;
  }

  .fenleilist>.iconfont,
  .fenleilist>.biaoqianming {
    color: #606266;
  }

  .biaoqianming {
    font-size: 12px;
  }

  @media (max-width: 1040px) {
    .logo>span {
      display: none;
    }
    .logo {
      flex: none;
      margin-right: 20px;
    }
  }

  .footer {
    width: 100%;
    font-size: 12px;
    color: #666;
    text-align: center;
    padding: 20px 0;
    box-sizing: border-box;
    background-color: #f7fbfd;
  }

  .daohang {
    display: flex;
    align-items: center;
    padding-left: 3%;
    box-sizing: border-box;
  }

  .daohang>div {
    margin-right: 20px;
    cursor: pointer;
    transition: .15s;
    color: #909399;
  }

  .daohang>div:hover {
    color: #333;
  }

  .daohang>div.active {
    color: #409EFF;
  }

</style>
