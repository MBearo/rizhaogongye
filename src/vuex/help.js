
const state = {
    index:{
        search:{
            first:'',
            second:''
        }
    },
    loading:{
        chanye:false,
        zhibiao:false
    }
  }
  const mutations={
    loadingClose_Mu(duixiang,bool) {
          //console.log(111)
        state.loading[duixiang] = bool
      },
  }
  export default {
    state,
    mutations
  }