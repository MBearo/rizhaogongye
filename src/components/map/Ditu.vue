<template>
  <div>
    <div id="wocao" :style="{height:clientHeight}"></div>
    <!-- <searchmini class="xinde"></searchmini> -->

    <!-- <el-tabs type="border-card" class="liebiao left" :style="{maxHeight:maxh}" style="width:380px;">
      <el-tab-pane>
        <span slot="label">
          <i class="iconfont icon-15rili"></i> 行业</span>
        <div slot="header" class="clearfix">
          <span style="font-size:18px;">行业</span>
          <span style="color:#606266;font-size:12px">点击箭头展开，方块勾选</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="resetChecked">重置选择</el-button>
        </div>
        <el-input placeholder="输入关键字进行过滤" v-model="filterText" style="margin-bottom:10px;">
        </el-input>

        <el-tree :data="$store.state.hangYe" show-checkbox @node-click="handleNodeClick" @check-change="handleCheckChange" :filter-node-method="filterNode"
          ref="tree2" node-key="value"></el-tree>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <i class="iconfont icon-fenlei"></i> 产业</span>
      </el-tab-pane>
      <el-tab-pane>

      </el-tab-pane>
      <el-tab-pane>

      </el-tab-pane>
    </el-tabs> -->
    <el-card class="liebiao left" :style="{maxHeight:maxh}" :class="{ins:leftguanbi}">
      <el-button round class="guanbi" @click="leftguangbis" icon="el-icon-close" size='mini'></el-button>
      <h4>公司概况：</h4>
      <el-form class="gongsigaikuang" ref="form" :model="form" label-width="100px" v-if="form.value!=''">
        <el-form-item label="公司名称：">
          {{form.value}}
        </el-form-item>
        <el-form-item label="所属地域：">
          <el-tag size="small" v-for="(item,index) in form.area" :key="index" v-if="form.area" style="margin-right:5px;">{{item.name}}</el-tag>
          <span v-else>暂无数据</span>
        </el-form-item>
        <el-form-item label="所属行业：">
          <span v-if="form.hangye">{{form.hangye.name}}</span>
          <span v-else>暂无数据</span>
        </el-form-item>
        <el-form-item label="所属产业：">
          <span v-if="form.chanye">
            <el-tag size="small"> <i class="iconfont inline-block" :class="form.chanye.icon" style="font-size:20px;"></i> <span class="inline-block">{{form.chanye.name}}</span> </el-tag>
            </span>
          <span v-else>暂无数据</span>
        </el-form-item>
        <el-form-item label="工业园区：">
          <span v-if="form.yuanqu.name">{{form.yuanqu.name}}</span>
          <span v-else>暂无数据</span>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="liebiao right" :style="{maxHeight:maxh}">
      <div class="sousuojieguo">
        <i class="el-icon-search"></i> 符合相关条件的公司共
        <el-tag size="small">{{$store.state.point.data1.length}}</el-tag> 家
      </div>
      <el-table :data="point" style="width: 100%;">
        <el-table-column label="公司名" width="250">
          <template slot-scope="scope">
            <!-- <i class="el-icon-time"></i> -->
            <span style="margin-left: 10px">{{ scope.row.value }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>

    </el-card>
  </div>
</template>

<script>
  let bmap = {};
  let markerClusterer
  //   import echarts from 'echarts'
  //   require('echarts/extension/bmap/bmap')
  //   import BMapLib from 'BMapLib'
  import BMap from 'BMap'
  import BMapLib from 'BMapLib'
  import searchmini from '../com/searchmini'
  export default {
    components: {
      searchmini
    },
    created() {
      this.$store.dispatch('hangYe_Ac')
      // this.$store.dispatch('diTu_Ac', {
      //   shuzu: '[]'
      // })
    },
    data() {
      return {
        data: [],
        clientHeight: '600px',
        maxh: '500px',
        filterText: '',
        ceshi: [],
        openInfoWinFuns: [],
        markers: [],
        form: {
          area: [],
          areaid: '',
          chanye: {

          },
          comcode: "",
          hangye: {},
          hangyeid: "",
          name: null,
          value: "",
          yuanqu: {},
          yuanquid: 0,

        },
        leftguanbi:false,
      } 
    },
    methods: {
      resetChecked() {
        this.$refs.tree2.setCheckedKeys([]);
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      handleNodeClick(data) {
        console.log(data);
      },
      handleCheckChange(data, checked, indeterminate) {
        //this.ceshi = this.$refs.tree2.getCheckedKeys()
        this.$store.dispatch('diTu_Ac', {
          fun: this
        })
        bmap.setZoom(9);
        //this.shuaxin();
        //console.log(data, checked, indeterminate);
      },
      handleEdit(index, row) {
        this.leftguanbi=true
        this.form = row;
        bmap.setCenter(new BMap.Point(this.$store.state.point.data1[index].lng, this.$store.state.point.data1[index].lat));
        bmap.setZoom(12);
        setTimeout(() => {
          this.openInfoWinFuns[index]();
        }, 300)

      },
      jiazai() {
        bmap = new BMap.Map("wocao");
        bmap.centerAndZoom(new BMap.Point(118.849442, 35.943182), 9);
        bmap.enableScrollWheelZoom();
         markerClusterer = new BMapLib.MarkerClusterer(bmap, {
          markers: []
        });
      },
      shuaxin() {
        bmap.clearOverlays();
        this.openInfoWinFuns.splice(0, this.openInfoWinFuns.length)
        this.markers.splice(0, this.markers.length)
        console.log(this.$store.state.point.data1)
        for (var i = 0; i < this.$store.state.point.data1.length; i++) {
          var marker = this.addMarker(this.$store.state.point.data1[i].lng, this.$store.state.point.data1[i].lat);
          this.markers.push(marker)
          var openInfoWinFun = this.addInfoWindow(marker, this.$store.state.point.data1[i].value);

          this.openInfoWinFuns.push(openInfoWinFun);
          //   var marker = new BMap.Marker(new BMap.Point(this.$store.state.point.data1[i].lng, this.$store.state.point.data1[
          //     i].lat)); // 创建标注
          //   bmap.addOverlay(marker); // 将标注添加到地图中

          //   var infoWindow = new BMap.InfoWindow(this.$store.state.point.data1[i].name, {
          //     width: 250, // 信息窗口宽度
          //     height: 80, // 信息窗口高度
          //     title: "信息窗口", // 信息窗口标题
          //     enableMessage: true //设置允许信息窗发送短息
          //   });
          //   var openInfoWinFun = function () {
          //     console.log(marker)
          //     marker.openInfoWindow(infoWindow);
          //   }
          //   this.openInfoWindows.push(openInfoWinFun)
          //   marker.addEventListener("click", openInfoWinFun);
          //   //   addClickHandler(content, marker);
        }
        markerClusterer.clearMarkers();
         markerClusterer.addMarkers(this.markers)
        
        markerClusterer.setMaxZoom(10);
        // function addClickHandler(content, marker) {
        //   marker.addEventListener("click", function (e) {
        //     openInfo(content, e)

        //   });
        // }

        // function openInfo(content, e) {
        //   var p = e.target;
        //   var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
        //   var infoWindow = new BMap.InfoWindow(content, opts); // 创建信息窗口对象 
        //   // openInfoWindows.push(openInfoWindow(infoWindow, point))
        //   bmap.openInfoWindow(infoWindow, point); //开启信息窗口
        // }
      },
      addMarker(lng, lat) {
        var marker = new BMap.Marker(new BMap.Point(lng, lat));
        bmap.addOverlay(marker);
        return marker;
      },
      addInfoWindow(marker, value) {
        var infoWindow = new BMap.InfoWindow(value, {
          title: '公司名称：',
          width: 200
        });
        var openInfoWinFun = function () {
          marker.openInfoWindow(infoWindow);
        }
        marker.addEventListener("click", openInfoWinFun);
        return openInfoWinFun;
      },
      leftguangbis() {
        this.leftguanbi=false
      }
    },
    mounted() {
      this.jiazai();
      this.$nextTick(function () {
        //this.jiazai();
      this.handleCheckChange()
      });
      this.clientHeight = `${document.documentElement.clientHeight-86}px`;
      this.maxh = `${document.documentElement.clientHeight-125}px`;
      // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
      window.onresize = temp => {
        this.clientHeight = `${document.documentElement.clientHeight-86}px`;
        this.maxh = `${document.documentElement.clientHeight-125}px`;
      };
    },
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      },
      qudong(){
        this.handleCheckChange() 
      }
    },
    computed: {
      point() {
        // this.jiazai()
        return this.$store.state.point.data1
      },
      qudong(){
        return this.$store.state.search
      }
    }
  }

</script>

<style scoped>
  .xinde {
    position: fixed;
    top: 50px;
    left: 20px;
  }

  .liebiao {
    position: absolute;
    top: 105px;
    overflow: auto;
  }

  .liebiao.left {
    left: 20px;
    border-radius: 4px;
    transform: translate(-110%, 0);
    transition: .2s;
    width: 380px;
  }

  .liebiao.right {
    right: 20px;
    /* transform: translate(110%, 0);
    transition: .2s; */
  }

  .el-input {
    width: 100%;
  }

  .sousuojieguo {
    /* border: 1px solid #dcdfe6;
  border-radius: 100px;
  padding: 5px 10px; */
    /* border-bottom: 1px solid #dcdfe6; */
    padding-bottom: 10px;
  }

  .gongsigaikuang .el-form-item {
    margin-bottom: 10px;
  }

  .left.ins {
    transform: translate(0, 0);
  }
  .right.ins{
     transform: translate(0, 0);
  }
  .guanbi {
    position: absolute;
    right: 10px;
    top: 10px;
  }

</style>
<style>
  #wocao img {
    max-width: initial;
    width: initial;
  }

</style>
