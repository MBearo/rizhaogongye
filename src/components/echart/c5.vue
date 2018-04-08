<template>
  <div id="c5">

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
      c5() {
        this.charts4 = echarts.init(document.getElementById('c5'), 'dark')
        this.charts4.setOption({
          title: {
            text: '人员占比雷达图'
          },
          tooltip: {},
          legend: {
            data: ['五莲', '岚山','东港','莒县'],
            orient: 'vertical',
            right:0,
            top:10
          },
          radar: {
            // shape: 'circle',
            name: {
              textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
              }
            },
            indicator: [{
                name: '企业高管',
                max: 6500
              },
              {
                name: '本科学历',
                max: 16000
              },
              {
                name: '研究生',
                max: 30000
              },
              {
                name: '技术人员',
                max: 38000
              },
              {
                name: '一般人员',
                max: 52000
              },
              {
                name: '工人数',
                max: 25000
              }
            ]
          },
          series: [{
            name: '人员分配',
            type: 'radar',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            // areaStyle: {normal: {}},
            data: [{
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: '五莲'
              },
              {
                value: [4000, 14000, 28000, 31000, 42000, 21000],
                name: '岚山'
              }
              ,
              {
                value: [3000, 12000, 20000, 21000, 52000, 17000],
                name: '东港'
              }
              ,
              {
                value: [1000, 9000, 18000, 11000, 22000, 9000],
                name: '莒县'
              }
            ]
          }]
        })
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.c5();
      });

    }
  }

</script>

<style>


</style>
