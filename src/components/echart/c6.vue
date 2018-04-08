<template>
  <div id="c6">

  </div>
</template>

<script>
  import echarts from 'echarts'
  import 'echarts/theme/dark';
  import 'echarts/theme/infographic';
  export default {
    data() {
      return {

      }
    },
    created() {

    },
    methods: {
      c6() {
        this.charts4 = echarts.init(document.getElementById('c6'), 'dark')
        this.charts4.setOption({
          title: {
            text: '重点产品价格走势',
            //subtext: '数据来自日照市经济和信息化委员会'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            x: 'right',
            orient: 'vertical',
            // data: ['2011年', '2012年']
          },
          grid: [{
            right: '15%',
            bottom: '15%',
            top: '18%',
            // containLabel: true
          }],
          yAxis: [{
            type: 'value',
            boundaryGap: [0, 0.01],
            gridIndex: 0,
          }],
          xAxis: [{
            type: 'category',
            data: ['6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            gridIndex: 0,
          }],
          series: [{
              name: 'H型钢',
              data: [3210, 3469, 3745, 3944, 3469, 3745, 3944],
              type: 'line',
              smooth: true
            },
            {
              name: 'ESP 热轧卷板',
              data: [3271, 3578, 4842, 4151, 3578, 4842, 4151],
              type: 'line',
              smooth: true
            }, {
              name: '汽油',
              data: [5224, 5150, 4900, 5420, 5150, 4900, 5420],
              type: 'line',
              smooth: true
            }, {
              name: '柴油',
              data: [4222, 4655, 4650, 5150, 4655, 4650, 5150],
              type: 'line',
              smooth: true
            }, {
              name: '沥青',
              data: [2450, 3300, 2200, 2350, 3300, 2200, 2350],
              type: 'line',
              smooth: true
            }, {
              name: '豆油',
              data: [6100, 5934, 6100, 6226, 5934, 6100, 6226],
              type: 'line',
              smooth: true
            }, {
              name: '豆粕',
              data: [2880, 2962, 2880, 2845, 2962, 2880, 2845],
              type: 'line',
              smooth: true
            }, {
              name: '纸板',
              data: [6201, 6100, 6113, 7310, 6100, 6113, 7310],
              type: 'line',
              smooth: true
            }, {
              name: '浆板',
              data: [4874, 4700, 4700, 6080, 4700, 4700, 6080],
              type: 'line',
              smooth: true
            }, ,
          ]
        })
      }
    },
    mounted() {
      this.$nextTick(() => {
        document.querySelector('#c6').style.height = document.querySelector('.wocao6').offsetHeight - 20 + 'px'
        this.c6();
      });

    }
  }

</script>

<style>


</style>
