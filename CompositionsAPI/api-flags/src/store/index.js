import { createStore } from 'vuex'

export default createStore({
  state: {
    countries:[],
    filterCountries:[]
  },
  getters: {
    topCountriesPopulation(state){
      return state.filterCountries.sort((a,b)=>{
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
        //const res = await fetch('api-paises.json')
        const data = await res.json()
        console.log(data)
        commit('setCountries', data)
      }catch(error){
        console.log(error)
      }
    },
    filterRegion({commit,state},region){
      console.log(region)
      const filter = state.countries.filter(country =>
          country.region.includes(region)
      )
      console.log(filter)
      commit('setFilterCountries',filter)
    },
    filterName({commit,state},text){
      const inputText = text.toLowerCase()
      const filter = state.countries.filter(country =>{
        const textAPI = country.name.toLowerCase()
        if (textAPI.includes(inputText)){
          return country
        }
      })
      commit('setFilterCountries',filter)
    }
  },
  modules: {
  }
})
