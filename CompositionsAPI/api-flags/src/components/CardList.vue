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

import Card from "@/components/Card";
import {computed, onMounted} from "vue";
import {useStore} from 'vuex';

export default {
  components: {Card},
  setup(){

    const store = useStore()

    const countries = computed(() => {
      return store.getters.topCountriesPopulation
    })

    onMounted( async () => {
      await store.dispatch('getCountries')
      await store.dispatch('filterRegion','Americas')
    })

    return{countries}
  }
}

</script>

