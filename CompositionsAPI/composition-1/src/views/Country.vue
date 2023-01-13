<template>
  <!--<h1>{{$route.params.name}}</h1>-->
  <h1>{{name}}</h1>
  <p v-for="(country,index) in arrayData" :key ='index'>
      {{ country.name.common }} - {{ country.region}}
  </p>
</template>

<script>

import {useFetch} from "@/hooks/useFetch";
import {useRoute} from 'vue-router'

export default {
  props: ['name'],
  setup(props){
    const nameParams = useRoute()
    const {arrayData} = useFetch(`https://restcountries.com/v3.1/name/${nameParams.params.name}`)

    return{arrayData}
  }
}
</script>

