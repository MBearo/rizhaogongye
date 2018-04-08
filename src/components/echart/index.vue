<template>
  <div class="body flex">
    <div class="h-title bg-contain text-center color-white flex-0" style="position:relative">
      <div class="fanhuianniu" @click="fanhui">
        <i class="el-icon-arrow-left"></i>
        返回
      </div>
      <div class="">
        日照市大数据可视化平台
      </div>
      <div class="h-subtitle">
        数据来源于日照市经济和信息化委员会
      </div>
    </div>
    <main class="content flex flex-1">
      <div class="m-col-1 flex flex-0">
        <div class="" :style="{height:wocao}">
          <div class="">

          </div>
          <div class="block-border wocao6">
            <c6></c6>
          </div>
        </div>
        <div class="" :style="{height:wocao}">
          <div class="">

          </div>
          <div class="block-border wocao7">
            <c7></c7>
          </div>
        </div>
        <div class="" :style="{height:wocao}">
          <div class="">

          </div>
          <div class="block-border wocao8">
            <c8></c8>
          </div>
        </div>
      </div>
      <div class="m-col-2 flex flex-1">
        <div class="flex flex-1">
          <!-- <div class="flex-1 wocao">
			
          </div> -->
          <c2 class="flex-1"></c2>
          <div class="flex-0" style="width: 180px;">
            <div class="zhibiao">
              <div class="wenzi">
                工业总产值：
              </div>
              <div class="shuzi">
                28,019
                <span class="xiaozi">亿元</span>
              </div>
            </div>
            <div class="zhibiao">
              <div class="wenzi">
                产值增幅：
              </div>
              <div class="shuzi">
                8.9
                <span class="xiaozi">%</span>
              </div>
            </div>
            <div class="zhibiao">
              <div class="wenzi">
                技改项目：
              </div>
              <div class="shuzi">
                265
                <span class="xiaozi">项</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-0">
          <div class="">
            <!-- 产业聚集窗口平台信息统计3 -->
          </div>
          <div class="block-border wocao3">
            <c3 style="height:200px;"></c3>
          </div>
        </div>
      </div>
      <div class="m-col-3 flex flex-0">
        <div class="flex flex-1 shuzhe">
          <div class="flex-0">
            <!-- 经济指标 -->
          </div>
          <div class="block-border flex-1 wocao4" ref="c4f">
            <!-- <div id="c4" :style="{height:c4h}"></div> -->
            <c4></c4>
          </div>
        </div>
        <div class="flex-0">
          <div class="">
            <!-- 区县综合窗口平台信息统计5 -->
          </div>
          <div class="block-border wocao5">
            <c5 style="height:200px"></c5>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import c2 from './c2'
  import c3 from './c3'
  import c4 from './c4'
  import c5 from './c5'
  import c6 from './c6'
  import c7 from './c7'
  import c8 from './c8'
  export default {
    components: {
      c2,
      c3,
      c4,
      c5,
      c6,
      c7,
      c8
    },
    data() {
      return {
        wocao:'300px'
      }
    },
    methods: {
      fanhui() {
        this.$router.go(-1)
      }
    },
    mounted() {
       this.wocao = document.querySelector('.m-col-1').offsetHeight/3 + 'px'
    }
  }

</script>

<style scoped>
  .fanhuianniu {
    position: absolute;
    top: 10px;
    left: 20px;
    padding: 5px 10px;
    border: 1px solid #51cfd8;
    border-radius: 4px;
    color: #51cfd8;
    font-size: 14px;
    cursor: pointer;
  }

  .fanhuianniu:hover {
    color: #77ecf5;
    border-color: #77ecf5;
  }

</style>

<style>
  html,
  body {
    height: 100%;
  }

  .body {
    background-image: url(/static/bg.png);
    color: #51cfd8;
  }

  .h-title {
    height: 70px;
    background-image: url(/static/title.png);
    padding: 10px 0;
    box-sizing: border-box;
    font-size: 24px;
  }

  .h-subtitle {
    font-size: 12px;
    color: #ccc;
  }

  .content {
    /* height: 100%; */
    flex-wrap: nowrap;
  }

  .content>div {
    height: inherit;
    flex-direction: column;
    flex-wrap: nowrap;
  }

  .content>div>div {
    /*margin: 5px;*/
    box-sizing: border-box;
    padding: 5px;
  }

  .shuzhe {
    flex-direction: column;
    flex-wrap: nowrap;
  }

  .m-col-1>div {
    height: 33%;
    display: flex;
    flex-direction: column;
  }

  .m-col-1>div>div:nth-child(1) {
    flex: none;
  }

  .m-col-1>div>div:nth-child(2) {
    flex: auto;
  }

  .m-col-1,
  .m-col-3 {
    width: 30%;
  }

  .m-col-2>div {
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
  }

  .body {
    height: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
  }

  .block-border {
    border-image: url(/static/kuang.png) 16 14 round;
    border-width: 10px;
    border-style: solid;
    box-sizing: border-box;
  }

  .zhibiao {
    margin-top: 20px;
  }

  .zhibiao>.wenzi {
    margin-bottom: 5px;
  }

  .zhibiao>.shuzi {
    color: white;
    font-size: 40px;
    display: inline-block;
    padding: 0 5px;
    box-sizing: border-box;
  }

  .zhibiao:nth-child(1)>.shuzi {
    color: #e69d87;
  }

  .zhibiao:nth-child(2)>.shuzi {
    color: #8dc1a9;
  }

  .zhibiao:nth-child(3)>.shuzi {
    color: #ea7e53;
  }

  .zhibiao:nth-child(4)>.shuzi {
    color: #eedd78;
  }

  .xiaozi {
    font-size: 14px;
  }

</style>
