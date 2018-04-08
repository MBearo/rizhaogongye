<template>
  <div>
    <el-button @click="tijiao"></el-button>
  </div>
</template>

<script>
  import axios from 'axios'
  import urls from '../../vuex/urls'
  export default {
    methods: {
      tijiao() {
        axios.get(urls.urls + 'api/company', {
            params: {
              //'search': state.search,
              "search": {
                "product": [],
                "chanye": [],
                "area": [],
                "c_value": [],
                "garden": [],
                "orderby": 'false',
                "isdescending": 'false'
              },
              "com_name": ""
            }
          })
          .then(result => {
            console.log(result)

          })
      }
    }
  }

</script>

<style scoped>
  .liebiao {
    position: absolute;
    top: 50px;
    overflow: auto;
  }

  .liebiao.left {
    left: 20px;

  }

  .liebiao.right {
    right: 20px;
  }

  .el-input {
    width: 100%;
  }

</style>
<style>
  #wocao img {
    max-width: initial;
    width: initial;
  }

</style>
