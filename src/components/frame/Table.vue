<template>
  <div class="container flex">
    <!-- <router-view></router-view> -->
    <div class="left flex-0">
      <div :class="{lalala:wocao}" :style="{maxHeight:maxh}">
        <menus></menus>
      </div>
    </div>
    <div class="main flex-1">
      <div>
        <jiben ref="jiben"></jiben>
        <jingji ref="jingji"></jingji>
      </div>
    </div>
    <div class="right flex-0">
      <div :class="{sxi:wocao}" :style="{maxHeight:maxh}">
        <condition></condition>
      </div>
    </div>
  </div>
</template>

<script>
  import menus from '../com/mulu2'
  import condition from '../com/shaixuan'
  import jiben from '../com/dakuai/jibenqingkuang'
  import jingji from '../com/dakuai/jingjizhibiao'
  export default {
    data() {
      return {
        wocao: false,
        maxh: '99999px'
      }
    },
    components: {
      menus,
      condition,
      jiben,
      jingji
    },
    methods: {
      handleScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop >= 85) {
          this.wocao = true;
          this.maxh = (document.documentElement.clientHeight - 60) + 'px';
        } else {
          this.wocao = false;
        }
      },
      tiaozhuan() {
        if (this.$route.path == '/result/resulttop/table'&&this.$refs.jiben!=undefined) {
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          var shuzu = ['#qiyegaikuang', '#zhuyaofuzeren', '#guquanqingkuang'];
          var shuzu2 = ['#jingjizhibiao']
          var yigeshuzu = []
          shuzu.forEach((value, index, array) => {
            yigeshuzu.push(this.$refs.jiben.$el.querySelector(shuzu[index]).offsetTop - scrollTop)
          })
          shuzu2.forEach((value, index, array) => {
            yigeshuzu.push(this.$refs.jingji.$el.querySelector(shuzu2[index]).offsetTop - scrollTop)
          })
          this.$store.commit('menu_Mu', {
            yigeshuzu
          })
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('scroll', this.tiaozhuan)
    },
  }

</script>
<style>
  .left>div:hover .tootip {
    opacity: 0;
  }

</style>

<style scoped>
  .container {
    flex-direction: row;
    flex-wrap: nowrap;
    /* background-color: #fbfbfb; */
  }

  .left,
  .right {
    width: 225px;
    padding: 10px;
    box-sizing: border-box;
  }

  /* .left>div {
    transition: .3s;
    transform: translate(-105%, 0)
  }

  .left>div:hover {
    transform: translate(0, 0)
  } */

  .left>div,
  .right>div {
    border-radius: 4px;
    /* border: 1px solid #e6e6e6; */
    background-color: white;
  }

  .main {
    padding: 10px 0;
    min-width: 900px;
  }

  .main>div {
    /* border: 1px solid #e6e6e6; */
    background-color: white;
    padding: 0 10px;
    box-sizing: border-box;
    border-radius: 4px;
  }

  .lalala,
  .sxi {
    position: fixed;
    width: 205px;
    top: 50px;
    box-sizing: border-box;
  }

  .lalala {
    /* overflow: auto; */
  }

</style>
