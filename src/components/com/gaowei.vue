<template>
  <div>
    <div class=" inline-block">
      <el-tooltip :disabled="display" class="item  inline-block" effect="dark" content="点击搜索框可以直接点选分类，或者直接在其中搜索分类" placement="bottom-start">
        <!-- <el-autocomplete v-model="state4" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect" :trigger-on-focus="false"></el-autocomplete> -->
        <el-input v-model="state4"></el-input>
      </el-tooltip>
      <el-button class=" inline-block"  type="primary" icon="el-icon-search" style="margin-left:10px" @click="sousuo" :loading="$store.state.help.loading.chanye">搜索</el-button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
  export default {
    props: {
      display: false
    },
    data() {
      return {
        restaurants: [],
        state4: '',
        timeout: null
      }
    },
    computed: {
      quYu() {
        return this.$store.state.quYu
      },
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = [];
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        cb(results);
      },
      handleSelect(item) {
        console.log(item);
      },
      sousuo() {
         this.$store.state.help.loading.chanye = true;
        // this.$emit('soule')
        if (this.$route.path == '/') {
          this.$router.push({
            path: '/result/companylist'
          })
        }
        // axios.get('http://10.0.2.243:99/api/company', {
        //     params: {
        //       com_name: this.state4
        //     }
        //   }).then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
      }
    }
  }

</script>

<style>


</style>
