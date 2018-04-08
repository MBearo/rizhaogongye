//import store from '../vuex/index'
const xiugaitijiao = (store) => {
  var shuju = store.state.duoxuan;
  var hangye = [];
  for (let i = 0; i < shuju[0].searchValue.length; i++) {
    hangye.push(shuju[0].searchValue[i][shuju[0].searchValue[i].length - 1])
    // for (let x = 0; x < shuju[0].searchValue[i].length; x++) {
    //   hangye.push(shuju[0].searchValue[i][x])
    // }
  }
  var chanye = [];
  for (let j = 0; j < shuju[1].searchValue.length; j++) {
    if (shuju[1].searchValue[j][0] != undefined) {
      chanye.push(shuju[1].searchValue[j][0] + '')
    } 
  }
  var diyu = [];
  for (let z = 0; z < shuju[3].searchValue.length; z++) {
    if (shuju[3].searchValue[z].length == 0) {} else {
      diyu.push(shuju[3].searchValue[z][shuju[3].searchValue[z].length - 1] + '')
    }
  }
  var result = {
    "product": hangye,
    "chanye": chanye,
    "area": diyu,
    "c_value": shuju[2].initValue,
    "garden": [],
    "orderby": 'false',
    "isdescending": 'false'
  }
  store.commit('search_Mu', {
    result
  })
}
const weikong = (duixiang, array, fun) => {
  if (array.length == 0) {
    duixiang.$message({
      message: '未检索到相关信息，请尝试更换关键字',
      type: 'warning'
    });
  } else {
    fun();
  }
}

export {
  xiugaitijiao,
  weikong
}
