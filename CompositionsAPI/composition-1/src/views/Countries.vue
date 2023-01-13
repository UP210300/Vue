<template>

  <h1>Countries list</h1>
  <p v-for="(country,index) in arrayData" :key ='index'>
    <router-link :to="`/countries/${country.name.common}`">
      {{ country.name.common }}
    </router-link>
  </p>

</template>

<script>

import {useFetch} from "@/hooks/useFetch";

export default {
  setup(){
    return{...useFetch('https://restcountries.com/v3.1/all')}
  }
}
</script>

