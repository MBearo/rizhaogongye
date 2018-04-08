<template>
  <div>
    <div class=" inline-block">
      <el-popover :disabled="disabled" popper-class="inputtishi" ref="popover" placement="bottom-start" v-model="visible" trigger="hover"
        effect="dark">
        <span>点击搜索框可以直接点选分类，或者直接在其中搜索分类</span>
        <div class="inline-block inputtishiguanbi" @click="guanbitishi">
          <i class="el-icon-error"></i>
        </div>
        <el-autocomplete slot="reference" class="inline-block" v-model="state4" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect"
          :trigger-on-focus="false"></el-autocomplete>
      </el-popover>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
  import urls from '../../vuex/urls'
  import {weikong} from '../../util'
  export default {
    props: {
      display: false,
    },
    data() {
      return {
        restaurants: [],
        state4: '',
        timeout: null,
        visible: false,
        disabled: this.display,
        gongsiId:''
      }
    },
    computed: {
      Comguanbitishi: {
        set(value) {
          console.log(value)
          return value
        },
        get() {
          return this.display
        }

      }
    },
    methods: {
      querySearchAsync(queryString, cb) {
        // 调用 callback 返回建议列表的数据
        axios.get(urls.urls + 'api/company', {
            params: 
            {
            'search': {
              "product": [],
              "chanye": [],
              "area": [],
              "c_value": [],
              "garden": [],
              "orderby": 'false',
              "isdescending": 'false'
            },
            'com_name': queryString
          }
          }).then(function (response) {
            if (response.data.status == 100) {
              cb(response.data.data1);
            }
          })
          .catch(function (error) {
            console.log(error)
          });
      },
      handleSelect(item) {
        console.log(item.comcode)
        this.gongsiId=item.comcode
        this.$store.commit('comId_Mu',{value:item.comcode})
         this.$router.push({path:'/result/comdetails'})
        this.$emit('eee')
         this.$emit('soule')
      },
      guanbitishi() {
        //关闭提示
        this.disabled = true
      },
      sousuo(){
        
      }
    }
  }

</script>

<style>
  .inputtishi {
    background: #303133;
    color: #fff;
    padding: 10px;
    font-size: 12px;
    line-height: 1.2;
  }

  .inputtishiguanbi {
    cursor: pointer;
  }

  .inputtishi.el-popper[x-placement^=bottom] .popper__arrow:after {
    border-bottom-color: #303133;
  }

</style>
