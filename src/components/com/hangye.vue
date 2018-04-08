<template>
  <div>
    <div class="ayaid inline-block">
      <el-button class="inline-block" @click="addshaixuan">+ 添加筛选</el-button>
      <el-popover :disabled="disabled" popper-class="inputtishi" ref="popover" placement="bottom-start" v-model="visible" trigger="hover"
        effect="dark">
        <span>点击搜索框可以直接点选分类，或者直接在其中搜索分类</span>
        <div class="inline-block inputtishiguanbi" @click="guanbitishi">
          <i class="el-icon-error"></i>
        </div>

        <el-cascader slot="reference" v-model="initValue" placeholder="试试搜索：铁矿采选" :options="xuanze" filterable change-on-select clearable
          @change="xuanzeChange" :elCascaderClass="elCascaderClass"></el-cascader>

      </el-popover>

      <el-button class=" inline-block" type="primary" icon="el-icon-search" style="margin-left:10px" @click="sousuo" :loading="$store.state.help.loading.chanye">搜索</el-button>
    </div>
  </div>
</template>

<script>
  import {
    xiugaitijiao
  } from '../../util'
  export default {
    props: {
      display: false,
      elCascaderClass: ''
    },
    data() {
      return {
        //区域的默认值
        disabled: this.display,
        visible: false,
      }
    },
    created() {
      this.$store.dispatch('hangYe_Ac')
    },
    computed: {
      xuanze() {
        return this.$store.state.hangYe
      },
      initValue: {
        get() {
          return this.$store.state.duoxuan[0].initValue
        },
        set(value) {
          this.$store.commit('initValue_Mu', {
            value,
            eq: 0
          })
        }
      },
      initLabel: {
        get() {
          return this.$store.state.duoxuan[0].initLabel
        },
        set(value) {
          this.$store.commit('initLabel_Mu', {
            value,
            eq: 0
          })
        }
      },
      searchValue() {
        return this.$store.state.duoxuan[0].searchValue
      }
    },
    watch: {
      searchValue() {

      }
    },
    methods: {
      xuanzeChange(zuobiao, string) {
        console.log(zuobiao,string)
        this.demo = zuobiao + string
        this.initValue = zuobiao
        this.initLabel = string;
      },
      addshaixuan() {
        if (this.$store.state.duoxuan[0].searchValue.length == 0) {
          this.$message.error('请选择第一个筛选条件');
          return;
        } else if (this.$store.state.duoxuan[0].eq == this.$store.state.duoxuan[0].searchValue.length) {
          this.$message.error('请选择一个当前的筛选条件');
          return;
        } else if (this.$store.state.duoxuan[0].searchValue[this.$store.state.duoxuan[0].eq].length == 0) {
          this.$message.error('点击添加条件后请选择新的筛选条件');
          return;
        } else {
          this.$message.success('点击添加条件后请选择新的筛选条件');
          var value = ++this.$store.state.duoxuan[0].eq;
          this.initValue = [];
          this.initLabel = [];
          this.$store.commit('changeEq_Mu', {
            value,
            eq: 0
          })
        }
      },
      guanbitishi() {
        //关闭提示
        this.disabled = true
      },
      sousuo() {
         this.$store.state.help.loading.chanye = true;
        xiugaitijiao(this.$store);
        this.$store.dispatch('comBasic_Ac')
        //this.$emit('soule')
        if (this.$route.path == '/') {
          this.$router.push({
            path: '/result/companylist'
          })
        }

      }
    }
  }

</script>

<style scoped>
  .ayaid>span {
    vertical-align: middle;
    display: inline-block;
  }

</style>
