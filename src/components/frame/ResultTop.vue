<template>
  <div >
    <div style="height:40px;">
      <div class="lie" :class="{reile:wocao}">
        <div>
          <el-tabs v-model="lujing" @tab-click="switchtab">
            <el-tab-pane name="first">
              <span slot="label">
                <i class="iconfont icon-gongsixinxi"></i> 公司列表</span>
            </el-tab-pane>
            <el-tab-pane name="second">
              <span slot="label">
                <i class="iconfont icon-zidingyilie"></i> 数据表格</span>
            </el-tab-pane>
            <el-tab-pane name="third">
              <span slot="label">
                <i class="iconfont icon-tubiao-zhexiantu"></i> 数据图表</span>
            </el-tab-pane>
            <el-tab-pane name="fourth">
              <span slot="label">
                <i class="iconfont icon-ditu"></i> 数据地图</span>
            </el-tab-pane>
            <!-- <el-tab-pane  name="fifth">
            <span slot="label">
              <i class="iconfont icon-ditu"></i> 经济指标</span>
          </el-tab-pane>
          <el-tab-pane  name="sixth">
            <span slot="label">
              <i class="iconfont icon-ditu"></i> 技术创新指标（2016年）</span>
          </el-tab-pane> -->
          </el-tabs>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    components: {
    },
    created() {

    },
    computed: {
      lujing: {
        set(value) {

        },
        get() {
          if (this.$route.path == '/result/resulttop/companylist') {
            return 'first'
          } else if (this.$route.path == '/result/resulttop/navtion') {
            return 'second'
          }
        }
      }
    },
    data() {
      return {
        //activeName: 'first',
        resultIndex: 0,
        routerlist: ['companylist', 'navtion'],
        wocao: false,
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop >= 85) {
          this.wocao = true;
        } else {
          this.wocao = false;
        }
      },
      switchtab(tab, event) {
        this.resultIndex = tab.index;
        this.$router.push({
          path: this.routerlist[tab.index]
        })
      },
    },


  }

</script>

<style scoped>
  /* .biaoqian {
    position: absolute;
    top: 85px;
    left: 0px;
  } */

  .lie>div {
    width: 1000px;
    margin: 0 auto;
  }

  .lie {
    /* background-color: #f7fbfd; */
    position: relative;
    height: 40px;
  }

  .lie::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #e4e7ed;
    z-index: 1;
  }

  .back {
    /* background-color: #fbfbfb; */
    padding-top: 20px;
    padding-bottom: 30px;
  }

  .reile {
    position: fixed;
    top: 0px;
    width: 100%;
    background-color: white;
    z-index: 1000;
  }

</style>

<style>
  .top .el-tabs__header {
    margin-bottom: 10px;
  }

  .top .el-input {
    width: 300px;
  }

  .lie .el-tabs__content {
    display: none;
  }

  .lie .el-tabs__header {
    margin-bottom: 0;
  }

</style>
