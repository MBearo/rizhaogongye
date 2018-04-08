<template>
  <div class="shaixuantiaojian">
    <div style="margin:0px 0 10px;font-size:17px;font-weight:bold"><i class="iconfont icon-shaixuan" style="margin-left:5px;color:#909399"></i> 筛选条件</div>
    <el-tag v-if="item.length!=0" v-for="(item,index) in tags1" :key="index" closable size="small" @close="taghandleClose(item,0)">
      {{item.join('/')}}
    </el-tag>
    <el-tag v-if="item.length!=0" v-for="(item,index) in tags2" :key="index+10" closable size="small" @close="taghandleClose(item,1)">
      {{item.join('/')}}
    </el-tag>
    <el-tag v-if="item.length!=0" v-for="(item,index) in tags3" :key="index+20" closable size="small" @close="taghandleClose(item,2)">
      {{item.join('/')}}
    </el-tag>
    <el-tag v-if="item.length!=0" v-for="(item,index) in tags4" :key="index+30" closable size="small" @close="taghandleClose(item,3)">
      {{item.join('/')}}
    </el-tag>
  </div>
</template>

<script>
  export default {
    methods: {
      taghandleClose(value, eq) {
        this.$store.commit('tagsDelete_Mu', {
          value,
          eq
        })
      },
    },
    computed: {
      tags1() {
        return this.$store.state.duoxuan[0].searchLabel
      },
      tags2() {
        return this.$store.state.duoxuan[1].searchLabel
      },
      tags3() {
        return this.$store.state.duoxuan[2].searchLabel
      },
      tags4() {
        return this.$store.state.duoxuan[3].searchLabel
      },
      tags5() {
        return this.$store.state.duoxuan[4].searchLabel
      },
      tags6() {
        return this.$store.state.duoxuan[5].searchLabel
      },
      tags7() {
        return this.$store.state.duoxuan[6].searchLabel
      }
    }
  }

</script>

<style scoped>
  .shaixuantiaojian {
    /* border: 1px solid #e6e6e6;
    background-color: white; */
    padding: 10px;
    box-sizing: border-box;
  }
.shaixuantiaojian span.el-tag{
    line-height: 1.6;
    white-space:initial;
    height: initial;
    display: flex;
    align-items: center;
    padding: 5px;
    justify-content: space-between;
    margin-bottom: 10px;
}
.shaixuantiaojian{
    /* transition: .1s;
    opacity: .5; */
    transition: .3s;
    /* transform: translate(90%,0); */
}
.shaixuantiaojian:hover{
    /* transform: translate(0,0); */
    opacity: 1;
}
</style>
<style>
.shaixuantiaojian span.el-tag .el-tag__close{
    flex: none;
    min-width: 0;
}
</style>

