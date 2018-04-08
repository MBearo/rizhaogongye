<template>
  <div class="kuaisudaohang">
    <div v-if="daohang.length>0" v-for="(item,index) in daohang" :key="index" @click="goAnchor(index)">
      {{item.value}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      daohang: {}
    },
    created() {
      // console.log(this.$route)
    },
    methods: {
      goAnchor(index) {
        var anchor = this.$parent.$el.querySelector('#' + this.daohang[index].href)
        document.documentElement.scrollTop = anchor.offsetTop
      }
    }
  }

</script>

<style>
  .kuaisudaohang {
    position: fixed;
    right: 30px;
    bottom: 60px;
  }

  .kuaisudaohang>div {
    /* color: #409eff;
    background: #ecf5ff;
    border: 1px solid #b3d8ff; */

    /* display: inline-block; */
    box-shadow: 0 0 9px rgba(0, 0, 0, .2);
    white-space: nowrap;
    cursor: pointer;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    transition: .1s;
    box-sizing: border-box;
    line-height: 1;
    margin-bottom: 10px;
    text-align: center;
  }

  .kuaisudaohang>div:hover {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
    transform: scale(1.1,1.1)
  }

</style>
