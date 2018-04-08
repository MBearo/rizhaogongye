import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'
import urls from './urls'
import help from './help'
import jiben from './com/jiben'
import jingji from './com/jingji'

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    //quYu: [{"value":61,"label":"市直属","children":[]},{"value":4,"label":"东港区","children":[{"value":62,"label":"区直属"},{"value":51,"label":"三庄镇"},{"value":42,"label":"秦楼街道"},{"value":52,"label":"后村镇"},{"value":43,"label":"北京路街道"},{"value":44,"label":"卧龙山街道"},{"value":45,"label":"两城街道"},{"value":46,"label":"河山镇"},{"value":47,"label":"涛雒镇"},{"value":38,"label":"日照街道"},{"value":48,"label":"西湖镇"},{"value":39,"label":"香河街道"},{"value":49,"label":"陈疃镇"},{"value":40,"label":"石臼街道"},{"value":50,"label":"南湖镇"},{"value":41,"label":"奎山街道"}]},{"value":5,"label":"岚山区","children":[{"value":63,"label":"区直属"},{"value":60,"label":"前三岛乡"},{"value":53,"label":"岚山头街道"},{"value":54,"label":"安东卫街道"},{"value":55,"label":"虎山镇"},{"value":56,"label":"碑廓镇"},{"value":57,"label":"黄墩镇"},{"value":58,"label":"高兴镇"},{"value":59,"label":"巨峰镇"}]},{"value":67,"label":"经济技术开发区","children":[]},{"value":3,"label":"莒县","children":[{"value":65,"label":"县直属"},{"value":33,"label":"寨里河镇"},{"value":24,"label":"招贤镇"},{"value":34,"label":"安庄镇"},{"value":25,"label":"果庄乡"},{"value":35,"label":"刘官庄镇"},{"value":26,"label":"店子集镇"},{"value":17,"label":"陵阳镇"},{"value":36,"label":"夏庄镇"},{"value":27,"label":"阎庄镇"},{"value":18,"label":"东莞镇"},{"value":37,"label":"长岭镇"},{"value":28,"label":"桑园乡"},{"value":19,"label":"棋山镇"},{"value":29,"label":"小店镇"},{"value":20,"label":"龙山镇"},{"value":30,"label":"城阳街道"},{"value":21,"label":"浮来山镇"},{"value":31,"label":"洛河镇"},{"value":22,"label":"库山乡"},{"value":32,"label":"峤山镇"},{"value":23,"label":"中楼镇"}]},{"value":2,"label":"五莲县","children":[{"value":64,"label":"县直属"},{"value":14,"label":"松柏镇"},{"value":15,"label":"石场乡"},{"value":6,"label":"于里镇"},{"value":16,"label":"户部乡"},{"value":7,"label":"中至镇"},{"value":8,"label":"汪湖镇"},{"value":9,"label":"叩关镇"},{"value":10,"label":"街头镇"},{"value":11,"label":"许孟镇"},{"value":12,"label":"高泽镇"},{"value":13,"label":"市北经济开发区"}]}],
    quYu: [{
      value: '',
      label: ''
    }],
    hangYe: [],
    chanYe: [],
    yuanQu: [],
    initquYu: [],
    initquYuName: [],
    //标签
    tags: [],
    //公司列表
    comList: ['1', '2', '3'],
    tagsValue: {
      product: [],
      chanye: [],
      c_value: [],
      area: [],
      garden: [],
      danger: []
    },
    tagsLabel: {
      product: [],
      chanye: [],
      c_value: [],
      area: [],
      garden: [],
      danger: []
    },
    duoxuan: [{
        searchValue: [],
        searchLabel: [],
        initValue: [],
        initLabel: [],
        eq: 0,
      },
      {
        searchValue: [],
        searchLabel: [],
        initValue: [],
        initLabel: [],
        eq: 0,
      },
      {
        searchValue: [[null,null]],
        searchLabel: [],
        initValue: [null,null],
        initLabel: [],
        eq: 0,
      },
      {
        searchValue: [],
        searchLabel: [],
        initValue: [],
        initLabel: [],
        eq: 0,
      },
      {
        searchValue: [],
        searchLabel: [],
        initValue: [],
        initLabel: [],
        eq: 0,
      }, {
        searchValue: [],
        searchLabel: [],
        initValue: [],
        initLabel: [],
        eq: 0,
      },
      {
        searchValue: [],
        searchLabel: [],
        initValue: [],
        initLabel: [],
        eq: 0,
      },
      {
        searchValue: [],
        searchLabel: [],
        initValue: [],
        initLabel: [],
        eq: 0,
      },
      {
        searchValue: [],
        searchLabel: [],
        initValue: [],
        initLabel: [],
        eq: 0,
      },
    ],
    point: {
      data2: [],
      data1: []
    },
    'search': {
      "product": [],
      "chanye": [],
      "area": [],
      "c_value": [],
      "garden": [],
      "orderby": 'false',
      "isdescending": 'false'
    },
    //gongsiId:''
    banben:{xianshi:true,v:'beta 1.1'},
    menu:[],
    comId:'',
    time:{year:'2017'}
  },
  actions: {
    quYu_Ac({
      commit,
      state
    }) {
      axios.get(urls.urls + 'api/area')
        .then(result => {
          commit('quYu_Mu', {
            result
          });
        }).catch(error => {
          console.log(error)
        })
    },
    hangYe_Ac({
      commit,
      state
    }) {
      axios.get(urls.urls + 'api/industry')
        .then(result => {
          commit('hangYe_Mu', {
            result
          });
        }).catch(error => {
          console.log(error)
        })
    },
    chanYe_Ac({
      commit,
      state
    }) {
      axios.get(urls.urls + 'api/rz_in')
        .then(result => {
          commit('chanYe_Mu', {
            result
          });
        }).catch(error => {
          console.log(error)
        })
    },
    yuanQu_Ac({
      commit,
      state
    }) {
      axios.get(urls.urls + 'api/garden')
        .then(result => {
          commit('yuanQu_Mu', {
            result
          });
        }).catch(error => {
          console.log(error)
        })
    },
    diTu_Ac({
      commit,
      state
    }, {
      fun
    }) {
      axios.get(urls.urls + 'api/company', {
          params: {
            'search': state.search,
          //  "search": {
          //     "product": [],
          //     "chanye": [],
          //     "area": [],
          //     "c_value": [],
          //     "garden": [],
          //     "orderby": 'false',
          //     "isdescending": 'false'
          //   },
            "com_name": state.comId
          }
        })
        .then(result => {
          commit('LinshiDituPoint_Mu', {
            result
          });
         help.mutations.loadingClose_Mu('chanye',false)
          //console.log(fun)
          fun.shuaxin();
          //console.log(JSON.stringify(result.data,null,4))

        }).catch(error => {
          console.log(error)
        })
    },
    comBasic_Ac({
      commit,
      state
    }) {
      axios.get(urls.urls + 'api/company', {
          params: {
            'search': state.search,
            "com_name": state.comId
          }
        })
        .then(result => {
          commit('LinshiDituPoint_Mu', {
            result
          });
          help.mutations.loadingClose_Mu('chanye',false)
        }).catch(error => {
          console.log(error)
        })
    },
  },
  mutations: {
    quYu_Mu(state, {
      result
    }) {
      state.quYu = result.data
    },
    hangYe_Mu(state, {
      result
    }) {
      state.hangYe = result.data
    },
    chanYe_Mu(state, {
      result
    }) {
      state.chanYe = result.data.data
    },
    yuanQu_Mu(state, {
      result
    }) {
      state.yuanQu = result.data.data
    },
    initquYu_Mu(state, {
      value
    }) {
      state.initquYu.splice(0, state.initquYu.length)
      for (var i = 0; i < value.length; i++) {
        state.initquYu.push(value[i])
      }
    },
    initquYuName_Mu(state, {
      value
    }) {
      state.initquYuName.splice(0, state.initquYuName.length)
      state.initquYuName = value
    },
    tagsChange_Mu(state, {
      value
    }) {
      state.tags[value].value = state.initquYuName.join(' / ')
    },
    tagsAdd_Mu(state, {
      value
    }) {
      state.tags.push({
        id: value,
        value: state.initquYuName.join(' / ')
      })
    },
    tagsDelete_Mu(state, {
      value,
      eq
    }) {
      var data = state.duoxuan[eq];
      data.initLabel.splice(0, data.initLabel.length);
      data.initValue.splice(0, data.initValue.length);
      if (data.eq - data.searchValue.length == 0) {
        data.eq--;
        // data.initLabel.push(data.searchLabel[data.searchLabel.length-1])
        // data.initValue.push(data.searchValue[data.searchValue.length-1])
      }
      var weizhi = data.searchLabel.indexOf(value);
      if (weizhi == -1) {
        console.log('tag匹配错误')
      }
      //state.duoxuan[eq].eq--;
      data.searchLabel.splice(weizhi, 1);
      data.searchValue.splice(weizhi, 1);
    },
    //第三个搜索
    initValue_Mu(state, {
      value,
      eq
    }) {
      state.duoxuan[eq].initValue.splice(0, state.duoxuan[eq].initValue.length)
      for (var i = 0; i < value.length; i++) {
        state.duoxuan[eq].initValue.push(value[i])
      }
      state.duoxuan[eq].searchValue.splice(state.duoxuan[eq].eq, 1, value);
    },
    initLabel_Mu(state, {
      value,
      eq
    }) {
      state.duoxuan[eq].initLabel.splice(0, state.duoxuan[eq].initLabel.length)
      for (var i = 0; i < value.length; i++) {
        state.duoxuan[eq].initLabel.push(value[i])
      }
      state.duoxuan[eq].searchLabel.splice(state.duoxuan[eq].eq, 1, value);
      // state.searchLabel3[state.eq3]=value
    },
    changeEq_Mu(state, {
      value,
      eq
    }) {
      state.duoxuan[eq].eq = value
    },
    LinshiDituPoint_Mu(state, {
      result,
    }) {
      state.point = result.data
    },
    gongsiming_Mu(state, {
      result,
    }) {
      state.gongsiId = result
    },
    search_Mu(state, {
      result
    }) {
      state.search = result
    },
    menu_Mu(state, {
      yigeshuzu
    }) {
      state.menu.splice(0, state.menu.length)
      state.menu = yigeshuzu
    },
    comId_Mu(state, {
      value
    }) {
      state.comId = value
    },
  },
  getters: {
    // tags3: state => {
    //   var lala = state.searchLabel3;
    //   var mingzi = [];
    //   console.log(lala)
    //   for (var i = 0; i < lala.length; i++) {    
    //     mingzi.push(lala[i])
    //   }

    //   return lala
    // },
  },
  modules: {
    help,
    jiben,
    jingji
  }
})
