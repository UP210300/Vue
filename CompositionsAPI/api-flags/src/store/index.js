import { createStore } from 'vuex'

export default createStore({
  state: {
    countries:[],
    filterCountries:[]
  },
  getters: {
    topCountriesPopulation(state){
      return state.countries.sort((a,b)=>{
        return a.population < b.population ? 1 : -1
      })
    }
  },
  mutations: {
    setCountries(state,payload){
      state.countries = payload
    },
    setFilterCountries(state,payload){
      state.filterCountries = payload
    }
  },
  actions: {
    async getCountries ({commit}){
      try {
        const res = await fetch('https://restcountries.com/v3/all')
        const data = await res.json()
        console.log(data)
        commit('setCountries', data)
      }catch(error){
        console.log(error)
      }
    },
    filterRegion(commit,state){
      const filter = state.countries.filter(country =>
          country.region ===
      )
    }
  },
  modules: {
  }
})
