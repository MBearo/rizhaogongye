<template>
  <div class="result">
    <div>
      <searchmini @soule2="fujia"></searchmini>
    </div>
    <keep-alive>
      <router-view ref="luyou"></router-view>
    </keep-alive>

    <!-- <dfooter></dfooter> -->
  </div>
</template>

<script>
import searchmini from "../com/searchmini";
import dfooter from "../com/dfooter";
export default {
  components: {
    searchmini,
    dfooter
  },
  methods: {
    fujia() {
      // if(this.$refs.luyou.hasOwnProperty(handleCheckChange)){
      if (this.$route.path == "/result/map") {
        this.$refs.luyou.handleCheckChange();
      }

      //  }
    }
  }
};
</script>

<style>
.result .el-input,
.result .el-cascader {
  width: 300px;
}

.mulu2 .el-submenu .el-menu-item {
  padding-right: 0px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.mulu2 .biaoti {
  font-weight: bold;
  font-size: 17px;
}

.mulu2 .iconfont {
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
  vertical-align: middle;
}
</style>
