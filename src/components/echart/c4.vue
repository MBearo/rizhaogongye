<template>
  <div id="c4">

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
      c4() {
        this.charts4 = echarts.init(document.getElementById('c4'), 'dark')
        this.charts4.setOption({
          title: {
            text: '2017年全市12大产业主要指标完成情况',
           // subtext: '数据来自日照市经济和信息化委员会'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            // data: ['2011年', '2012年']
            bottom: '10px'
          },
          grid: [{
              right: '50%',
              bottom: '50%',
              left:'0',
              top: '10%',
              containLabel: true,

            },
            {
              left: '50%',
              right:'0',
              bottom: '50%',
              top: '10%',
              containLabel: true
            },
            
            {
              right: '50%',
              top: '50%',
              bottom:'10%',
              left:'0',
              containLabel: true
            },{
              left: '50%',
              top: '50%',
              right:'0',
              bottom:'10%',
              containLabel: true
            },
          ],
          yAxis: [{
              type: 'value',
              boundaryGap: [0, 0.01],
              gridIndex: 0,
            }, {
              type: 'value',
              boundaryGap: [0, 0.01],
              gridIndex: 1,
            },
            {
              type: 'value',
              boundaryGap: [0, 0.01],
              gridIndex: 2,
            },
            {
              type: 'value',
              boundaryGap: [0, 0.01],
              gridIndex: 3,
            },
          ],
          xAxis: [{
              type: 'category',
              data: ['钢铁', '石化', '汽车及零部件', '粮油食品', '浆纸', '建材', '能源', '纺织服装', '高端装备', '生物医药',
                '信息技术', '新材料'
              ],
              gridIndex: 0,
              axisLabel: {
                interval: 0,
                formatter: function (value) {
                  return value.split("").join("\n");
                }
              }
            }, {
              type: 'category',
              data: ['钢铁', '石化', '汽车及零部件', '粮油食品', '浆纸', '建材', '能源', '纺织服装', '高端装备', '生物医药',
                '信息技术', '新材料'
              ],
              gridIndex: 1,
              axisLabel: {
                interval: 0,
                formatter: function (value) {
                  return value.split("").join("\n");
                }
              }
            },
            {
              type: 'category',
              data: ['钢铁', '石化', '汽车及零部件', '粮油食品', '浆纸', '建材', '能源', '纺织服装', '高端装备', '生物医药',
                '信息技术', '新材料'
              ],
              gridIndex: 2,
              axisLabel: {
                interval: 0,
                formatter: function (value) {
                  return value.split("").join("\n");
                }
              }
            }, {
              type: 'category',
              data: ['钢铁', '石化', '汽车及零部件', '粮油食品', '浆纸', '建材', '能源', '纺织服装', '高端装备', '生物医药',
                '信息技术', '新材料'
              ],
              gridIndex: 3,
              axisLabel: {
                interval: 0,
                formatter: function (value) {
                  return value.split("").join("\n");
                }
              }
            },
          ],
          series: [{
              xAxisIndex: 0,
              yAxisIndex: 0,
              name: '工业总产值',
              type: 'bar',
              data: [778.8, 290, 546.6, 379.7, 126.1, 145.8, 142.3, 69.6, 56, 5.1, 98.6, 15.3]
            },
            {
              xAxisIndex: 1,
              yAxisIndex: 1,
              name: '主营业务收入',
              type: 'bar',
              data: [785.9, 342.4, 542.5, 346.4, 126.5, 118.1, 77, 60.9, 54.8, 5.1, 99.2, 15.1]
            },
            {
              xAxisIndex: 2,
              yAxisIndex: 2,
              name: '利润总额',
              type: 'bar',
              data: [85.7, 6.6, 16.8, 7, 9.9, 11.5, 7.2, 1.1, 1.7, 0.27, 4.7, 0.74]
            },
            {
              xAxisIndex: 3,
              yAxisIndex: 3,
              name: '利税合计',
              type: 'bar',
              data: [105.8, 10.2, 20.6, 10.3, 15, 16.9, 10.5, 2.3, 2.1, 0.36, 6.3, 0.74]
            }
          ]
        })
      }
    },
    mounted() {
      this.$nextTick(() => {
        document.querySelector('#c4').style.height = document.querySelector('.wocao4').offsetHeight - 20 + 'px'
        this.c4();
      });

    }
  }

</script>

<style>


</style>
