import axios from 'axios'
import qs from 'qs'
import urls from '../urls'
import help from '../help'
const state = {
  jingji: [],
}
const actions = {
  jingji_ac({
    commit,
    state
  }, {
    indexstate,time
  }) {
    // console.log(indexstate)
    axios.get(urls.urls + 'api/industrialoutput', {
        params: {
          'search': indexstate.search,
          'conditions': {
            "industrialOutput": "0",
            "industrialOutput1": "0",
            "industrialSale": "0",
            "industrialSale1": "0",
            "exportDeliveryValue": "0",
            "exportDeliveryValue1": "0",
            "mainIncome": "0",
            "mainIncome1": "0",
            "totalProfit": "0",
            "totalProfit1": "0",
            "totalProfitTax": "0",
            "totalProfitTax1": "0",
            "finishedPro": "0",
            "finishedPro1": "0",
            "receivables": "0",
            "receivables1": "0",
            "totalAsset": "0",
            "totalAsset1": "0",
            "totalLiability": "0",
            "totalLiability1": "0",
            "mainCost": "0",
            "mainCost1": "0",
            "saleCost": "0",
            "saleCost1": "0",
            "manageCost": "0",
            "manageCost1": "0",
            "financialCost": "0",
            "financialCost1": "0",
            "kwh": "0",
            "kwh1": "0",
            "stateTax": "0",
            "stateTax1": "0",
            "localTax": "0",
            "localTax1": "0",
            "otherIncome": "0",
            "otherIncome1": "0",
            "totalTex": "0",
            "totalTex1": "0",
            "year": "0",
            "year1": "0"
          },
          'year':time,
        }
      })
      .then(result => {
        console.log(result)

        commit('jingji_mu', {
          result
        });
        help.mutations.loadingClose_Mu('jingji',false)
        help.mutations.loadingClose_Mu('zhibiao',false)
      }).catch(error => {
        console.log(error)
      });
  },

}
const mutations = {
  jingji_mu(state, {
    result
  }) {
    state.jingji = result.data;

  },

}
export default {
  state,
  actions,
  mutations
}

