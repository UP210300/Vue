<template>
<div class="row">
  <div
      class="col-12"
      v-for="country in countries" :key="country.name"
  >
    <Card :country="country"/>
  </div>
</div>
</template>

<script>

import {useStore} from 'vuex';
import {computed, onMounted} from "vue";
import Card from "@/components/Card";

export default {
  components: {Card},
  setup(){

    const store = useStore()

    const countries = computed(() => {
      return store.getters.topCountriesPopulation
    })

    onMounted(() => {
      store.dispatch('getCountries')
    })

    return{countries}
  }
}

</script>

