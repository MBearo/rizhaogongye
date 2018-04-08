<template>
  <div id="c7">

  </div>
</template>

<script>
  import echarts from 'echarts'
  import 'echarts/theme/dark';
  export default {
    data() {
      return {

      }
    },
    created() {

    },
    methods: {
      c7() {
        this.charts4 = echarts.init(document.getElementById('c7'), 'dark')
        this.charts4.setOption({
          title: {
            text: '省、市工业用电量增幅趋势',
            //subtext: '纯属虚构'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['全省', '全市'],
            right:0
          },
          grid: {
            top: '60px',
            left: '1%',
            right: '5%',
            bottom: '1%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value} %'
            }
          },
          series: [{
              name: '全省',
              type: 'line',
              data: [-3.21, 8.90, 8.98, 6.91, 3.37, -0.29, -0.85, -1.26, -0.64, 1.10, 2.91],
              markPoint: {
                data: [{
                    type: 'max',
                    name: '最大值'
                  },
                  {
                    type: 'min',
                    name: '最小值'
                  }
                ]
              },
              markLine: {
                data: [{
                  type: 'average',
                  name: '平均值'
                }]
              }
            },
            {
              name: '全市',
              type: 'line',
              data: [-9.49, -0.69, 0.28, 1.12, 1.74, 2.52, 2.89, 2.92, 3.10, 3.36, 4.12],

              markLine: {
                data: [{
                    type: 'average',
                    name: '平均值'
                  },
                  [{
                    symbol: 'none',
                    x: '90%',
                    yAxis: 'max'
                  }, {
                    symbol: 'circle',
                    label: {
                      normal: {
                        position: 'start',
                        formatter: '最大值'
                      }
                    },
                    type: 'max',
                    name: '最高点'
                  }]
                ]
              }
            }
          ]

        })
      }
    },
    mounted() {
      this.$nextTick(() => {
        document.querySelector('#c7').style.height = document.querySelector('.wocao7').offsetHeight - 20 + 'px'
        this.c7();
      });

    }
  }

</script>

<style>


</style>
