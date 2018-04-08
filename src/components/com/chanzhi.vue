<template>
  <div>
    <div class="daxiaoshu inline-block">
      <div class="inline-block" style="">
        <el-select v-model="valueactive" placeholder="请选择" class="shuju xuanzze inline-block" @change="moshixuanze">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-input-number class="shuju inline-block" controls-position="right" v-model="minnum" label="最小值" :step="100" :disabled="dismin"
          @change="minxuan"></el-input-number>
        <span> 万元 - </span>
        <el-input-number class="shuju inline-block" controls-position="right" v-model="maxnum" label="最大值" :step="100" :disabled="dismax"
          @change="maxxuan"></el-input-number>
        <span> 万元</span>
      </div>
      <el-button class=" inline-block" type="primary" icon="el-icon-search" style="" @click="sousuo" :loading="$store.state.help.loading.chanye">搜索</el-button>
    </div>
  </div>
</template>

<script>
  import {
    xiugaitijiao
  } from '../../util'
  export default {
    props: {
      display: false
    },
    data() {
      return {
        minnum: null,
        maxnum: null,
        options: [{
          value: 0,
          label: '区间取值'
        }, {
          value: 1,
          label: 'xx值以下'
        }, {
          value: 2,
          label: 'xx值以上'
        }],
        valueactive: 0,
        dismin: false,
        dismax: false
      }
    },
    computed: {
      initValue: {
        get() {
          return this.$store.state.duoxuan[2].initValue
        },
        set(value) {
          console.log(value)
          this.$store.commit('initValue_Mu', {
            value,
            eq: 2
          })
        }
      },
      initLabel: {
        get() {
          return this.$store.state.duoxuan[2].initLabel
        },
        set(value) {
          this.$store.commit('initLabel_Mu', {
            value,
            eq: 2
          })
        }
      },
    },
    methods: {
      sousuo() {
         this.$store.state.help.loading.chanye = true;
        xiugaitijiao(this.$store)
       //this.$emit('soule')
       this.$store.dispatch('comBasic_Ac')
       if (this.$route.path == '/') {
          this.$router.push({
            path: '/result/companylist'
          })
        }
      },
      moshixuanze(value) {
        if (value == 0) {
          this.dismin = false;
          this.dismax = false;
        } else if (value == 1) {
          this.dismin = true;
          this.dismax = false;
          this.minnum = 0;
          this.initValue=[null,this.$store.state.duoxuan[2].initValue[1]]
        } else {
          this.dismin = false;
          this.dismax = true;
          this.maxnum = 0;
          this.initValue=[this.$store.state.duoxuan[2].initValue[1],null]
        }
      },
      minxuan(value) {
        
        this.initValue=[value,this.$store.state.duoxuan[2].initValue[1]]
      },
      maxxuan(value) { 
       // this.options[1].value=value+'值以下'
       this.initValue=[this.$store.state.duoxuan[2].initValue[0],value]
      }
    },


  }

</script>

<style>
  .daxiaoshu .shuju .el-input {
    width: initial;
  }

  .shuju.el-input-number {
    width: 120px;
  }

</style>
<style scoped>
  .shuju.xuanzze {
    width: 120px;
    /* margin-right: 10px; */
  }

</style>
