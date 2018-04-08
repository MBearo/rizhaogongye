<template>
  <div>
    <div class=" inline-block">
      <el-button class="inline-block" @click="addshaixuan">+ 添加筛选</el-button>
      <el-tooltip :disabled="display" class="item inline-block" effect="dark" content="点击搜索框可以直接点选分类，或者直接在其中搜索分类" placement="bottom-start">
        <el-select v-model="value" placeholder="试试搜索：钢铁产业" clearable filterable @change="changeHangye">
          <el-option v-for="item in quYu" :key="item.value" :label="item.label" :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.num }}</span>
          </el-option>
        </el-select>
        <!-- <el-cascader placeholder="试试搜索：钢铁产业" expand-trigger="hover" :options="quYu" filterable change-on-select></el-cascader> -->
      </el-tooltip>
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
      display: false
    },
    data() {
      return {
        value: ''
      }
    },
    created() {
      this.$store.dispatch('chanYe_Ac')
    },
    computed: {
      quYu() {
        return this.$store.state.chanYe
      },
      initValue: {
        get() {
          return this.$store.state.duoxuan[1].initValue
        },
        set(value) {
          this.$store.commit('initValue_Mu', {
            value,
            eq: 1
          })
        }
      },
      initLabel: {
        get() {
          return this.$store.state.duoxuan[1].initLabel
        },
        set(value) {
          this.$store.commit('initLabel_Mu', {
            value,
            eq: 1
          })
        }
      },
    },
    methods: {
      changeHangye(item) {
        if (this.value == '') {
          this.initValue = [];
          this.initLabel = [];
        } else {
          var arry = []
          arry.push(item)
          var arry2 = []
          arry2.push(this.quYu[this.value - 1].label)
          this.initValue = arry;
          this.initLabel = arry2;
        }

      },
      addshaixuan() {
        if (this.$store.state.duoxuan[1].searchValue.length == 0) {
          this.$message.error('请选择第一个筛选条件');
          return;
        } else if (this.$store.state.duoxuan[1].eq == this.$store.state.duoxuan[1].searchValue.length) {
          this.$message.error('请选择一个当前的筛选条件');
          return;
        } else if (this.$store.state.duoxuan[1].searchValue[this.$store.state.duoxuan[1].eq].length == 0) {
          this.$message.error('点击添加条件后请选择新的筛选条件');
          return;
        } else {
          this.$message.success('点击添加条件后请选择新的筛选条件');
          var value = ++this.$store.state.duoxuan[1].eq;
          this.value = '';
          this.initValue = [];
          this.initLabel = [];
          this.$store.commit('changeEq_Mu', {
            value,
            eq: 1
          })
        }
      },
      sousuo() {
        var url = this.$route.path.split('/');
        this.$store.state.help.loading.chanye = true;
        xiugaitijiao(this.$store);
        if (this.$route.path == '/') {
          this.$store.dispatch('comBasic_Ac')
          this.$router.push({
            path: '/result/companylist'
          })
        } 
        // else if (url[2] == 'map') {
           //this.$emit('soule')
        // }
      }
    }
  }

</script>

<style>


</style>
