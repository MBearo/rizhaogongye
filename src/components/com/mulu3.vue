<template>
  <div>
    <div class="mulu3">
      <div v-for="(item,index) in shuju" :key="index">
        <div class="title">
          <i class="iconfont" :class="item.ic"></i> {{item.title}}</div>
        <div class="item" :class="{active:lala.active}" v-for="(lala,index2) in item.children" :key="index2+100">{{lala.title}}</div>
      </div>
      <div class="title">
        <i class="iconfont icon-50"></i> 主要经济指标</div>
      <div class="title">
        <i class="iconfont icon-dengpao"></i> 技术创新活动指标</div>
      <!-- <div class="subtitle"></div> -->
      <!-- <div class="item" :class="{active:xianshi==0}">企业概况</div>
      <div class="item" :class="{active:xianshi==1}">主要负责人</div>
      <div class="item" :class="{active:xianshi==2}">股权情况</div>

      <div class="title">
        <i class="iconfont icon-xinxi"></i> 资源配置情况</div>
      <div class="item" :class="{active:xianshi==3}">土地厂房情况</div>
      <div class="item" :class="{active:xianshi==4}">能耗情况</div>
      <div class="item" :class="{active:xianshi==5}">资金情况</div>
      <div class="item" :class="{active:xianshi==6}">用工情况</div>
      <div class="item" :class="{active:xianshi==7}">2017年新上项目及拟推进项目</div> -->
      <div class="tootip">
          目<br>
          录</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shuju: [{
            ic: 'icon-xinxi',
            title: '基本情况',
            children: [{
                title: '企业概况',
                active: true
              },
              {
                title: '主要负责人',
                active: false
              },
              {
                title: '股权情况',
                active: false
              },
            ]
          }, {
            ic: 'icon-ziyuanku',
            title: '资源配置情况',
            children: [{
                title: '土地厂房情况',
                active: false
              },
              {
                title: '能耗情况',
                active: false
              },
              {
                title: '资金情况',
                active: false
              },
              {
                title: '用工情况',
                active: false
              },
              {
                title: '新上及拟推进项目',
                active: false
              },
            ]
          },
          {
            ic: 'icon-chanpinyufuwu',
            title: '产品情况',
            children: [{
                title: '主要产品',
                active: false
              },
              {
                title: '产品销售渠道',
                active: false
              },
              {
                title: '主要供应商、销售商',
                active: false
              },
              {
                title: '主要原材料、燃料',
                active: false
              }
            ]
          }
        ],
        xianshide: 0,
      }
    },
    created() {
      let suoyini = 0;
      this.shuju.forEach((value, index, array) => {
        value.children.forEach((svalue) => {
          svalue.id = suoyini;
          suoyini++;
        })
      });
    },
    computed: {
      xianshi() {
        return this.$store.state.menu
      }
    },
    watch: {
      xianshi() {
        this.xianshi.forEach((value, index, array) => {
          if (index + 1 > array.length) {
            return
          } else {
            if (value < 65 && array[index + 1] > 65) {
              this.xianshide = index
            }
          }
        });
      },
      xianshide() {
        this.shuju.forEach((value, index, array) => {
          value.children.forEach((svalue) => {
            svalue.active = false
            if (svalue.id == this.xianshide) {
              svalue.active = true
            }
          })
        });
      }
    }
  }

</script>

<style scoped>
  .title {
    font-size: 17px;
    font-weight: bold;
    color: #333;
    line-height: 40px;
    height: 40px;
    margin: 0;
    padding: 0;
    text-decoration: none;
    display: block;
    position: relative;
    transition: .15s ease-out;
    font-weight: 700;
  }

  .subtitle {
    font-size: 12px;
    color: #999;
    line-height: 26px;
    margin-top: 15px;
  }

  .item {
    display: block;
    /* height: 40px; */
    color: #444;
    /* line-height: 40px; */
    line-height: 1.7;
    margin: 15px 0;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 400;
    padding-left: 20px;
    box-sizing: border-box;
    cursor: pointer;
    transition: .15s ease-out;
  }

  .item.active {
    color: #409eff;
    border-left: 3px solid #409eff;
  }

  .item:hover {
    color: #409eff;
  }

  .mulu3 .iconfont {
    color: rgb(144, 147, 153)
  }

  .mulu3 {
    /* transition: .1s; */
    /* opacity: .5; */
    border-right: 1px solid #e6e6e6;
    /* transition: .3s;
    transform: translate(-90%, 0); */
    position: relative;
  }

  .tootip {
      position: absolute;
      top: 50%;
      right: -30px;
      border: 1px solid #ccc;
      border-left: none;
      padding: 10px 5px;
      box-sizing: border-box;
      font-size: 18px;
      transition: .2s;
  }

  .mulu3:hover {
    opacity: 1;
    /* transform: translate(0, 0); */
  }

</style>
