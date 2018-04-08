import axios from 'axios'
import qs from 'qs'
import urls from '../urls'
import help from '../help'
const state = {
  jiben: [],
  fuze: []
}
const actions = {
  jiben_ac({
    commit,
    state
  },{indexstate}) {
    // console.log(indexstate)
    axios.get(urls.urls + 'api/companybasic', {
        params: {
          'search':indexstate.search,
          's': ''
        }
      })
      .then(result => {
        commit('jiben_mu', {
          result
        });
        help.mutations.loadingClose_Mu('chanye',false)
      }).catch(error => {
        console.log(error)
      });
  },
  fuze_ac({
    commit,
    state
  },{indexstate}) {
    axios.get(urls.urls + 'api/companystaff', {
        params: {
          'search': indexstate.search
        }
      })
      .then(result => {
        commit('fuze_mu', {
          result
        });
      }).catch(error => {
        console.log(error)
      });
  },
}
const mutations = {
  jiben_mu(state, {
    result
  }) {
    state.jiben = result.data;
    for (var i = 0; i < state.jiben.length; i++) {
      state.jiben[i].setUpTime = state.jiben[i].setUpTime.substring(0, 10)
    }
  },
  fuze_mu(state, {
    result
  }) {
    state.fuze_mu = result.data;
  },
}
export default {
  state,
  actions,
  mutations
}
