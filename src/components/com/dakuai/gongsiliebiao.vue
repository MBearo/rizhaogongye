<template>
  <div class="comlist">
    <div
      class="comlist-block"
      v-for="(item,index) in $store.state.point.data1"
      :key="index"
    >
      <div
        class="cl-name"
        @click="tiaozhuan(item)"
      >
        {{item.value}}
  </div>
  <div class="cl-body flex">
    <div>
      <span class="cl-title">
        <i class="iconfont icon-15rili"></i>所属行业：</span>
      <span
        class="cl-content"
        v-if="item.hangye"
      >
        <el-tag>{{item.hangye.name}}</el-tag>
        </span>
        <span
          class="cl-content"
          v-else
        >暂无数据</span>
    </div>
    <div>
      <span class="cl-title">
        <i class="iconfont icon-fenlei"></i> 所属产业：</span>
      <span class="cl-content">
        <span v-if="item.chanye">
          <el-tag size="small">
            <i
              class="iconfont inline-block"
              :class="item.chanye.icon"
              style="font-size:20px;"
            ></i>
              <span class="inline-block">{{item.chanye.name}}</span>
          </el-tag>
        </span>
        <span v-else>暂无数据</span>
      </span>
    </div>
    <div>
      <span class="cl-title">
        <i class="iconfont icon-position"></i> 所属地域：</span>
      <span class="cl-content">
        <el-tag
          size="small"
          v-for="(didi,index) in item.area"
          :key="index"
          style="margin-right:5px;"
        >
          {{didi.name}}
          </el-tag>
      </span>
    </div>
    <div>
      <span class="cl-title">
        <i class="iconfont icon-chanyeyuanqu"></i> 工业园区：</span>
      <span class="cl-content">
        <span v-if="item.yuanqu.name">{{item.yuanqu.name}}</span>
        <span v-else>暂无数据</span>
      </span>
    </div>
  </div>

  </div>

  <!-- <el-pagination background style="margin-top:20px;" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]"
      :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
    </el-pagination> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("comBasic_Ac");
  },
  computed: {
    qudong() {
      return this.$store.state.search;
    }
  },
  watch: {
    qudong() {
      this.$store.dispatch("comBasic_Ac");
    }
  },
  methods: {
    tiaozhuan(item) {
      this.$store.commit("comId_Mu", {
        value: item.comcode
      });
      this.$router.push({
        path: "/result/comdetails"
      });
    }
  }
};
</script>

<style scoped>
.comlist-block {
  padding: 10px 20px;
  box-sizing: border-box;
  /* border: 1px solid #ebebeb; */
  border: 1px solid transparent;
  border-radius: 4px;
  transition: 0.2s;
  background-color: white;
}

.comlist-block:hover {
  border: 1px solid #ebebeb;
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
    0 2px 4px 0 rgba(232, 237, 250, 0.5);
}

.cl-name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  cursor: pointer;
  transition: 0.2s;
}

.cl-name:hover {
  color: #409eff;
}

.cl-body > div {
  width: 50%;
  line-height: 2;
}

.cl-title {
  color: #606266;
}

.comlist {
  margin-top: 10px;
}

.comlist-block {
  margin-bottom: 10px;
}

.comlist-block:last-child {
  margin-bottom: 0;
}
</style>
